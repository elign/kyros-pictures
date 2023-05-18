module.exports = {
  purge: [],
  darkMode: "class",
  theme: {
    extend: {
      backgroundImage: {
        hero:
          "url('https://whizz-black.foxthemes.me/wp-content/uploads/2000/02/stock-photo-203371029.jpg')",
        "nature-dark": "url('/nature-dark.jpg')"
      }
    }
  },
  variants: {
    extend: {
      backgroundImage: ["dark"]
    }
  },
  plugins: [
    // ...
    require("@tailwindcss/forms")
  ]
};
