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
  css: {
    //* css模块化
    modules: {
      // css模块化 文件以.module.[css|less|scss]结尾
      generateScopedName: '[name]__[local]___[hash:base64:5]',
      hashPrefix: 'prefix',
    },
    //* 预编译支持less
    preprocessorOptions: {
      less: {
        javascriptEnabled: true,
      },
    },
  },
  server: {
    port: 3003,
    host: 'dev.imlogic.cn',
    hmr: true,
    watch: {
      usePolling: true, // 修复HMR热更新失效
    },
  },
});
