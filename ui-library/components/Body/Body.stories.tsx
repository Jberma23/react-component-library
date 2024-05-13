import { StoryFn, Meta } from "@storybook/react";
import { Body, BodyProps } from "./Body";
import { Title, Description, Subtitle, Story, Canvas, Source, Stories } from "@storybook/blocks";

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
  tags: ["autodocs"],
  parameters: {
    componentSubtitle: "",
    docs: {
      page: () => (
        <>
        <Title/>
        <Description/>
        <Subtitle/>
        <Stories/>
        </>
      )
    },
    
    backgrounds: { default: "light" },
  },
} as Meta<typeof Body>;

export const Default: StoryFn<typeof Body> = (args) => <Body {...args} />;
