import { cva } from "cva";
import { Pill, PillProps } from "@ui-library/index";

const pillButtonStyles = cva(["transition-colors", "duration-default"], {
  variants: {
    appearance: {
      default: ["hover:bg-primary-200", "active:bg-primary-300"],
      primary: ["hover:bg-primary-200", "active:bg-primary-300"],
      selected: ["hover:bg-primary-200", "active:bg-primary-300"],
      subtle: [],
    },
  },
  defaultVariants: {
    appearance: "default",
  },
});

export type PillButtonProps = PillProps<"button"> & {
  onClick?: () => void;
};

export const PillButton: React.FC<PillButtonProps> = ({
  appearance,
  className,
  onClick,
  ...rest
}) => (
  <Pill
    {...rest}
    appearance={appearance}
    as="button"
    className={pillButtonStyles({ appearance, className })}
    onClick={onClick}
  />
);
