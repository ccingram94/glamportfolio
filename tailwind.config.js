module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'imfell-sc': ['IM Fell English SC', 'serif'],
      'imfell': ['IM Fell English', 'serif'],
    },
    extend: {
      backgroundImage: {
        'hero': "url('/background.jpeg')",
        'gold': "url('/gold.png')",
      },
    },
  },
  plugins: [],
}