import { Meta, StoryObj } from "@storybook/react";
import { Input } from "./Input";

const meta: Meta<typeof Input> = {
  title: "Library/Input",
  component: Input,
  args: {
    label: undefined,
    placeholder: "Placeholder",
    fullWidth: false,
    disabled: false,
  },
  argTypes: {
    label: {
      type: "string",
    },
  },
};
export default meta;

type Story = StoryObj<typeof Input>;

export const WithLabel: Story = {
  args: {
    label: "My Label",
  },
};
export const NoLabel: Story = {};
