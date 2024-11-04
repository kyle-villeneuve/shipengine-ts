export type MaybeFunction<T> = T | (() => Promise<T>);

// Helper type to check if a type is 'never'
type IsNever<T> = T extends never ? true : false;

// Helper to extract a key from a union of objects
type ExtractKey<T, K extends string | number> = T extends any
  ? K extends keyof T
    ? T[K]
    : never
  : never;

// Get the type of a value at a specific path in a nested object type
export type PickDeep<
  T extends Record<string | number, any>,
  Path extends readonly (string | number)[]
> = Path extends readonly [infer First, ...infer Rest]
  ? First extends string | number
    ? Rest extends readonly (string | number)[]
      ? Rest["length"] extends 0
        ? IsNever<ExtractKey<T, First>> extends true
          ? "ERROR: This path leads to a 'never' type"
          : ExtractKey<T, First>
        : PickDeep<ExtractKey<T, First>, Rest>
      : never
    : never
  : never;
