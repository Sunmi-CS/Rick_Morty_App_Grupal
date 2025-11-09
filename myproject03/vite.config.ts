import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  root: 'myproject03', // 👈 carpeta donde está tu index.html
  plugins: [
    react({
      babel: {
        plugins: [['babel-plugin-react-compiler']],
      },
    }),
  ],
  build: {
    outDir: '../dist', // 👈 construye la carpeta dist fuera de myproject03
    emptyOutDir: true,
  },
})
