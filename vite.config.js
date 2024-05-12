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
    assetsDir: '.',
    manifest: true,
    outDir: `dist`,
    emptyOutDir: true,
    sourcemap: true,
    minify: true,
    rollupOptions: {
    input: [
        'src/js/main.js',
        'src/css/style.scss',
        ],
      output: {
        entryFileNames: 'assets/[name].js',
        assetFileNames: 'assets/[name].[ext]',
      },
    },
  },
});
