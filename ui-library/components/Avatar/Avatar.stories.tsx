import { Meta, StoryObj } from "@storybook/react";
import { ScreenSize } from "@ui-library/design-tokens/index";
import { Avatar } from ".";

const meta: Meta<typeof Avatar> = {
  title: "Library/Avatar",
  component: Avatar,
  args: {
    children: "JB",
    active: false,
  },
  parameters: {
    backgrounds: {
      default: "figma",
    },
    chromatic: {
      viewports: [ScreenSize.SMALL],
    },
  },
};
export default meta;

type Story = StoryObj<typeof Avatar>;

export const Default: Story = {};

export const Active: Story = {
  args: {
    active: true,
  },
};
