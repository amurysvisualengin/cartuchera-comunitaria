module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      xs: "300px",
      smd: "375px",
      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
    },
    fontSize: {
      xSs: "0.688rem",
      xs: ".75rem",
      sm: ".875rem",
      tiny: ".9rem",
      base: "1rem",
      lg: "1.125rem",
      xlLg: "1.188rem",
      xl: "1.25rem",
      smTiny: "0.938rem",
      "1.9xl": "1.438rem",
      "2xl": "1.5rem",
      "3xl": "1.875rem",
      "4xl": "2.25rem",
      "4.5xl": "2.375rem",
      "5xl": "3rem",
      "5.5xl": "3.75rem",
      "6xl": "4rem",
      "7xl": "5rem",
      "8xl": "7rem",
    },
    letterSpacing: {
      shuffle: "0.08em",
      special: "0.15em",
    },
    extend: {
      lineHeight: {
        10.5: "2.875rem",
        11: "4.5rem",
      },
      spacing: {
        0.5: "0.125rem",
        1.5: "0.375rem",
        1.6: "0.4rem",
        2.4: "0.525rem",
        2.45: "0.55rem",
        2.5: "0.625rem",
        7.5: "1.875rem",
        9.5: "2.313rem",
        15: "3.75rem",
        17: "4.25rem",
        19: "5.5rem",
        24.5: "6.743rem",
        26: "7.5rem",
        72: "18rem",
        73: "19.06rem",
        76: "20.137rem",
        77: "20.636rem",
        84: "21rem",
        90: "22rem",
        91: "23.348rem",
        96: "24rem",
        96.5: "26.5rem",
        97: "30rem",
        97.5: "33rem",
        98: "35rem",
        99: "37rem",
        99.2: "38rem",
        99.3: "38.5rem",
        99.4: "42.7rem",
        99.5: "43.7rem",
        100: "45rem",
        100.5: "46.8rem",
        101: "47.8rem",
        102: "50rem",
        103: "54rem",
        104: "55rem",
        106: "42.375rem",
        106.5: "55rem",
        107: "60rem",

        110: "70rem",
        110.5: "82rem",
        110.6: "100rem",
        111: "150rem",
        115: "200rem",
      },
      scale: {
        0: "0",
        25: ".25",
        50: ".5",
        75: ".75",
        90: ".9",
        95: ".95",
        100: "1",
        105: "1.05",
        110: "1.1",
        120: "1.22",
        125: "1.25",
        150: "1.5",
        200: "2",
      },
      padding: {
        0.5: "0.2px",
      },
      boxShadow: {
        black: "0 2px 2px 0 rgba(0, 0, 0, 0.08)",
      },
      zIndex: {
        "-10": "-10",
      },
      rotate: {
        "-30": "-30deg",
      },
      maxWidth: {
        smMd: "25rem",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
