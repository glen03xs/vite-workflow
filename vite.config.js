import { defineConfig } from "vite";

export default defineConfig({
  server: {
    watch: {
      usePolling: true,
    }
  },
  css: {
    devSourcemap: true 
  },
  build: {
    sourcemap: true,
    minify: false,
    rollupOptions: {
      output: {
        assetFileNames: "assets/[name].[ext]",
      },
    },
  },
});
