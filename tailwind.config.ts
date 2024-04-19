import type { Config } from "tailwindcss";
import {animation, scale} from "tailwindcss/defaultTheme"

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./ui-library/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
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
      brand: {
        DEFAULT: "#0DD6CC",
        green: {
          DEFAULT: "#00B589",
          900: "#01775A",
          800: "#02916E",
          300: "#66D8BC",
          200: "#C3F9EA",
          100: "#F0FFFB",
        },
        teal: {
          DEFAULT: "#0DD6CC",
          900: "#018383",
          800: "#11B0A8",
          700: "#1AC4BB",
          200: "#CFF7F5",
          100: "#E4FFFE",
        },
        indigo: {
          DEFAULT: "#4F18F9",
        },
      },
      primary: {
        DEFAULT: "#4657CE",
        900: "#2C3990",
        800: "#3D4AA5",
        300: "#C3C8F3",
        200: "#DEE1FA",
        100: "#F0F1FF",
        50: "#F5F5F9",
      },
      gray: {
        DEFAULT: "",
        900: "#2B2B2B",
        800: "#595959",
        700: "#757575",
        400: "#B5B5B5",
        300: "#D6D6D6",
        200: "#E5E5E5",
        100: "#F5F5F5",
      },
      danger: {
        DEFAULT: "#E83237",
        900: "#B11B1F",
        800: "#CE282C",
        300: "#FC9FA2",
        200: "#FFE1E1",
        100: "#FDF1F1",
      },
      success: {
        DEFAULT: "#00B589",
        900: "#01775A",
        800: "#02916E",
        300: "#66D8BC",
        200: "#C3F9EA",
        100: "#F0FFFB",
      },
      warning: {
        DEFAULT: "#E2B124",
        900: "#BA9014",
        800: "#BC8D00",
        300: "#F2D583",
        200: "#FFF4D2",
        100: "#FDFAF1",
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
  }},
  darkMode: "class",
  plugins: [],
};
export default config;
