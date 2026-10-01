/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'SFMono-Regular', 'monospace'],
      },
      colors: {
        ink: { 950: '#07080b', 900: '#0b0d11', 850: '#101318', 800: '#161a20' },
        emerald: { 200: '#9cf2e2', 300: '#7ff0dc', 400: '#5eead4', 500: '#3fd6bf', 950: '#04211c' },
        teal: { 200: '#9cf2e2', 300: '#7ff0dc', 400: '#5eead4' },
        sky: { 200: '#c3d4ff', 300: '#9db8ff', 400: '#7aa2ff', 500: '#5b85f0', 950: '#0a1230' },
        amber: { 300: '#f5c86a', 400: '#f5b942' },
        slate: { 300: '#d9dfe9', 400: '#aab3c5', 500: '#929db1', 600: '#7c8698', 700: '#5c6675' },
      },
    },
  },
  plugins: [],
}
