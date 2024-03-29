/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./public/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{html,js,css}",
  ],
  theme: {
    extend: {
      colors: {
        dark: "#1a1b1b"
      }
    },
  },
  plugins: [],
}

