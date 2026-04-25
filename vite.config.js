import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/Siva_Portfolio/',
  server: {
    port: 8001,
  },
})