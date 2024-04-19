import { cva, VariantProps } from "cva";
import { forwardRef, useId } from "react";
import { sharedInputStyles } from "@ui-library/shared-styles/shared-input-styles";

const InputContainerStyles = cva(["flex flex-col gap-xxs min-w-0"], {
  variants: {
    fullWidth: {
      true: ["w-full"],
      false: ["w-fit"],
    },
  },
});

const InputStyles = cva(sharedInputStyles, {
  variants: {
    disabled: {
      true: ["bg-gray-100", "cursor-not-allowed"],
      false: ["hover:outline hover:outline-gray-300"],
    },
    fullWidth: {
      true: ["w-full"],
      false: ["w-fit"],
    },
  },
});

export type InputProps = JSX.IntrinsicElements["input"] &
  VariantProps<typeof InputStyles> &
  React.RefAttributes<HTMLInputElement> & { label?: string };

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, disabled, fullWidth, label, ...rest }, ref) => {
    const inputId = useId();
    return (
      <div className={InputContainerStyles({ fullWidth })}>
        {label ? <label htmlFor={inputId}>{label}</label> : null}
        <input
          disabled={disabled}
          className={InputStyles({ className, fullWidth, disabled })}
          id={inputId}
          ref={ref}
          {...rest}
        />
      </div>
    );
  }
);

Input.displayName = "Input";
