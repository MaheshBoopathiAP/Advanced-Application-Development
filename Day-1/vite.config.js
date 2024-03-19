import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import css from 'vite-plugin-css';


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(),],
  build: {
    // ... other build options
    rollupOptions: {
      external: ['konva'], // Mark 'konva' as external
    },
  },
})
