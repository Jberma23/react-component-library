import { cva, VariantProps } from "cva";
import React from "react";
import { sharedChipStyles } from "@ui-library/shared-styles/shared-chip-styles";

const chipStyles = cva(sharedChipStyles, {
  defaultVariants: {
    appearance: "default",
    size: "default",
  },
  variants: {
    appearance: {
      default: ["bg-primary-100 border-primary-200 border-1"],
      warning: ["border-warning-200 border-solid border-1 bg-warning-100"],
      danger: ["border-danger-200 border-solid border-1 bg-danger-100"],
      success: ["border-success-200 border-solid border-1 bg-success-100"],
      static: ["bg-gray-200 border-gray-200"],
    },
    size: {
      default: ["px-xs py-xxs text-body-small"],
      small: ["px-xs py-0 text-body-xsmall lg:py-xxs lg:text-body-small"],
    },
  },
});

export interface ChipProps<T extends React.ElementType>
  extends VariantProps<typeof chipStyles> {
  as?: T;
  children: React.ReactNode;
  className?: string;
}

export function Chip<T extends React.ElementType>({
  as,
  children,
  className,
  appearance,
  size,
  ...rest
}: ChipProps<T>): JSX.Element {
  const Component = as || "span";
  return (
    <Component
      {...rest}
      className={chipStyles({ appearance, className, size })}
    >
      {children}
    </Component>
  );
}
