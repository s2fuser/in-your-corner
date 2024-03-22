/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      // screens: { 'sm': { 'max': '640px' } },
      // screens: {
      //   'sm': '640px',
      //   // => @media (min-width: 640px) { ... }
  
      //   'md': '768px',
      //   // => @media (min-width: 768px) { ... }
  
      //   'lg': '1024px',
      //   // => @media (min-width: 1024px) { ... }
  
      //   'xl': '1280px',
      //   // => @media (min-width: 1280px) { ... }
  
      //   '2xl': '1536px',
      //   // => @media (min-width: 1536px) { ... }
      // }
      screens: {
        'sm': {'max': '639px'}, // Mobile screens (up to 639px)
        'md': '640px',
        'lg': '1024px',
        'xl': '1280px',
        // You can add more breakpoints as needed
        '2xl': '1536px',
        '3xl': '1920px',
        '4xl': '2560px',
        '5xl': '3840px',
      },
    },
  },
  plugins: [],
}

