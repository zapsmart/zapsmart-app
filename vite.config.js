// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'node:path'

export default defineConfig({
  plugins: [react()],
  base: '/', // Mantenha '/' para Netlify com domínio na raiz
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  server: {
    host: true,
    port: 5173,
    strictPort: true,
    hmr: { overlay: false },
  },
  build: {
    outDir: 'dist', // Garante que a saída seja para a pasta 'dist'
    sourcemap: true, // Mantém para depuração
    // rollupOptions: {
    //   output: { // Remova ou comente esta seção se você a adicionou antes
    //     entryFileNames: `assets/[name].js`,
    //     chunkFileNames: `assets/[name].js`,
    //     assetFileNames: `assets/[name].[ext]`
    //   }
    // },
  },
})
