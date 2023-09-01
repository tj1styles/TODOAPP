module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens:{
      'xs':{'max': '639px'},
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }
      'mds':{'max':'900px'},

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
       
    },
    extend: {
      primary : '#243c5a', 
      width:{
        '3.55':'30%',
        '2.55':'45%',
      },
      
    },
  },
  plugins: [],
}