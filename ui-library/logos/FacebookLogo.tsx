import * as React from "react";
import { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgFacebookLogo = ({
  title,
  titleId,
  width,
  height,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    viewBox="0 0 266.895 266.895"
    xmlns="http://www.w3.org/2000/svg"
    aria-labelledby={titleId}
    width={width}
    height={height}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      d="M252.164 266.895c8.134 0 14.729-6.596 14.729-14.73V14.73c0-8.137-6.596-14.73-14.729-14.73H14.73C6.593 0 0 6.594 0 14.73v237.434c0 8.135 6.593 14.73 14.73 14.73h237.434z"
      fill="#485a96"
    />
    <path
      d="M184.152 266.895V163.539h34.692l5.194-40.28h-39.887V97.542c0-11.662 3.238-19.609 19.962-19.609l21.329-.01V41.897c-3.689-.49-16.351-1.587-31.08-1.587-30.753 0-51.807 18.771-51.807 53.244v29.705h-34.781v40.28h34.781v103.355h41.597z"
      fill="#ffffff"
    />
  </svg>
);
export default SvgFacebookLogo;
