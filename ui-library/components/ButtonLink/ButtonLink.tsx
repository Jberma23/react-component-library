import { cx } from "cva";
import React from "react";
import {
  GetButtonStyleProps,
  getButtonStyles,
} from "@ui-library/shared-styles/shared-button-styles";

// Allow any native anchor props, along with all props needed to style as a button
export type ButtonLinkProps = GetButtonStyleProps & JSX.IntrinsicElements["a"];

export const ButtonLink: React.FC<ButtonLinkProps> = (props) => {
  const { children, className, disabled, fullWidth, size, variant, ...rest } =
    props;
  return (
    <a
      {...rest}
      className={cx(
        className,
        "flex items-center justify-center",
        getButtonStyles({
          disabled,
          fullWidth,
          size,
          variant,
        })
      )}
    >
      {children}
    </a>
  );
};
