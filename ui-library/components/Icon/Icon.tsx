import { cva } from "cva";

const iconSizes = {
  default: 24,
  small: 16,
  large: 32,
  scale: undefined,
};

export type IconSize = keyof typeof iconSizes;

export interface IconProps extends React.SVGProps<SVGSVGElement> {
  SvgIcon: React.ComponentType<
    React.PropsWithoutRef<React.ComponentProps<"svg">> & {
      title?: string | undefined;
      titleId?: string | undefined;
    }
  >;
  title?: string;
  titleId?: string;
  size?: IconSize;
  className?: string
}

const iconStyles = cva(["fill-current inline"]);

export const Icon = ({ SvgIcon, size, className, ...rest }: IconProps) => {
  const iconSize = iconSizes[size || "default"];
  return (
    <SvgIcon
      className={iconStyles({ className })}
      width={iconSize}
      height={iconSize}
      {...rest}
    />
  );
};
