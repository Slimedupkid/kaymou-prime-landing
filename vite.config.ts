import { defineConfig } from 'vite'
import { tanstackStart } from '@tanstack/react-start/plugin/vite'
import { nitro } from 'nitro/vite'
import viteReact from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [
    tanstackStart(),
    nitro(),
    viteReact(),
  ],
  css: {
    transformer: 'postcss',
  },
  ssr: {
    noExternal: [],
    external: ['tailwindcss', 'tw-animate-css'],
    optimizeDeps: {
      noDiscovery: true,
      include: [],
    },
  },
  build: {
    cssMinify: false,
    cssCodeSplit: false,
  },
})