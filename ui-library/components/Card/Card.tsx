import React from "react";
import { VariantProps } from "cva";
import { cardStyles } from "@ui-library/shared-styles/shared-card-styles";

export type CardProps<T extends React.ElementType> = {
  as?: T;
  children: React.ReactNode;
  className?: string;
} & VariantProps<typeof cardStyles> &
  React.ComponentPropsWithoutRef<T>;

export function Card<T extends React.ElementType = "div">({
  appearance,
  as,
  children,
  className,
  elevation,
  isSelected,
  ...otherProps
}: CardProps<T>) {
  const Component = as || "div";

  return (
    <Component
      className={cardStyles({
        appearance,
        className,
        elevation,
        isSelected,
      })}
      {...otherProps}
    >
      {children}
    </Component>
  );
}
