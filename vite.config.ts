import { defineConfig, splitVendorChunkPlugin } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
const mode = process.env?.MODE ?? 'dev'
console.log('[vite mode]',mode)

export default defineConfig({
  plugins: [react(),splitVendorChunkPlugin()],
  mode,
  server: {
    port: 8080,
    strictPort: true
  },
  preview: {
    port: 8080,
    strictPort: true
  }
})
