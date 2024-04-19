import { Meta, StoryObj } from "@storybook/react";
import { ScreenSize } from "@ui-library/design-tokens/index";
import { Checkbox } from ".";

const meta: Meta<typeof Checkbox> = {
  title: "Library/Checkbox",
  component: Checkbox,
  args: {
    id: "id-is-used-for-label",
    label:
      "This can be seen as an unhelpful label, but i really just need it to wrap on small breakpoints",
  },
  parameters: {
    chromatic: {
      viewports: [ScreenSize.SMALL],
    },
  },
};
export default meta;

type Story = StoryObj<typeof Checkbox>;

export const Default: Story = {};
