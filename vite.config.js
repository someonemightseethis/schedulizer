import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/schedulizer/',
  plugins: [react()],
  resolve: {
    alias: {
      "react-use": "@types/react-use",
    },
  },
})
