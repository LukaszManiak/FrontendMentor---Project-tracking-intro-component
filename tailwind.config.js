/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    extend: {
      colors: {
        red: "hsl(0, 100%, 68%)",
        veryDarkBlue: "hsl(230, 29%, 20%)",
        darkGrayishBlue: " hsl(230, 11%, 40%)",
        grayishBlue: "hsl(231, 7%, 65%)",
        lightGrayishBlue: "hsl(207, 33%, 95%)",
      },
    },
  },
  plugins: [],
};
