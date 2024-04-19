import { cx, VariantProps } from "cva";
import React, { ButtonHTMLAttributes, forwardRef } from "react";
import { UpdatingIndicatorIcon } from "@ui-library/icons/index";
import {
  buttonStyles,
  getButtonStyles,
} from "@ui-library/shared-styles/shared-button-styles";

export interface ButtonProps
  extends VariantProps<typeof buttonStyles>,
    ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string;
  disabled?: boolean;
  updating?: boolean;
  fullWidth?: boolean;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      className,
      disabled = false,
      updating = false,
      fullWidth = false,
      variant = "default",
      size = "default",
      ...rest
    },
    ref
  ) => (
    <button
      {...rest}
      className={cx(
        className,
        getButtonStyles({
          disabled: disabled || updating,
          fullWidth,
          size,
          variant,
        })
      )}
      disabled={disabled || updating}
      ref={ref}
    >
      <div className="flex flex-row gap-xxs">
        {updating ? (
          <UpdatingIndicatorIcon className="animate-spin self-center stroke-white" />
        ) : null}
        <div className="flex-1">{children}</div>
      </div>
    </button>
  )
);

Button.displayName = "Button";
