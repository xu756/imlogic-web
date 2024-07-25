import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
// https://vitejs.dev/confi
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@/pages': '/src/pages',
      '@/service': '/src/service/index.ts',
      '@/components': '/src/components',
      '@/utils': '/src/utils',
      '@/assets': '/src/assets',
      '@/layout': '/src/layout',
      '@/store': '/src/store',
    },
  },
  server: {
    port: 3003,
    host: 'dev.imlogic.cn',
    hmr: true,
  },
});
