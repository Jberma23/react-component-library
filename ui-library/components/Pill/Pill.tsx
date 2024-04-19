import { cva, cx, VariantProps } from "cva";
import {
  sharedPillStyles,
  pillAppearances,
} from "@ui-library/shared-styles/shared-pill-styles";
import bodyStyles from "@ui-library/shared-styles/text-body";

const pillStyles = cva(sharedPillStyles, {
  variants: {
    appearance: {
      ...pillAppearances,
    },
  },
  defaultVariants: {
    appearance: "default",
  },
});

export type PillProps<T extends React.ElementType> = {
  as?: T;
  bold?: boolean;
  children: React.ReactNode;
  className?: string;
} & React.ComponentPropsWithoutRef<T> &
  VariantProps<typeof pillStyles>;

export const Pill = <T extends React.ElementType>({
  as,
  appearance,
  bold = true,
  children,
  className,
  ...rest
}: PillProps<T>) => {
  const Component = as || "div";

  return (
    <Component
      {...rest}
      className={cx(
        bodyStyles({ bold }),
        pillStyles({ appearance, className })
      )}
    >
      {children}
    </Component>
  );
};
