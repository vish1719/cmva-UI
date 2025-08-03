/** @type {import('tailwindcss').Config} */
module.exports = {
  prefix: 'tw-',  // <- This prevents class name conflicts with Bootstrap
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
