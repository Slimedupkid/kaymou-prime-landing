import { defineConfig } from 'vite'
import { tanstackStart } from '@tanstack/react-start/plugin/vite'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  build: {
    minify: 'esbuild',
  },
  plugins: [
    tailwindcss(),
    tanstackStart(),
  ],
})