import { StoryFn, Meta } from "@storybook/react";
import { cx } from "cva";
import { Body, BodyProps } from "../Body";
import { CardProps, Card } from "../Card";
import { Headline, HeadlineProps } from "../Headline";
import { HeadlineElementType } from "../Headline/Headline";
import { SkeletonLoader, SkeletonLoaderProps } from "./SkeletonLoader";

export default {
  title: "Library/Skeleton",
  component: SkeletonLoader,
} as Meta<typeof SkeletonLoader>;

export const Default: StoryFn<typeof SkeletonLoader> = (args) => (
  <SkeletonLoader {...args} />
);
Default.args = {
  count: 4,
  enableAnimation: true,
  baseColor: "#E5E5E5",
  width: "24rem",
  height: "",
  borderRadius: "0.25rem",
  inline: false,
  wrapper: undefined,
  className: "",
  containerClassName: "",
  containerTestId: "",
  circle: false,
};

interface SkeletonBodyProps
  extends SkeletonLoaderProps,
    Pick<BodyProps, "size" | "title"> {
  innerClassName?: string;
}

function SkeletonBody({
  size,
  className,
  innerClassName,
  title,
  ...rest
}: SkeletonBodyProps) {
  return (
    <Body size={size} className={className} title={title}>
      <SkeletonLoader className={innerClassName} {...rest} />
    </Body>
  );
}

interface SkeletonHeadlineProps
  extends SkeletonLoaderProps,
    Pick<
      HeadlineProps<HeadlineElementType>,
      "as" | "level" | "blockCase" | "growOnMd" | "title"
    > {
  innerClassName?: string;
}

function SkeletonHeadline({
  as,
  level,
  blockCase,
  className,
  innerClassName,
  title,
  ...rest
}: SkeletonHeadlineProps) {
  return (
    <Headline
      as={as}
      level={level}
      blockCase={blockCase}
      className={className}
      title={title}
    >
      <SkeletonLoader className={innerClassName} {...rest} />
    </Headline>
  );
}

interface SkeletonCardProps
  extends Pick<SkeletonLoaderProps, "className" | "enableAnimation">,
    Pick<CardProps<React.ElementType>, "as" | "elevation" | "children"> {}

function SkeletonCard({
  children,
  enableAnimation = true,
  className,
  ...rest
}: SkeletonCardProps) {
  return (
    <Card
      className={cx(
        className,
        enableAnimation ? "motion-safe:animate-pulse" : ""
      )}
      {...rest}
    >
      {children}
    </Card>
  );
}

export const ExampleUsage: StoryFn<typeof SkeletonLoader> = ({
  className,
  ...args
}) => (
  <div className="grid grid-cols-2 gap-s">
    <div>
      <Headline level={4} className="mb-xs">
        SkeletonBody
      </Headline>
      <div className="grid grid-cols-3">
        <Body size="extraSmall">extraSmall</Body>
        <SkeletonBody
          size="extraSmall"
          className={cx("col-span-2", className)}
          {...args}
        />
        <Body size="small">small</Body>
        <SkeletonBody
          size="small"
          className={cx("col-span-2", className)}
          {...args}
        />
        <Body size="default">default</Body>
        <SkeletonBody
          size="default"
          className={cx("col-span-2", className)}
          {...args}
        />
        <Body size="large">large</Body>
        <SkeletonBody
          size="large"
          className={cx("col-span-2", className)}
          {...args}
        />
      </div>
    </div>
    <div>
      <Headline level={4} className="mb-xs">
        SkeletonHeadline
      </Headline>
      <div className="grid grid-cols-2">
        <Headline level={0}>Headline 0</Headline>
        <SkeletonHeadline level={0} {...args} />
        <Headline level={1}>Headline 1</Headline>
        <SkeletonHeadline level={1} {...args} />
        <Headline level={2}>Headline 2</Headline>
        <SkeletonHeadline level={2} {...args} />
        <Headline level={3}>Headline 3</Headline>
        <SkeletonHeadline level={3} {...args} />
        <Headline level={4}>Headline 4</Headline>
        <SkeletonHeadline level={4} {...args} />
        <Headline level={5}>Headline 5</Headline>
        <SkeletonHeadline level={5} {...args} />
        <Headline level={6}>Headline 6</Headline>
        <SkeletonHeadline level={6} {...args} />
      </div>
    </div>
    <div>
      <Headline level={4} className="mb-xs">
        SkeletonCard
      </Headline>
      <SkeletonCard className={cx("p-s", className)} elevation={2}>
        <div className="grid grid-cols-3 gap-s">
          <SkeletonLoader width="100%" height="6rem" />
          <div className="col-span-2">
            <SkeletonHeadline level={1} {...args} />
            <SkeletonBody
              size="default"
              className={cx("col-span-2", className)}
              {...args}
              count={3}
            />
          </div>
        </div>
      </SkeletonCard>
    </div>
  </div>
);
ExampleUsage.args = {
  count: 1,
  enableAnimation: true,
  baseColor: "#E5E5E5",
  width: "100%",
  height: "",
  borderRadius: "0.25rem",
  inline: false,
  wrapper: undefined,
  className: "",
  containerTestId: "",
  circle: false,
};
