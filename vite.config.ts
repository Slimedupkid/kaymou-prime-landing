import { defineConfig } from 'vite'
import { tanstackStart } from '@tanstack/react-start/plugin/vite'
import netlify from '@netlify/vite-plugin-tanstack-start'

export default defineConfig({
  build: {
    minify: 'esbuild', // <--- Add this line to bypass LightningCSS issues
  },
  plugins: [
    tanstackStart(),
    netlify(),
  ],
})