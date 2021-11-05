module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontSize: {
      xs: ".75rem",
      sm: ".875rem",
      tiny: ".9rem",
      base: "1rem",
      lg: "1.125rem",
      xl: "1.25rem",
      "2xl": "1.5rem",
      "3xl": "1.875rem",
      "4xl": "2.25rem",
      "5xl": "3rem",
      "6xl": "4rem",
      "7xl": "5rem",
    },
    extend: {
      lineHeight: {
        11: "5.5rem",
      },
      spacing: {
        72: "18rem",
        84: "21rem",
        96: "24rem",
        100: "45rem",
        102: "50rem",
        104: "55rem",
        106: "42.375rem",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
