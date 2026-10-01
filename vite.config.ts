import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// GitHub Pages deploy target lives at /Siavash-safi-CV/, so all asset URLs
// are emitted relative and base stays '/' for the Vercel root deploy.
export default defineConfig({
  plugins: [react()],
  base: './',
})
