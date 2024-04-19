import { cva } from "cva";

const bodyStyles = cva(["leading-body"], {
  defaultVariants: {
    bold: false,
    size: "default",
  },
  variants: {
    bold: {
      true: ["font-semibold"],
      false: ["font-regular"],
    },
    size: {
      default: ["text-body-regular"],
      extraSmall: ["text-body-xsmall"],
      small: ["text-body-small"],
      large: ["text-body-large"],
    },
  },
});

export default bodyStyles;
