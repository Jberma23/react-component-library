import type { Config } from "tailwindcss";
import theme, {animation, scale} from "tailwindcss/defaultTheme"

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./ui-library/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: { 
    ...theme,
    extend: {
    backgroundImage: {
      checkbox: `url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M18.351 6.351L20.05 8.05 9.6 18.497 3.951 12.85 5.65 11.15 9.6 15.102z' fill='white'/%3E%3C/svg%3E%0A")`,
    },
    gridTemplateRows: {
      7: "repeat(7, minmax(0, 1fr))",
    },
    zIndex: {
      auto: "auto",
      100: "100",
      200: "200",
      300: "300",
      400: "400",
      500: "500",
    },
    borderRadius: {
      0: "0px",
      3: "3px",
    },
  animation: {
    ...animation,
  },
  scale: {
    ...scale,
  },
  // Official documentation on screens: https://tailwindcss.com/docs/screens
  screens: {
    // => @media (min-width: []px)
    xs: "0px",
    sm: "320px",
    md: "768px",
    lg: "1024px",
    xl: "1280px",
    print: {
      /**
       * Styles to be applied during printing only
       *
       * @example
       * // Hiding an element
       * <div className="print:hidden">do not print</div>
       */
      raw: "print",
    },
  },
  padding: {
    0: "0",
    xxs: "0.25rem",
    xs: "0.5rem",
    s: "1rem",
    m: "1.5rem",
    l: "2rem",
    xl: "3rem",
    xxl: "6rem",
  },
  margin: {
    auto: "auto",
    0: "0",
    xxs: "0.25rem",
    xs: "0.5rem",
    s: "1rem",
    m: "1.5rem",
    l: "2rem",
    xl: "3rem",
    xxl: "6rem",
  },
  spacing: {
    0: "0",
    xxs: "0.25rem",
    xs: "0.5rem",
    s: "1rem",
    m: "1.5rem",
    l: "2rem",
    xl: "3rem",
    xxl: "6rem",
  },
  transitionDuration: {
    fast: "100ms",
    default: "150ms",
    slow: "300ms",
  },
  boxShadow: {
    0: "inset 0px 0px 0px 1px rgba(0, 0, 0, 0.09)",
    1: "0px 0px 2px rgba(0, 0, 0, 0.08), 0px 1px 4px rgba(0, 0, 0, 0.08)",
    2: "0px 0px 2px rgba(0, 0, 0, 0.05), 0px 1px 4px rgba(0, 0, 0, 0.05), 0px 1px 8px rgba(0, 0, 0, 0.05), 0px 2px 16px rgba(0, 0, 0, 0.05)",
    3: "0px 0px 2px rgba(0, 0, 0, 0.05), 0px 1px 4px rgba(0, 0, 0, 0.05), 0px 1px 8px rgba(0, 0, 0, 0.05), 0px 2px 16px rgba(0, 0, 0, 0.05), 0px 2px 32px rgba(0, 0, 0, 0.05)",
    chip: "0px 0px 0px 2px rgba(13, 214, 204, 1)",
  },
  colors: {
    current: "currentColor",
    transparent: "transparent",
    primary: {
      DEFAULT: "#4657CE",
      950: "#20224b",
      900: "#2e347a",
      800: "#343999",
      700: "#3942bc",
      600: "#4657ce",
      500: "#5770da",
      400: "#7793e3",
      300: "#a3b8ed",
      200: "#c8d4f5",
      100: "#e0e6f9",
      50: "#f1f4fd",
    },
    gray: {
      900: "#3d3d3d",
      800: "#454545",
      700: "#4f4f4f",
      600: "#5d5d5d",
      500: "#757575",
      400: "#888888",
      300: "#b0b0b0",
      200: "#d1d1d1",
      100: "#e7e7e7",
      50: "#f6f6f6"
    },
    danger: {
      DEFAULT: "#E83237",
      950: "#480709",
      900: "#84181b",
      800: "#a01418",
      700: "#c11419",
      600: "#e83237",
      500: "#f83b40",
      400: "#ff6a6e",
      300: "#ffa0a3",
      200: "#ffc7c9",
      100: "#ffe1e2",
      50: "#fff1f1",
    },
    success: {
      DEFAULT: "#00B589",
      950: "#003028",
      900: "#005546",
      800: "#006753",
      700: "#008368",
      600: "#00a47c",
      500: "#00b589",
      400: "#25e2ae",
      300: "#63f2c6",
      200: "#a0fad9",
      100: "#cdfee9",
      50: "#eafff7",
    },
    test: {
      950: "",
      900: "",
      800: "",
      700: "",
      600: "",
      500: "",
      400: "",
      300: "",
      200: "",
      100: "",
      50: "",
    },
    warning: {
      DEFAULT: "#E2B124",
      950: "#3c1e0c",
      900: "#673c1c",
      800: "#79471a",
      700: "#925816",
      600: "#b67a18",
      500: "#d39d1f",
      400: "#e2b124",
      300: "#ebcc59",
      200: "#f2e296",
      100: "#f8f1c9",
      50: "#fcf9ea",
    },
    black: {
      DEFAULT: "#000000",
    },
    white: {
      DEFAULT: "#FFFFFF",
    },
  },
  // TYPOGRAPHY
  fontFamily: {
    sans: ["'Proxima Nova'", "sans-serif"],
  },
  fontSize: {
    headline0: "2.5rem",
    headline1: "2rem",
    headline2: "1.75rem",
    headline3: "1.5rem",
    headline4: "1.25rem",
    headline5: "1rem",
    headline6: "0.875rem",
    "body-large": "1.125rem",
    "body-regular": "1rem",
    "body-small": "0.875rem",
    "body-xsmall": "0.75rem",
  },
  fontWeight: {
    regular: "400",
    semibold: "600",
    bold: "700",
  },
  borderWidth: {
    0: "0px",
    1: "1px",
    2: "2px",
    3: "3px",
    4: "4px",
  },
  lineHeight: {
    headline0: "1.2",
    headline1: "1.2",
    headline2: "1.2",
    headline3: "1.25",
    headline4: "1.2",
    headline5: "1.33",
    headline6: "1.33",

    body: "1.5",
  },
  letterSpacing: {
    "headline0-block": "3px",
    "headline1-block": "2.5px",
    "headline2-block": "2px",
    "headline3-block": "1.75px",
    "headline4-block": "1.5px",
    "headline5-block": "1.5px",
    "headline6-block": "1.5px",
  },

  aspectRatio: {
    auto: "auto",
    square: "1 / 1",
    video: "16 / 9",
    "1/1": "1 / 1",
    "3/2": "3 / 2",
    "4/3": "4 / 3",
    "5/4": "5 / 4",
    "7/5": "7 / 5",
    "16/9": "16 / 9",
  },
  },
},
  darkMode: "class",
  plugins: [require('@headlessui/tailwindcss')],
};
export default config;
