module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors:{
        primary: "#FF6363",
        secondary:{
          100: '#E2E2D5',
          200: '8888883'
        },
    },
    fontFamily: {
      body: ['Nunito']
    },
    spacing: {

      '0.2': '-1rem',

      '84': '21rem',

      '96': '24rem',
     }
   
  }
  },
  variants: {
    extend: {
      padding: ['hover'],
      transitionProperty: ['hover', 'focus'],
    },
  },
  plugins: [],
}
