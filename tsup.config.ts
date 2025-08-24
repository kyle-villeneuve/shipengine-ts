import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["src/index.ts"],
  format: ["cjs", "esm"],
  dts: true,
  clean: true,
  cjsInterop: true,
  splitting: false,
  sourcemap: false,
  minify: false,
});
