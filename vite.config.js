import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path' // Importa o módulo 'path' do Node.js

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      // Aqui nós mapeamos os atalhos.
      // Olhando sua estrutura de pastas, adicionei os mais comuns.
      'components': path.resolve(__dirname, './src/components'),
      'pages': path.resolve(__dirname, './src/pages'),
      'assets': path.resolve(__dirname, './src/assets'),
      'data': path.resolve(__dirname, './src/data'),
    }
  }
})