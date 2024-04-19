import { cva } from "cva";

export const overlayStyles = cva(
  [
    "flyout-overlay fixed w-full h-full inset-0 transition-opacity duration-default bg-black/50",
  ],
  {
    variants: {
      isVisible: {
        true: ["pointer-events-auto"],
        false: ["opacity-0 pointer-events-none"],
      },
    },
  }
);
