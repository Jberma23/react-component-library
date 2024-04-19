import { Meta, StoryObj } from "@storybook/react";
import { Body, Headline } from "@ui-library/index";
import { ScreenSize } from "@ui-library/design-tokens/index";
import {
  ArrowLeftIcon,
  ArrowRightIcon,
  ExclamationTriangleIcon,
} from "@ui-library/icons";
import { Link } from ".";

const meta: Meta<typeof Link> = {
  title: "Library/Link",
  component: Link,
  args: {
    appearance: "default",
    children: "Link",
    href: "/foo/bar",
  },
  argTypes: {
    appearance: {
      control: {
        type: "select",
      },
      options: ["default", "bold"],
    },
    children: {
      type: "string",
    },
  },
  parameters: {
    chromatic: {
      viewports: [ScreenSize.SMALL],
    },
  },
};
export default meta;

type Story = StoryObj<typeof Link>;

export const Default: Story = {};

export const Bold: Story = {
  args: {
    appearance: "bold",
  },
};
export const IconBefore: Story = {
  args: {
    startAdornmentIcon: ArrowLeftIcon,
  },
};

export const IconAfter: Story = {
  args: {
    endAdornmentIcon: ArrowRightIcon,
  },
};

export const Inline: Story = {
  args: {
    children: "Fusce dapibus",
    endAdornmentIcon: ExclamationTriangleIcon,
  },
  decorators: [
    (Story) => (
      <p>
        <Body>
          Curabitur blandit tempus porttitor. Donec id elit non mi porta gravida
          at eget metus. <Story />, tellus ac cursus commodo, tortor mauris
          condimentum nibh, ut fermentum massa justo sit amet risus. and hoping
          that we can surpass any and all challenges.
        </Body>
      </p>
    ),
  ],
};

export const Standalone: Story = {
  decorators: [
    (Story) => (
      <div className={"flex flex-col gap-s"}>
        <Body size="small">
          Maecenas faucibus mollis interdum. Duis mollis, est non commodo
          luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit.{" "}
        </Body>
        <Story />
        <Body size="small">
          Maecenas faucibus mollis interdum. Duis mollis, est non commodo
          luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit.{" "}
        </Body>
      </div>
    ),
  ],
};

export const WrappingHeadline: Story = {
  args: {
    children: "Headline text",
  },
  render: (args) => (
    <Link {...args}>
      <Headline blockCase level={6}>
        {args.children}
      </Headline>
    </Link>
  ),
};
