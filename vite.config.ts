import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // CRITICAL: './' makes paths relative, allowing the app to work 
  // in a subdirectory (like https://user.github.io/repo-name/)
  base: './', 
})