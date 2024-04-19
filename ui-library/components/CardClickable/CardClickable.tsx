import React from "react";
import {
  clickableAndLinkStyles,
  type ClickableAndLinkVariantProps,
} from "@ui-library/shared-styles/shared-card-styles";

export type CardClickableProps<T extends React.ElementType> = {
  as?: T;
  children: React.ReactNode;
  className?: string;
} & ClickableAndLinkVariantProps &
  React.ComponentPropsWithoutRef<T>;

export function CardClickable<T extends React.ElementType = "button">({
  appearance,
  as,
  children,
  className,
  disabled = false,
  elevation,
  isSelected,
  ...otherProps
}: CardClickableProps<T>) {
  const Component = as || "button";
  // Needed to avoid param reassign ESLint error
  const componentProps = { ...otherProps };

  if (disabled) {
    delete componentProps.onClick;
  }

  return (
    <Component
      className={clickableAndLinkStyles({
        appearance,
        className,
        disabled,
        elevation,
        isSelected,
      })}
      {...(disabled && as === "button" ? { disabled: true } : {})}
      {...(disabled && as !== "button" ? { "aria-disabled": true } : {})}
      {...componentProps}
    >
      {children}
    </Component>
  );
}
