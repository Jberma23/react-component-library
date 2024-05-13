import { cx } from "cva";

export const sharedInputStyles = cx(
  "border-1 border-gray-300 rounded-3",
  "p-xs",
  "focus-visible:outline focus-visible:outline-teal-500 focus-visible:border-teal-500 focus-visible:outline-offset-0",
  "outline-offset-0",
  "transition-all duration-fast"
);
