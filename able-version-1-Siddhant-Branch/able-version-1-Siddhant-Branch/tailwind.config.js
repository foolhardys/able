/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'selector',
  content: [  "./src/**/*.{js,jsx,ts,tsx}"],
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["light", "dark"],
  },
  theme: {
    extend: {},
  },
}

