import React from "react";

interface SVGRProps {
  title?: string;
  titleId?: string;
}
export interface LogoProps extends React.SVGProps<SVGSVGElement> {
  LogoComponent: React.ComponentType<JSX.IntrinsicElements["svg"] & SVGRProps>;
  title?: string;
  titleId?: string;
  width?: string;
  height?: string;
}

export function Logo({
  title,
  titleId,
  LogoComponent,
  width,
  height,
  ...svgProps
}: LogoProps): JSX.Element {
  return (
    <LogoComponent
      {...svgProps}
      role={title ? "img" : undefined}
      titleId={titleId}
      title={title}
      width={width}
      height={height}

    />
  );
}
