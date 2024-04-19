import { cx, VariantProps } from "cva";
import { HTMLAttributes } from "react";
import bodyStyles from "@ui-library/shared-styles/text-body";

export interface BodyProps<T extends React.ElementType = "div">
  extends VariantProps<typeof bodyStyles>,
    HTMLAttributes<HTMLParagraphElement> {
  as?: T;
  children: React.ReactNode;
}

export function Body<T extends React.ElementType = "div">({
  as,
  className,
  size,
  bold,
  ...rest
}: BodyProps<T>): JSX.Element {
  const Component = as || "div";
  return (
    <Component
      className={cx(bodyStyles({ bold, size }), className)}
      {...rest}
    />
  );
}
