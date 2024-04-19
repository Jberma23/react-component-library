import { StoryFn, Meta } from "@storybook/react";
import { Body, BodyProps } from "./Body";

const sizes = ["small", "default", "large"] as BodyProps["size"][];

export default {
  title: "Library/Body",
  args: {
    bold: undefined,
    size: undefined,
    children: "Body text",
  },
  argTypes: {
    bold: {
      control: "boolean",
    },
    size: {
      options: sizes,
    },
  },
  parameters: {
    backgrounds: { default: "light" },
  },
} as Meta<typeof Body>;

export const Default: StoryFn<typeof Body> = (args) => <Body {...args} />;
