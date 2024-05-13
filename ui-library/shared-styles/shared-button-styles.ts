import { VariantProps, cva, cx } from "cva";
import type { BodyProps } from "../index";
import bodyStyles from "./text-body";

export const buttonStyles = cva(
  [
    "border-1 border-transparent",
    "rounded-md",
    "ring-offset-1 focus-visible:ring-2 focus-visible:ring-teal-500",
    "transition-colors duration-default",
  ],
  {
    defaultVariants: {
      disabled: false,
      fullWidth: false,
      size: "default",
      variant: "default",
    },
    variants: {
      variant: {
        default: [
          /** Colors, BG, Text */
          "bg-gray-200",
          "hover:bg-gray-300",
          "active:bg-gray-400",
          "text-black",
        ],
        outline: [
          // like classes grouped
          "bg-transparent",
          "hover:bg-primary-100",
          "active:bg-primary-200",
          "border-primary",
          "text-primary",
        ],
        primary: [
          "bg-primary",
          "text-white",
          "hover:bg-primary-800",
          "active:bg-primary-900",
          "transition",
        ],
        subtle: [
          "bg-transparent",
          "active:bg-gray-300",
          "text-black",
          "hover:bg-gray-200",
        ],
        subtleLink: [
          "active:bg-gray-300",
          "bg-transparent",
          "hover:bg-gray-200",
          "text-gray-700",
        ],
        link: [
          "active:bg-gray-300",
          "bg-transparent",
          "hover:bg-gray-200",
          "text-primary",
        ],
        none: [],
      },
      disabled: {
        true: ["opacity-40", "pointer-events-none"],
      },
      fullWidth: {
        true: ["w-full"],
      },
      size: {
        extraSmall: ["px-[0.75rem]", "py-xxs"],
        small: ["min-h-[35px]", "px-[0.75rem]", "py-[5.5px]"],
        default: ["h-[2.5rem]", "px-[1rem]", "py-0"],
        large: ["h-[3rem]", "px-[1rem]", "py-0"],
        /** Fit to the contents of the button without any additional gutters */
        fit: ["w-fit"],
        /** No styles regarding width and padding are applied */
        none: [],
      },
    },
  }
);

export const iconButtonStyles = cva([], {
  variants: {
    size: {
      extraSmall: ["h-[26px]", "w-[32px]", "px-xs"],
      small: ["h-[32px]", "w-[32px]", "px-xs"],
      default: ["h-[40px]", "h-[40px]", "px-xs"],
      large: ["h-[48px]", "h-[48px]", "px-[0.75rem]"],
    },
  },
});

export type GetButtonStyleProps = VariantProps<typeof buttonStyles>;

/**
 * **Do not use this directly, instead use `getButtonStyles`**
 *
 * Utility function to return the appropriate Body component's size prop.
 */
export const buttonToFontSize = (
  buttonType: GetButtonStyleProps["size"]
): BodyProps["size"] => {
  switch (buttonType) {
    case "extraSmall":
      return "small";
    case "large":
    case "small":
    case "default":
    default:
      return "default";
  }
};

export const getButtonStyles = ({
  disabled,
  fullWidth,
  size,
  variant,
}: GetButtonStyleProps) =>
  cx(
    buttonStyles({ disabled, fullWidth, variant, size }),
    bodyStyles({ bold: true, size: buttonToFontSize(size) })
  );
