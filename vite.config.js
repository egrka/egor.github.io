import { defineConfig } from 'vite';
import { fileURLToPath, URL } from 'node:url';

export default defineConfig({
  base: '/egor.github.io/',
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  build: {
    outDir: 'docs',
    emptyOutDir: true,
  },
});refactor: replaced Gulp pipeline with Vite config