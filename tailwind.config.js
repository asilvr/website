module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        // Pantone: Forest Biome
        // https://www.pantone.com/color-finder/19-5230-TCX
        "primary-fg": "#194B46",
        // A sky-like blue that I thought went well with the
        // green
        "primary-bg": "#93c3fd",
        // Medium shade of gray
        "secondary-fg": "#374151",
        // Bold shade of gray
        "secondary-bg": "#1F2937",
      }
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
