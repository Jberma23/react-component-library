import { Meta, StoryFn, StoryObj } from "@storybook/react";
import * as icons from "@ui-library/index";
import { IconButton, IconButtonProps } from ".";

const iconOptions = Object.keys(icons);
const sizeOptions: IconButtonProps["size"][] = [
  "extraSmall",
  "small",
  "default",
  "large",
];
const variantOptions: IconButtonProps["variant"][] = [
  "default",
  "primary",
  "outline",
  "subtle",
  "link",
  "subtleLink",
];
const meta: Meta<typeof IconButton> = {
  title: "Library/IconButton",
  component: IconButton,
  args: {
    SvgIcon: iconOptions[0] as unknown as any,
    size: sizeOptions[0],
  },
  argTypes: {
    SvgIcon: {
      options: iconOptions,
      control: {
        type: "select",
      },
    },
    size: {
      options: sizeOptions,
      control: {
        type: "select",
      },
    },
    variant: {
      options: variantOptions,
      control: {
        type: "select",
      },
    },
  },
};
export default meta;

type Story = StoryObj<typeof IconButton>;

export const Interactive: Story = {
  args: {
    variant: "primary",
  },
  decorators: [
    (Story, { args }) => {
      const SvgIcon = args.SvgIcon
        ? icons[args.SvgIcon as unknown as keyof typeof icons]
        : icons[iconOptions[0] as keyof typeof icons];

      return (
        <Story
          args={{
            ...args,
            SvgIcon,
          }}
        />
      );
    },
  ],
};

export const Grid: StoryFn<typeof IconButton> = (args) => {
  const SvgIcon = icons[args.SvgIcon as unknown as keyof typeof icons];
  return (
    <div className="flex flex-col gap-xl">
      {sizeOptions.map((size) => (
        <div className="flex flex-col gap-m" key={`${size}`}>
          <div className="flex gap-l">
            {variantOptions.map((variant) => (
              <IconButton
                key={`${size}-${variant}-enabled`}
                size={size}
                SvgIcon={SvgIcon}
                variant={variant}
              />
            ))}
          </div>
          <div className="flex gap-l">
            {variantOptions.map((variant) => (
              <IconButton
                disabled
                key={`${size}-${variant}-disabled`}
                size={size}
                SvgIcon={SvgIcon}
                variant={variant}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};
