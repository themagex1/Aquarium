/** @type {import('tailwindcss').Config} */ 
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {},
    colors: {
      'bgColor': '#2B2D42',
      'textColor': '#00CCFF',
      'buttonColor': '#D80032',
      'borderColor': '#EAC435',
      'spareColor': '#248232'
    }
  },
  variants: {
    extend: {
      backgroundColor: ['checked'],
    }
  },
  plugins: [
    require('flowbite/plugin')
  ],
}