import {
  Description,
  Stories,
  Story,
  Subtitle,
  Title
} from "@storybook/blocks";
import { Meta, StoryObj } from "@storybook/react";
import { ScreenSize } from "@ui-library/design-tokens/index";
import { Avatar } from ".";

const meta: Meta<typeof Avatar> = {
  title: "Library/Avatar",
  component: Avatar,
  args: {
    children: "JB",
  },
  tags: ["autodocs"],
  parameters: {
    componentSubtitle: "",
    docs: {
      page: () => (
        <>
          <Title />
          <Description />
          <Subtitle />
          <Stories />
        </>
      ),
    },
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

export const AvatarImage2: Story = {
  args: {
    image: true,
    src: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=3687&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "",
  }

};
