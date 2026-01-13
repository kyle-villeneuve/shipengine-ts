export class RateLimitError extends Error {
  name = "RateLimitError";

  constructor(
    message = "Rate limit exceeded",
    public readonly retryAfterMs?: number
  ) {
    super(message);
  }
}

interface RetryConfig {
  maxRetries: number;
  baseDelay: number;
  maxDelay: number;
  retryMultiplier: number;
  jitterMs: number;
}

const DEFAULT_RETRY_CONFIG: RetryConfig = {
  maxRetries: 5,
  baseDelay: 1_000,
  maxDelay: 10_000,
  retryMultiplier: 2,
  jitterMs: 150, // Spread concurrent wakeups over this window
};

interface RateLimitState {
  /** Timestamp when rate limit expires */
  until: number;
  /** Consecutive 429s for this client (for backoff calculation) */
  consecutive: number;
}

export class RateLimitHandler {
  private state = new Map<string, RateLimitState>();
  private retryConfig: RetryConfig;

  constructor(retryConfig?: Partial<RetryConfig>) {
    this.retryConfig = { ...DEFAULT_RETRY_CONFIG, ...retryConfig };
  }

  private calculateBackoff(consecutive: number): number {
    const scale = Math.pow(this.retryConfig.retryMultiplier, consecutive);
    return Math.min(this.retryConfig.maxDelay, this.retryConfig.baseDelay * scale);
  }

  /**
   * Wait if there's an active rate limit for this client.
   * Adds jitter to spread out concurrent requests waking up together.
   */
  private async waitForRateLimit(clientId: string): Promise<void> {
    const clientState = this.state.get(clientId);
    if (!clientState) return;

    const baseWait = clientState.until - Date.now();
    if (baseWait <= 0) return;

    // Add jitter so concurrent waiters don't all wake at exactly the same time
    const jitter = Math.random() * this.retryConfig.jitterMs;
    await new Promise((resolve) => setTimeout(resolve, baseWait + jitter));
  }

  /**
   * Handle a 429 response. Updates shared rate limit state for this client.
   * Returns the retry delay in ms.
   */
  private recordRateLimit(clientId: string, headers: Headers): number {
    const currentState = this.state.get(clientId);
    const consecutive = (currentState?.consecutive ?? 0) + 1;

    const retryAfterHeader = headers.get("Retry-After");
    const retryMs = retryAfterHeader
      ? parseInt(retryAfterHeader, 10) * 1_000
      : this.calculateBackoff(consecutive);

    const newUntil = Date.now() + retryMs;

    // Only extend the wait time, never shorten it
    // This prevents a stale 429 response from reducing an already-set longer wait
    const until = Math.max(newUntil, currentState?.until ?? 0);

    this.state.set(clientId, { until, consecutive });

    return retryMs;
  }

  /**
   * Record a successful response. Resets consecutive 429 count but preserves
   * the rate limit window (let it expire naturally by time).
   */
  private recordSuccess(clientId: string): void {
    const currentState = this.state.get(clientId);
    if (!currentState) return;

    // Only reset consecutive count, not the until timestamp
    // This prevents race conditions where an in-flight success clears
    // a rate limit that was just set by another request's 429
    if (currentState.until > Date.now()) {
      this.state.set(clientId, { ...currentState, consecutive: 0 });
    } else {
      // Rate limit has expired, clean up entirely
      this.state.delete(clientId);
    }
  }

  wrap<T extends (arg1: any, arg2: any) => Promise<any>>(
    clientId: string,
    method: T
  ): T {
    return (async (arg1: Parameters<T>[0], arg2: Parameters<T>[1]) => {
      let retryCount = 0;

      while (true) {
        await this.waitForRateLimit(clientId);

        const response = await method(arg1, arg2);

        if (response.status === 429) {
          const retryMs = this.recordRateLimit(clientId, response.headers);

          if (retryCount >= this.retryConfig.maxRetries) {
            throw new RateLimitError("Max retries exceeded", retryMs);
          }

          retryCount++;
          continue;
        }

        if (response.status < 400) {
          this.recordSuccess(clientId);
        }

        return response;
      }
    }) as T;
  }
}
