import { StoryFn, Meta } from "@storybook/react";
// import { SnapshotPaddingDecorator } from "@ui-library/design-tokens/index";
import { CardLink, CardLinkProps } from ".";
import { Headline } from "../Headline";

const appearanceOptions: CardLinkProps["appearance"][] = [
  "default",
  "primary",
  "success",
  "warning",
  "danger",
];

const elevationOptions: CardLinkProps["elevation"][] = [0, 1, 2, 3];

export default {
  title: "Library/CardLink",
  component: CardLink,
  args: {
    appearance: "default",
    children: (
      <>
        <Headline level={3}>Card Link</Headline>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
      </>
    ),
    disabled: false,
    elevation: 1,
    href: "#",
    isSelected: false,
  },
  argTypes: {
    appearance: {
      control: "select",
      options: appearanceOptions,
    },
    children: {
      table: {
        disable: true,
      },
    },
    disabled: {
      control: "boolean",
    },
    elevation: {
      control: "select",
      options: elevationOptions,
    },
    href: {
      control: "text",
    },
    isSelected: {
      control: "boolean",
    },
  },
  decorators: [],
} as Meta<typeof CardLink>;

export const Default: StoryFn<typeof CardLink> = (args) => (
  <CardLink {...args} className="p-m" />
);

export const Swatch: StoryFn<typeof CardLink> = (args) => (
  <div className="flex gap-m">
    {appearanceOptions.map((appearanceName) => (
      <CardLink
        {...args}
        appearance={appearanceName}
        key={appearanceName}
        className="p-m"
      >
        <Headline level={3}>{appearanceName}</Headline>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
      </CardLink>
    ))}
  </div>
);

Swatch.parameters = { controls: { disable: true } };
