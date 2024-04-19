import { cva, cx, VariantProps } from "cva";
import Image, { ImageLoader, StaticImageData } from "next/image";

const decimalToAspectRatio = [
  [1, "1/1"],
  [3 / 2, "3/2"],
  [4 / 3, "4/3"],
  [5 / 4, "5/4"],
  [7 / 5, "7/5"],
  [16 / 9, "16/9"],
] as const;

type AspectRatio = typeof decimalToAspectRatio[number][1];

const defaultWrapperStyles = ["relative", "overflow-hidden", "mb-xs"];

const fullWidthImageStyles = cva(defaultWrapperStyles, {
  variants: {
    aspectRatio: {
      square: "aspect-1/1",
      video: "aspect-16/9",
      "1/1": "aspect-1/1",
      "3/2": "aspect-3/2",
      "4/3": "aspect-4/3",
      "5/4": "aspect-5/4",
      "7/5": "aspect-7/5",
      "16/9": "aspect-16/9",
    },
  },
});

export type FullWidthImageAspectProps = {
  alt?: string;
  captionText?: string;
  className?: string;
  loader?: ImageLoader;
  src: string | StaticImageData;
  priority?: boolean;
  aspectRatio: AspectRatio;
} & VariantProps<typeof fullWidthImageStyles>;

export type FullWidthImageDimsProps = {
  alt?: string;
  captionText?: string;
  className?: string;
  loader?: ImageLoader;
  src: string | StaticImageData;
  priority?: boolean;
  height: number;
  width: number;
};

const isFullWidthImageAspectProps = (
  props: FullWidthImageProps
): props is FullWidthImageAspectProps => "aspectRatio" in props;

const isFullWidthImageDimsProps = (
  props: FullWidthImageProps
): props is FullWidthImageDimsProps => "height" in props && "width" in props;

export type FullWidthImageProps =
  | FullWidthImageAspectProps
  | FullWidthImageDimsProps;

/**
 * Full Width Image Component: Renders an image component that fills it's container
 * using either an aspect ratio or width and height dimensions. Requiring an aspect
 * ratio or dimensions prevents layout shift.
 */
export function FullWidthImage(props: FullWidthImageProps) {
  const {
    alt = "",
    captionText = "",
    className,
    loader,
    src,
    priority,
  } = props;
  const wrapperProps: React.ComponentPropsWithoutRef<"div"> = {};

  if (isFullWidthImageAspectProps(props)) {
    wrapperProps.className = fullWidthImageStyles({
      aspectRatio: props.aspectRatio,
    });
  }

  if (isFullWidthImageDimsProps(props)) {
    const { width, height } = props;
    wrapperProps.className = cx(defaultWrapperStyles);
    wrapperProps.style = {
      aspectRatio: `${width}/${height}`,
    };
  }

  return (
    <figure className={className}>
      <div {...wrapperProps}>
        <Image
          src={src}
          alt={alt}
          loader={loader}
          fill
          className="object-cover"
          priority={priority}
          quality={100}
        />
      </div>
      {captionText ? (
        <figcaption className="text-body-small text-gray-700">
          {captionText}
        </figcaption>
      ) : null}
    </figure>
  );
}
