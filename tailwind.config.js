/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,ts,tsx}'],
  theme: {
    extend: {
      
    },
  },
  plugins: [require("daisyui")], // 👈 correct place for daisyui
}
