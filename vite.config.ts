import { defineConfig } from 'vite'
import { tanstackStart } from '@tanstack/react-start/plugin/vite'
import netlify from '@netlify/vite-plugin-tanstack-start'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  build: {
    minify: 'esbuild',
  },
  plugins: [
    tailwindcss(),   // 👈 add this
    tanstackStart(),
    netlify(),
  ],
})