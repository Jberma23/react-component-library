import React, { forwardRef, useId } from "react";
import { cva, cx } from "cva";

export type CheckboxProps = JSX.IntrinsicElements["input"] & {
  label?: string | React.ReactNode;
};

const checkboxStyles = cva(
  [
    "appearance-none",
    "min-w-[1.25rem] w-[1.25rem] h-[1.25rem]",
    "border-1 border-gray-300",
    "outline-brand outline-offset-2",
    "cursor-pointer",
    "checked:bg-primary checked:border-none",
    "bg-center bg-no-repeat",
    `checked:bg-checkbox`,
    "duration-default transition-colors ease-in-out",
    "rounded-3",
  ],
  {
    variants: {},
  }
);

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  ({ id, label, className, ...rest }, ref) => {
    const generatedId = useId();
    return (
      <div className={cx(["flex w-fit pb-xs", className])}>
        <input
          className={checkboxStyles()}
          id={id || generatedId}
          type="checkbox"
          ref={ref}
          {...rest}
        />
        {label ? (
          <label
            className="ml-xs cursor-pointer whitespace-pre-line text-body-regular"
            htmlFor={id || generatedId}
          >
            {label}
          </label>
        ) : null}
      </div>
    );
  }
);

Checkbox.displayName = "Checkbox";
