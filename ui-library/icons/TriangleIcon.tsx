type TriangleIconProps = JSX.IntrinsicElements["svg"];

export const TriangleIcon = ({ className, ...rest }: TriangleIconProps) => (
  <svg
    className={className}
    height="12"
    width="13"
    viewBox="0 0 13 12"
    xmlns="http://www.w3.org/2000/svg"
    {...rest}
  >
    <path d="M1 11.5V1.20711L11.2929 11.5H1Z" />
  </svg>
);
