import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    assetsDir: 'assets',
    rollupOptions: {
      output: {
        assetFileNames: (assetInfo) => {
          const info = assetInfo.name.split('.')
          const ext = info[info.length - 1]
          if (/png|jpe?g|svg|gif|tiff|bmp|ico/i.test(ext)) {
            return `assets/images/[name]-[hash].[ext]`
          }
          if (/mp4|webm|ogg|mp3|wav|flac|aac/i.test(ext)) {
            return `assets/videos/[name]-[hash].[ext]`
          }
          return `assets/[name]-[hash].[ext]`
        }
      }
    }
  },
  base: './'
})
