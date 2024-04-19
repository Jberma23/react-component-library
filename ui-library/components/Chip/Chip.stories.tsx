import { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { Chip, ChipProps } from ".";

const appearances: ChipProps<React.ElementType>["appearance"][] = [
  "default",
  "warning",
  "danger",
  "success",
];

const meta: Meta<typeof Chip> = {
  title: "Library/Chip",
  component: Chip,
  args: {
    appearance: "default",
    children: "Chirp",
  },
  argTypes: {
    appearance: {
      control: "select",
      options: appearances,
    },
  },
};

export default meta;

type Story = StoryObj<typeof Chip>;

export const Default: Story = {
  args: {},
};

export const Swatch = () => (
  <div className="flex flex-wrap gap-m">
    <div className="flex flex-wrap flex-row gap-xs">
      {appearances.map((appearance) => (
        <div key={appearance} className="flex flex-col gap-xs">
          <Chip appearance={appearance}>Chirp</Chip>
        </div>
      ))}
    </div>
  </div>
);
