/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        coral: {
          500: '#ff4d15',
          600: '#e53b05',
        },
        steel: {
          50: '#f8fafc',
          100: '#f1f4f8',
          200: '#e5e9f0',
          300: '#d7dde6',
          800: '#1b1d22',
          900: '#111216',
        }
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
        display: ['"Syne"', '"Plus Jakarta Sans"', 'sans-serif'],
        script: ['"Caveat"', 'cursive'],
        mono: ['"JetBrains Mono"', 'monospace'],
      }
    },
  },
  plugins: [],
}
