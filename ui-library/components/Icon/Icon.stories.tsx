import { Meta, StoryFn, StoryObj } from "@storybook/react";
import { ArrowLeftIcon } from "@ui-library/icons";
import * as icons from "@ui-library/index";
import { Icon } from "./Icon";

type IconName = keyof typeof icons;

const meta: Meta<typeof Icon> = {
  component: Icon,
  title: "Library/Icon",
  args: {
    size: "default",
    SvgIcon: ArrowLeftIcon,
  },
  argTypes: {
    SvgIcon: {
      table: {
        disable: true,
      },
      control: "select",
      options: ["foo", "bar"],
    },
  },
  parameters: { backgrounds: { default: "light" } },
};
export default meta;

type Story = StoryObj<typeof Icon>;

export const SizeDefault: Story = {
  args: {
    size: "default",
  },
};

export const SizeSmall: Story = {
  args: {
    size: "small",
  },
};
export const SizeLarge: Story = {
  args: { size: "large" },
};

export const FillByCurrentColor: StoryFn<typeof Icon> = (args) => (
  <div className="text-primary">
    <Icon {...args} className="mr-xs" size={"small"} />
    Primary color applied in container
  </div>
);

export const IconGrid: StoryFn = () => (
  <div className="grid grid-cols-3 lg:grid-cols-5">
    {Object.keys(icons).map((iconName, i) => (
      <div key={i} className=" flex flex-col gap-s items-center m-m">
        <Icon
          SvgIcon={icons[iconName as IconName]}
          size="large"
          title={iconName}
        />
        <p>{iconName}</p>
      </div>
    ))}
  </div>
);
