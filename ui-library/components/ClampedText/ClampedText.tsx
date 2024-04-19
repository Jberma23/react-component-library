// istanbul ignore file

// This file is ignored because we currently cannot explicitly test
// whether clamp is enabled or not in a testing enviornment
// instead, snapshots will document component in expanded and clamped state.

import { VariantProps, cva } from "cva";
import React, { useEffect, useState } from "react";
import { Link } from "@ui-library/index";

const lineClampStyles = cva("text-body-regular", {
  defaultVariants: {
    lineCount: 3,
  },
  variants: {
    expanded: {
      true: "line-clamp-none",
      false: "",
    },
    /** The number of lines to clamp when collapsed */
    lineCount: {
      2: "",
      3: "",
    },
  },
  compoundVariants: [
    {
      lineCount: 2,
      expanded: false,
      className: "line-clamp-2",
    },
    {
      lineCount: 3,
      expanded: false,
      className: "line-clamp-3",
    },
  ],
});

export type ClampedTextProps = {
  children: React.ReactNode;
  className?: string;
} & Pick<VariantProps<typeof lineClampStyles>, "lineCount">;

export const ClampedText: React.FC<ClampedTextProps> = ({
  children,
  className,
  lineCount,
}) => {
  const bioElem = React.useRef<HTMLDivElement>(null);
  const [textClamped, isTextClamped] = useState<boolean>(false);
  useEffect(() => {
    if (bioElem.current) {
      isTextClamped(
        bioElem.current?.scrollHeight > bioElem.current?.clientHeight
      );
    }
  }, [textClamped]);

  const [expanded, setExpanded] = useState<boolean>(false);

  return (
    <div className={className}>
      <div ref={bioElem} className={lineClampStyles({ expanded, lineCount })}>
        {children}
      </div>
      {textClamped ? (
        <Link
          appearance="default"
          href="#"
          onClick={(e) => {
            e.preventDefault();
            setExpanded(!expanded);
          }}
        >
          {!expanded ? "Show more..." : "Show less..."}
        </Link>
      ) : null}
    </div>
  );
};
