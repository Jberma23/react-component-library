import { StoryFn, Meta } from "@storybook/react";
import startCase from "lodash/startCase";
import { cva } from "cva";
import { Button, ButtonProps } from "./Button";

const variants: ButtonProps["variant"][] = [
  "default",
  "outline",
  "primary",
  "link",
  "subtle",
  "subtleLink",
];
const sizes: ButtonProps["size"][] = [
  "extraSmall",
  "small",
  "default",
  "large",
];

export default {
  title: "Library/Button",
  args: {
    children: "Button",
    disabled: false,
    fullWidth: false,
    size: "default",
    updating: false,
  },
  argTypes: {
    variant: {
      control: "select",
      options: variants,
    },
    size: {
      control: "select",
      options: sizes,
    },
  },
} as Meta<typeof Button>;

export const Default: StoryFn<typeof Button> = (args) => <Button {...args} />;

const heading = cva(["text-2xl"]);
const outerContainer = cva(["flex flex-wrap gap-m"]);
const cardPlaceholder = cva([
  "flex flex-col items-center gap-xs",
  "px-xs py-xs",
  "border-2 shadow-sm",
]);

const intentWrapper = cva(["flex flex-wrap flex-row gap-xs"]);
const buttonContainer = cva(["flex flex-col gap-xs"]);

export const Swatch = () => (
  <div className={outerContainer()}>
    {sizes.map((size) => (
      <div className={cardPlaceholder()} key={size}>
        <h1 className={heading()}>{startCase(`${size}`)}</h1>
        <div className={intentWrapper()}>
          {variants.map((variant) => (
            <div key={variant} className={buttonContainer()}>
              <Button variant={variant} size={size}>
                Button
              </Button>
              <Button variant={variant} size={size} disabled>
                Disabled
              </Button>
            </div>
          ))}
        </div>
      </div>
    ))}
  </div>
);
