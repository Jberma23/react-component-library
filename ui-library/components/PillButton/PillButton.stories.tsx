import { Meta, StoryObj } from "@storybook/react";
import { ScreenSize } from "@ui-library/design-tokens/index";
import { PillButton } from ".";

const meta: Meta<typeof PillButton> = {
  title: "Library/Pill Button",
  component: PillButton,
  args: {
    appearance: "default",
    children: "hello world",
  },
  argTypes: {
    appearance: {
      control: {
        type: "select",
      },
      options: ["default", "primary"],
    },
  },
  parameters: {
    chromatic: {
      // TODO: Update snapshots to account for relevant breakpoints
      viewports: [ScreenSize.SMALL],
    },
  },
};
export default meta;

type Story = StoryObj<typeof PillButton>;

export const TagSubscription: Story = {
  args: {
    children: "Sports and TV",
  },
};

export const FollowAuthor: Story = {
  args: {
    children: <span>+ Follow</span>,
    appearance: "primary",
  },
};
