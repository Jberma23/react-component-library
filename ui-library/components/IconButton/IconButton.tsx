import { VariantProps } from "cva";
import { forwardRef } from "react";
import { Icon, IconProps } from "@ui-library/index";
import { Button, type ButtonProps } from "@ui-library/index";
import { iconButtonStyles } from "@ui-library/shared-styles/shared-button-styles";

export interface IconButtonProps
  extends Omit<ButtonProps, "children" | "size">,
    Pick<IconProps, "SvgIcon">,
    VariantProps<typeof iconButtonStyles> {
  /** additional class name to add to the underlying renedered Icon/svg */
  iconClassName?: string;
}

const buttonSizeToIconSize: Record<
  NonNullable<IconButtonProps["size"]>,
  IconProps["size"]
> = {
  extraSmall: "small",
  small: "small",
  default: "default",
  large: "default",
};
export const IconButton = forwardRef<HTMLButtonElement, IconButtonProps>(
  ({ className, iconClassName, size = "default", SvgIcon, ...rest }, ref) => {
    const iconSize = buttonSizeToIconSize[size!];
    return (
      <Button
        {...rest}
        className={iconButtonStyles({ className, size })}
        size="fit"
        ref={ref}
      >
        <Icon className={iconClassName} size={iconSize} SvgIcon={SvgIcon} />
      </Button>
    );
  }
);

IconButton.displayName = "IconButton";
