import { Meta, StoryFn } from "@storybook/react";
// import { SnapshotPaddingDecorator } from "@ui-library/index";
import { Card, CardProps } from ".";
import { Headline } from "../Headline";

const appearanceOptions: CardProps<"div">["appearance"][] = [
  "default",
  "primary",
  "success",
  "warning",
  "danger",
];

const elevationOptions: CardProps<"div">["elevation"][] = [0, 1, 2, 3];

export default {
  title: "Library/Card",
  component: Card,
  args: {
    appearance: "default",
    as: "div",
    children: (
      <>
        <Headline level={3}>Card</Headline>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
      </>
    ),
    elevation: 0,
    isSelected: false,
  },
  argTypes: {
    as: {
      control: "text",
    },
    appearance: {
      control: "select",
      options: appearanceOptions,
    },
    children: {
      table: {
        disable: true,
      },
    },
    elevation: {
      control: "select",
      options: elevationOptions,
    },
    isSelected: {
      control: "boolean",
    },
  },
  decorators: [],
} as Meta<typeof Card>;

export const Default: StoryFn<typeof Card> = (args) => (
  <Card {...args} className="p-m" />
);

export const Aside: StoryFn<typeof Card> = () => (
  <Card as="aside" className="p-m">
    <Headline level={3}>Card: Aside</Headline>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat.
    </p>
  </Card>
);

export const Swatch: StoryFn<typeof Card> = () => (
  <div className="flex gap-m">
    {appearanceOptions.map((appearanceName) => (
      <Card appearance={appearanceName} key={appearanceName} className="p-m">
        <Headline level={3}>{appearanceName}</Headline>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
      </Card>
    ))}
  </div>
);

Swatch.parameters = { controls: { disable: true } };
