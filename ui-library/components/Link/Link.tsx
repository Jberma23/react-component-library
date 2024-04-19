import { cva, VariantProps } from "cva";
import React from "react";
import { Icon, IconProps } from "@ui-library/index";
import NextLink, { LinkProps as NextLinkProps } from "next/link";

const linkStyles = cva(
  [
    "items-center",
    "outline-2 outline-offset-2",
    "focus-visible:outline-brand",
    "cursor-pointer",
  ],
  {
    variants: {
      appearance: {
        default: ["text-primary hover:underline"],
        bold: ["font-semibold"],
      },
    },
    defaultVariants: {
      appearance: "default",
    },
  }
);

export type LinkProps = {
  children?: React.ReactNode;
  className?: string;
  endAdornmentIcon?: IconProps["SvgIcon"];
  startAdornmentIcon?: IconProps["SvgIcon"];
  /** Icon element to be added left of the link text */
  startAdornmentIconProps?: Partial<JSX.IntrinsicElements["svg"]>;
  /** Icon element to be added right of the link text */
  endAdornmentIconProps?: Partial<JSX.IntrinsicElements["svg"]>;
} & Omit<JSX.IntrinsicElements["a"], "ref"> &
  VariantProps<typeof linkStyles> &
  NextLinkProps;

export function Link({
  appearance,
  children,
  className,
  startAdornmentIcon: StartAdornmentIcon,
  endAdornmentIcon: EndAdornmentIcon,
  startAdornmentIconProps,
  endAdornmentIconProps,
  ...rest
}: LinkProps) {
  const startAdornment = StartAdornmentIcon ? (
    <Icon
      {...startAdornmentIconProps}
      className="mr-[0.5em] h-[1em]"
      SvgIcon={StartAdornmentIcon}
      size={"scale"}
      title={StartAdornmentIcon.name}
    />
  ) : null;

  const endAdornment = EndAdornmentIcon ? (
    <Icon
      {...endAdornmentIconProps}
      className="ml-[0.5em] h-[1em]"
      SvgIcon={EndAdornmentIcon}
      size={"scale"}
      title={"icon"}
    />
  ) : null;

  return (
    <NextLink
      {...rest}
      className={linkStyles({ appearance, className })}
      legacyBehavior={false}
      tabIndex={0}
    >
      {startAdornment}
      {children}
      {endAdornment}
    </NextLink>
  );
}
