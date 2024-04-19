import { cva, VariantProps } from "cva";
import React from "react";

const headlineStyles = cva(["font-semibold"], {
  variants: {
    blockCase: {
      true: ["uppercase"],
    },
    level: {
      0: ["text-headline0 leading-headline0"],
      1: ["text-headline1 leading-headline1"],
      2: ["text-headline2 leading-headline2"],
      3: ["text-headline3 leading-headline3"],
      4: ["text-headline4 leading-headline4"],
      5: ["text-headline5 leading-headline5"],
      6: ["text-headline6 leading-headline6"],
    },
    growOnMd: {
      true: [],
    },
  },
  compoundVariants: [
    {
      growOnMd: true,
      level: 1,
      className: `md:text-headline0 md:leading-headline0`,
    },
    {
      growOnMd: true,
      level: 2,
      className: `md:text-headline1 md:leading-headline1`,
    },
    {
      growOnMd: true,
      level: 3,
      className: `md:text-headline2 md:leading-headline2`,
    },
    {
      growOnMd: true,
      level: 4,
      className: `md:text-headline3 md:leading-headline3`,
    },
    {
      blockCase: true,
      level: 0,
      className: "tracking-headline0-block",
    },
    {
      blockCase: true,
      level: 1,
      className: "tracking-headline1-block",
    },
    {
      blockCase: true,
      level: 2,
      className: "tracking-headline2-block",
    },
    {
      blockCase: true,
      level: 3,
      className: "tracking-headline3-block",
    },
    {
      blockCase: true,
      level: 4,
      className: "tracking-headline4-block",
    },
    {
      blockCase: true,
      level: 5,
      className: "tracking-headline5-block",
    },
    {
      blockCase: true,
      level: 6,
      className: "tracking-headline6-block",
    },
  ],
});

type HeadlineLevel = 0 | 1 | 2 | 3 | 4 | 5 | 6;

export type HeadlineElementType = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";

export type HeadlineProps<T extends HeadlineElementType = HeadlineElementType> =
  {
    as?: T;
    children: React.ReactNode;
    className?: string;
    level: HeadlineLevel;
  } & React.ComponentPropsWithoutRef<T> &
    VariantProps<typeof headlineStyles>;

export function Headline<T extends HeadlineElementType>({
  as,
  blockCase,
  children,
  className,
  growOnMd,
  level,
  ...rest
}: HeadlineProps<T>) {
  const Component = as || "h3";

  return (
    <Component
      {...rest}
      className={headlineStyles({ blockCase, className, growOnMd, level })}
    >
      {children}
    </Component>
  );
}
