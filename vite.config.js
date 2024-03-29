import { defineConfig } from "vite";
const includeHtml = require("./plugins/includer");

export default defineConfig({
  root: "./src",
  publicDir: "./public",
  server: {
    port: 3000,
  },
  build: {
    outDir: `../dist`,
  },
  plugins: [includeHtml("./src")],
});
