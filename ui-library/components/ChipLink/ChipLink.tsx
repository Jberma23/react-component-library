import { cva, VariantProps } from "cva";
import Link, { LinkProps } from "next/link";
import {
  chipAppearances,
  sharedChipStyles,
} from "@ui-library/shared-styles/shared-chip-styles";

const chipStyles = cva(sharedChipStyles, {
  variants: {
    appearance: {
      default: [
        "bg-primary-100",
        "border-primary-200",
        "hover:bg-primary-200",
        "active:bg-primary-300",
      ],
      warning: [
        ...chipAppearances.warning,
        "hover:bg-warning-200",
        "active:bg-warning-300",
      ],
      danger: [
        ...chipAppearances.danger,
        "hover:bg-danger-200",
        "active:bg-danger-300",
      ],
      success: [
        ...chipAppearances.success,
        "hover:bg-success-200",
        "active:bg-success-300",
      ],
    },
  },
});

export type ChipLinkProps = {
  children?: React.ReactNode;
  className?: string;
} & VariantProps<typeof chipStyles> &
  Omit<LinkProps, "legacyBehavior" | "passHref">;

export function ChipLink({
  appearance,
  children,
  className,
  ...rest
}: ChipLinkProps): JSX.Element {
  return (
    <Link
      {...rest}
      className={chipStyles({ appearance, className })}
      legacyBehavior={false}
    >
      {children}
    </Link>
  );
}
