import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
// const path = require('path')
import * as path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    open: true,
    proxy: {
      '/api': {
<<<<<<< HEAD
        target: 'http://localhost:3001',
=======
        target: 'http://127.0.0.1:3001',
>>>>>>> 096c9712dccaf6173415b6355064cccfc7ce5666
        secure: false,
        changeOrigin: true
      }
    }
<<<<<<< HEAD
  }
})
=======
  },
});
>>>>>>> 096c9712dccaf6173415b6355064cccfc7ce5666
