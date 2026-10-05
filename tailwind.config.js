/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        accent: '#00f2fe',
        primary: '#4facfe',
        dark: '#0f172a',
        card: '#1e293b'
      }
    },
  },
  plugins: [],
}
