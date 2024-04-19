import { Meta, StoryObj } from "@storybook/react";
import { Toast, ToastProps } from ".";

const meta: Meta<typeof Toast> = {
  title: "Library/Toast",
  component: Toast,
  args: {
    variant: "success",
    children: "hoooray everything worked out as planned!",
    dismissHandler: () => {},
  },
  argTypes: {
    variant: {
      control: "select",
      options: ["success", "danger"] satisfies ToastProps["variant"][],
    },
  },
};
export default meta;

type Story = StoryObj<typeof Toast>;

export const Default: Story = {};
