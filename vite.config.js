import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// base must match the GitHub Pages project path: kebrcic.github.io/feed-explainer/
export default defineConfig({
  base: '/feed-explainer/',
  plugins: [react()],
  build: { outDir: 'dist', assetsDir: 'assets' },
})
