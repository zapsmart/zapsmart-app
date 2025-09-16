// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'node:path'

export default defineConfig({
  plugins: [react()],
  // Em Netlify (domínio na raiz) use base "/"
  // (base "./" é pra GitHub Pages e costuma causar tela branca no Netlify)
  base: '/',
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
    outDir: 'dist',
    sourcemap: true, // ajuda a debugar se algo quebrar
  },
})
