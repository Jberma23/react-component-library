import { Meta, StoryFn } from "@storybook/react";
import { Headline } from "./index";

const headlines = [0, 1, 2, 3, 4, 5, 6];
export default {
  title: "Library/Headline",
  args: {
    blockCase: false,
    children: "Headline",
    level: 0,
  },
  argTypes: {
    blockCase: {
      type: "boolean",
    },
    children: {
      type: "string",
    },
    level: {
      control: "select",
      options: headlines,
    },
    growOnMd: {
      control: "boolean",
    },
  },
} as Meta<typeof Headline>;

export const Default: StoryFn<typeof Headline> = (args) => (
  <Headline {...args} />
);

export const AllHeadlines = () => (
  <div className="flex gap-l">
    <div className={"flex flex-col gap-s"}>
      <Headline level={4}>Default</Headline>

      <Headline level={0}>Headline 0</Headline>
      <Headline level={1}>Headline 1</Headline>
      <Headline level={2}>Headline 2</Headline>
      <Headline level={3}>Headline 3</Headline>
      <Headline level={4}>Headline 4</Headline>
      <Headline level={5}>Headline 5</Headline>
      <Headline level={6}>Headline 6</Headline>
    </div>
    <div className={"flex flex-col gap-s"}>
      <Headline level={4}>Block case</Headline>

      <Headline blockCase level={0}>
        Headline 0
      </Headline>
      <Headline blockCase level={1}>
        Headline 1
      </Headline>
      <Headline blockCase level={2}>
        Headline 2
      </Headline>
      <Headline blockCase level={3}>
        Headline 3
      </Headline>
      <Headline blockCase level={4}>
        Headline 4
      </Headline>
      <Headline blockCase level={5}>
        Headline 5
      </Headline>
      <Headline blockCase level={6}>
        Headline 6
      </Headline>
    </div>
  </div>
);
