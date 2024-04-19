import { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { Button } from "@ui-library/index";
import { Flyout } from "@ui-library/index";

const meta: Meta<typeof Flyout> = {
  title: "Library/Flyout",
  component: Flyout,
  args: {
    children: "Flyout contents",
    fillScreen: false,
    isOpen: false,
    openFromDirection: "left",
  },
  argTypes: {
    openFromDirection: {
      control: "radio",
      options: ["bottom", "left", "right", "top"],
    },
    children: {
      type: "string",
    },
  },
  parameters: {
    layout: "fullscreen",
  },
  decorators: [
    (Story, { args }) => (
      <div className="h-screen w-full">
        <div className="relative w-full h-screen flex justify-end bg-primary-300">
          <Story args={{ ...args }} />
        </div>
      </div>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof Flyout>;

export const DefaultStory: Story = {
  args: {
    isOpen: true,
  },
  parameters: {
    chromatic: { disableSnapshot: true },
  },
};

export const VerticalOffsetExample: Story = {
  args: {
    isOpen: true,
  },
  decorators: [
    (Story, { args }) => (
      <div className="relative w-full h-screen bg-primary-300">
        <Story
          args={{
            ...args,
            children: <div className="p-xxl">I am flyout contents</div>,
            className: "top-[64px]",
          }}
        />
      </div>
    ),
  ],
  parameters: {
    chromatic: { disableSnapshot: true },
  },
};

export const ControlledFlyout: Story = {
  args: {
    isOpen: true,
  },
  decorators: [
    (Story, { args: initialArgs }) => {
      const [args, setArgs] = useState(initialArgs);

      return (
        <div className="relative w-full h-screen bg-primary-300">
          <div className="p-l">
            <Button
              fullWidth
              onClick={() => {
                setArgs({ ...args, isOpen: true });
              }}
              variant="primary"
            >
              Open Flyout
            </Button>
          </div>
          <Story
            args={{
              ...args,
              children: (
                <div className="p-l">
                  <Button
                    fullWidth
                    onClick={() => {
                      setArgs({ ...args, isOpen: false });
                    }}
                    variant="primary"
                  >
                    Close Flyout
                  </Button>
                </div>
              ),
            }}
          />
        </div>
      );
    },
  ],
  parameters: {
    chromatic: { disableSnapshot: true },
    controls: {
      disable: true,
    },
  },
};

export const FullWidth: Story = {
  args: {
    fillScreen: true,
    isOpen: true,
    openFromDirection: "left",
  },
};

export const FullHeight: Story = {
  args: {
    fillScreen: true,
    isOpen: true,
    openFromDirection: "top",
  },
};

export const OpenLeftShrink: Story = {
  args: {
    isOpen: true,
    openFromDirection: "left",
  },
};

export const OpenTopShrink: Story = {
  args: {
    isOpen: true,
    openFromDirection: "top",
  },
};

export const OpenRightShrink: Story = {
  args: {
    isOpen: true,
    openFromDirection: "right",
  },
};

export const OpenBottomShrink: Story = {
  args: {
    isOpen: true,
    openFromDirection: "bottom",
  },
};
