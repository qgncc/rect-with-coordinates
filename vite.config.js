import { defineConfig } from "vite";
import path from "path";
import tspaths from "vite-tsconfig-paths";
export default defineConfig({
  build: {
    lib: {
      entry: path.resolve(__dirname, "src/index.ts"),
      name: "rect-with-coords",
      fileName: (format) => `rect-with-coords.${format}.js`,
    },
  },
  resolve: {
    alias: {
      src: path.resolve("./src/"),
    },
  },
  plugins: [tspaths()],
});
