/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        beige: '#f5f5dc',
        pastelPink: '#ffd1dc',
        pastelBlue: '#d1e7ff',
        pastelPurple: '#cdb4db',
        pastelYellow: '#fffacd',
      }
    },
  },
  plugins: [],
}