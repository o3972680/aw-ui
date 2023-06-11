/// <reference types="vitest" />

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import { resolve } from "path";
import { readFileSync } from "fs";

const packageJson = JSON.parse(
  readFileSync("./package.json", { encoding: "utf-8" })
);

const globals = {
  ...defineConfig(packageJson?.dependencies || {}),
};

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: "dist",
    lib: {
      entry: resolve(__dirname, "./src/components/index.ts"),
      name: "aw-ui",
      formats: ["cjs", "es", "umd"],
    },
    rollupOptions: {
      external: ["react", "react-dom", ...Object.keys(globals)],
      output: {
        globals: {
          react: "React",
        },
      },
    },
  },
  test: {
    globals: true,
    environment: "jsdom",
    coverage: {
      provider: "istanbul",
      reporter: ["text", "json", "html"],
    },
  },
});
