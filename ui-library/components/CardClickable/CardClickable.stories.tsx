import { StoryFn, Meta } from "@storybook/react";
// import { SnapshotPaddingDecorator } from "@ui-library/index";
import { CardClickable, CardClickableProps } from ".";
import { Headline } from "../Headline";

const appearanceOptions: CardClickableProps<"div">["appearance"][] = [
  "default",
  "primary",
  "success",
  "warning",
  "danger",
];

const elevationOptions: CardClickableProps<"div">["elevation"][] = [0, 1, 2, 3];

export default {
  title: "Library/CardClickable",
  component: CardClickable,
  args: {
    appearance: "default",
    as: "button",
    children: (
      <>
        <Headline level={3}>Card Clickable</Headline>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.
      </>
    ),
    disabled: false,
    elevation: 1,
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
    disabled: {
      control: "boolean",
    },
    elevation: {
      control: "select",
      options: elevationOptions,
    },
    isSelected: {
      control: "boolean",
    },
    onClick: {
      action: "clicked",
    },
  },
  decorators: [],
} as Meta<typeof CardClickable>;

export const Default: StoryFn<typeof CardClickable> = (args) => (
  <CardClickable {...args} className="p-m text-left" />
);

export const Button: StoryFn<typeof CardClickable> = () => (
  <CardClickable as="button" className="p-m text-left">
    <Headline level={3}>Card Clickable: Button</Headline>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat.
    </p>
  </CardClickable>
);

export const Div: StoryFn<typeof CardClickable> = () => (
  <CardClickable as="div" className="p-m" role="button">
    <Headline level={3}>Card Clickable: Div</Headline>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat.
    </p>
  </CardClickable>
);

Button.parameters = { controls: { disable: true } };

export const Swatch: StoryFn<typeof CardClickable> = (args) => (
  <div className="flex gap-m">
    {appearanceOptions.map((appearanceName) => (
      <CardClickable
        {...args}
        appearance={appearanceName}
        key={appearanceName}
        className="p-m text-left"
      >
        <Headline level={3}>{appearanceName}</Headline>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
      </CardClickable>
    ))}
  </div>
);

Swatch.parameters = { controls: { disable: true } };
