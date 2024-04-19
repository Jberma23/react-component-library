// istanbul ignore file
import { cva, VariantProps } from "cva";

export const appearanceVariants = {
  appearance: {
    default: "bg-white",
    primary: "bg-primary-50",
    success: "bg-success-100",
    warning: "bg-warning-100",
    danger: "bg-danger-100",
  },
};

export const isSelectedVariants = {
  isSelected: {
    true: ["outline", "outline-2", "outline-primary"],
  },
};

export const cardStyles = cva(["rounded-3", "transition", "duration-default"], {
  defaultVariants: {
    appearance: "default",
    elevation: 0,
    isSelected: false,
  },
  variants: {
    ...appearanceVariants,
    elevation: {
      0: "shadow-0",
      1: "shadow-1",
      2: "shadow-2",
      3: "shadow-3",
    },
    ...isSelectedVariants,
  },
});

export const clickableAndLinkStyles = cva(
  [
    "block",
    "rounded-3",
    "hover:shadow-3",
    "focus-visible:outline",
    "focus-visible:outline-2",
    "focus-visible:outline-brand",
    "cursor-pointer",
    "transition",
    "duration-default",
  ],
  {
    defaultVariants: {
      appearance: "default",
      disabled: false,
      elevation: 1,
      isSelected: false,
    },
    variants: {
      ...appearanceVariants,
      elevation: {
        0: [],
        1: [],
        2: [],
        3: [],
      },
      ...isSelectedVariants,
      disabled: {
        true: ["hover:shadow-0", "cursor-not-allowed"],
      },
    },
    compoundVariants: [
      {
        disabled: true,
        elevation: 0,
        class: "shadow-0",
      },
      {
        disabled: true,
        elevation: 1,
        class: "shadow-0",
      },
      {
        disabled: true,
        elevation: 2,
        class: "shadow-0",
      },
      {
        disabled: true,
        elevation: 3,
        class: "shadow-0",
      },
      {
        disabled: false,
        elevation: 0,
        class: "shadow-0",
      },
      {
        disabled: false,
        elevation: 1,
        class: "shadow-1",
      },
      {
        disabled: false,
        elevation: 2,
        class: "shadow-2",
      },
      {
        disabled: false,
        elevation: 3,
        class: "shadow-3",
      },
    ],
  }
);

export type ClickableAndLinkVariantProps = VariantProps<
  typeof clickableAndLinkStyles
>;
