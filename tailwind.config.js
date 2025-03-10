const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter"],
        petitFormal: ["Petit Formal Script"],
        russonOne: ["Russon One"],
      },
      colors: {
        royalBlue: "#4169e1",
        darkBlue: "#0d1117",
        dark: "#0d1117",
      },
      animation: {
        fadeIn: 'fadeIn 2s ease-in-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
      },
    },
    backgroundImage: {
      //wrapperBg: "url('assets/images/wrapperBackground.svg')",
      //wrapperDark: "url('assets/images/wrapperDark.svg')",
    },
    container: {
      screens: {
        sm: "640px",
        md: "767px",
        lg: "1140px",
        xl: "1400px",
        "2xl": "1800px",
      },
    },
    screens: {
      "2xl": { min: "1535px" },
      // => @media (max-width: 1535px) { ... }
      xl: { min: "1279px" },
      // => @media (max-width: 1279px) { ... }
      lg: { min: "1023px" },
      // => @media (max-width: 1023px) { ... }
      md: { min: "767px" },
      // => @media (max-width: 767px) { ... }
      sm: { min: "639px" },
      // => @media (max-width: 639px) { ... }
    },
  },
  plugins: [],
});
