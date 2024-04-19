import Link, { type LinkProps } from "next/link";
import React, { HTMLAttributeAnchorTarget } from "react";
import {
  clickableAndLinkStyles,
  type ClickableAndLinkVariantProps,
} from "@ui-library/shared-styles/shared-card-styles";

export type CardLinkProps = {
  children: React.ReactNode;
  className?: string;
  href: string;
  target?: HTMLAttributeAnchorTarget;
} & ClickableAndLinkVariantProps &
  Omit<LinkProps, "href" | "legacyBehavior" | "passHref">;

export function CardLink({
  appearance,
  children,
  className,
  disabled,
  elevation,
  href,
  isSelected,
  target,
  ...otherProps
}: CardLinkProps) {
  if (disabled) {
    /**
     * Removing the href attribute is a valid way to disable an anchor. It isn't recommended to use
     * aria-disabled="true" on an anchor element with an href attribute but it's perfectly ok to
     * add it to anchor without an href. It's also worth noting that aria-disabled is explicitly
     * supported for role="link".
     *
     * See https://w3c.github.io/html-aria/#el-a and https://www.w3.org/TR/wai-aria-1.2/#link
     */
    return (
      <a
        role="link"
        target={target}
        aria-disabled="true"
        className={clickableAndLinkStyles({
          appearance,
          className,
          disabled,
          elevation,
          isSelected,
        })}
        {...otherProps}
      >
        {children}
      </a>
    );
  }
  return (
    <Link
      className={clickableAndLinkStyles({
        appearance,
        className,
        disabled,
        elevation,
        isSelected,
      })}
      href={href}
      legacyBehavior={false}
      target={target}
      {...otherProps}
    >
      {children}
    </Link>
  );
}
