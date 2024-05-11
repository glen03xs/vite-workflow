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
    manifest: true,
    outDir: `dist`,
    emptyOutDir: true,
    sourcemap: true,
    minify: true,
    rollupOptions: {
    input: [
        'src/js/main.js',
        'src/css/styles.scss',
        ],
      output: {
        entryFileNames: '[name].js',
        assetFileNames: 'assets/[name].[ext]',
      },
    },
  },
});
