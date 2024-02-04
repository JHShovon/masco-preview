/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    screens: {
      sm: "576px",
      // => @media (min-width: 576px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "992px",
      // => @media (min-width: 992px) { ... }

      xl: "1200px",
      // => @media (min-width: 1200px) { ... }

      xxl: "1400px",
      // => @media (min-width: 1400px) { ... }
    },
    extend: {
      fontFamily: {
        // Add your custom fonts
        body: ["General Sans", "sans-serif"],
        header: ["Inter", "sans-serif"],
      },
      colors: {
        ColorAtomicTangerine: "#FF9966",
      },
    },
  },
  plugins: [],
};
