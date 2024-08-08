import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
// const path = require('path')
import * as path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      "~bootstrap": path.resolve(__dirname, "node_modules/bootstrap"),
    },
  },
  plugins: [react()],
  server: {
    port: 3000,
    open: true,
  },
});
