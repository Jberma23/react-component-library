import { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { Option, OptionData } from "./Option";
import { Select } from "./Select";

const option1: OptionData = { id: 0, label: "Foo (Default Value)" };
const option2: OptionData = { id: 0, label: "Bar" };
const option3: OptionData = { id: 0, label: "Baz" };
const option4: OptionData = { id: 0, label: "Boo" };
const meta: Meta<typeof Select> = {
  title: "Library/Select",
  component: Select,
  args: {
    children: (
      <>
        <Option value={option1}>{option1.label}</Option>
        <Option value={option2}>{option2.label} </Option>
        <Option value={option3}>{option3.label}</Option>
        <Option value={option4}>{option4.label}</Option>
      </>
    ),
    label: "Select a value:",
    placeholder: "Select a value PLEASE!",
  },
  parameters: {
    chromatic: {
      disableSnapshot: true,
    },
  },
};
export default meta;

type Story = StoryObj<typeof Select>;

export const Controlled: Story = {
  decorators: [
    (Story, { args }) => {
      // state is controlled by the parent component
      const [selected, setSelected] = useState<OptionData>(option1);
      return <Story args={{ ...args, onChange: setSelected, selected }} />;
    },
  ],
};
