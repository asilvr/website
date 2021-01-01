module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        // Pantone: Forest Biome
        // https://www.pantone.com/color-finder/19-5230-TCX
        "forest-biome": "#194B46",

        // Pantone: Pink-a-boo
        // https://www.pantone.com/color-finder/13-2801-TCX
        "pink-a-boo": "#F7CDDB",
      }
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
