import { cva, cx, VariantProps } from "cva";
import Skeleton, { SkeletonProps } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { KeyValuePair, RecursiveKeyValuePair } from "tailwindcss/types/config";
import config from "~/tailwind.config";

const skeletonStyles = cva([], {
  defaultVariants: {
    enableAnimation: true,
  },
  variants: {
    enableAnimation: { true: ["motion-safe:animate-pulse"] },
  },
});

export interface SkeletonLoaderProps
  extends VariantProps<typeof skeletonStyles>,
    Omit<
      SkeletonProps,
      "highlightColor" | "direction" | "duration" | "enableAnimation"
    > {}

// Manually use design tokens from tailwind config for react-loading-skeleton
// (the things we do to appease the TypeScript gods without 'any')
/* istanbul ignore next */
const defaultBaseColor =
  ((
    (config.theme!.extend!.colors as RecursiveKeyValuePair<string, string>)
      .gray as RecursiveKeyValuePair<string, string>
  )["200"] as string) || "#E5E5E5";
/* istanbul ignore next */
const defaultBorderRadius =
  (config.theme!.extend!.borderRadius as KeyValuePair<string, string>)["3"] || "3px";

/**
 * Generic skeleton component for loading state. Current implementation wraps
 * [react-loading-skeleton](https://github.com/dvtng/react-loading-skeleton),
 * applying themed defaults. See
 * [the library docs](https://github.com/dvtng/react-loading-skeleton#props-reference)
 * for more information on library-specific props.
 *
 * Note: to manually apply classes to this component, you may need to
 * use both `containerClassName` _and_ `className`.
 *
 * @returns Generic skeleton component
 */
export function SkeletonLoader({
  className,
  containerClassName,
  baseColor = defaultBaseColor,
  enableAnimation = true,
  borderRadius = defaultBorderRadius,
  ...rest
}: SkeletonLoaderProps) {
  return (
    <Skeleton
      baseColor={baseColor}
      // Animate with Tailwind for consistency
      enableAnimation={false}
      containerClassName={containerClassName}
      className={cx(className, skeletonStyles({ enableAnimation }))}
      borderRadius={borderRadius}
      {...rest}
    />
  );
}
