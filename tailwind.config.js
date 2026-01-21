/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'brand-red': '#c11a00',
        'dark-black': '#000814',
        'light-bg': '#f5f6fa',
        'testimonial-bg': '#dbdde9',
        'dark-bg': '#1a1a1a',
        'border-slate': '#1e293b',
      },
      screens: {
        'sm': {'max': '576px'},
        'md': {'max': '768px'},
        'lg': {'max': '991px'},
      },
    },
  },
  plugins: [],
}