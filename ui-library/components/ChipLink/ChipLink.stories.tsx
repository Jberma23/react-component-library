import { Meta, StoryObj } from "@storybook/react";
import { ChipLink, ChipLinkProps } from ".";

const appearances: ChipLinkProps["appearance"][] = [
  "default",
  "warning",
  "danger",
  "success",
];
const meta: Meta<typeof ChipLink> = {
  title: "Library/Chip Link",
  component: ChipLink,
  args: {
    appearance: "default",
    children: "Chirp",
    href: "https://morningconsult.com",
    onClick: (e) => e.preventDefault(),
  },
  argTypes: {
    appearance: {
      control: "select",
      options: appearances,
    },
  },
};

export default meta;

type Story = StoryObj<typeof ChipLink>;

export const Default: Story = {
  args: {},
};

export const Swatch = () => (
  <div className="flex flex-wrap gap-m">
    <div className="flex flex-wrap flex-row gap-xs">
      {appearances.map((appearance) => (
        <div key={appearance} className="flex flex-col gap-xs">
          <ChipLink
            appearance={appearance}
            href="https://morningconsult.com"
            onClick={(e) => {
              e.preventDefault();
            }}
          >
            Chirp
          </ChipLink>
        </div>
      ))}
    </div>
  </div>
);

Swatch.parameters = { controls: { disable: true } };
