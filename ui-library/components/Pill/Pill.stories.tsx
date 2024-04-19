import { Meta, StoryObj } from "@storybook/react";
import { ScreenSize } from "@ui-library/design-tokens/index";
import { Pill } from ".";

const meta: Meta<typeof Pill> = {
  title: "Library/Pill",
  component: Pill,
  args: {
    appearance: "default",
    children: "Film and TV",
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

type Story = StoryObj<typeof Pill>;

export const Default: Story = {};
