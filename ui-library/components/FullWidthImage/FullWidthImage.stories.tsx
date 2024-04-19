import { Meta, StoryObj } from "@storybook/react";
import { FullWidthImage } from ".";
import {
  FullWidthImageAspectProps,
  FullWidthImageDimsProps,
} from "./FullWidthImage";
import { Headline } from "../Headline";

const aspectRatioProps: FullWidthImageAspectProps["aspectRatio"][] = [
  "1/1",
  "3/2",
  "4/3",
  "5/4",
  "7/5",
  "16/9",
];

const meta: Meta<typeof FullWidthImage> = {
  title: "Library/Full Width Image",
  component: FullWidthImage,
  args: {
    src: "/featured-image.jpeg",
    alt: "This is a test image",
    captionText: "This is a test image caption",
    aspectRatio: "16/9",
  },
  argTypes: {
    src: {
      control: false,
    },
  },
  decorators: [
    (Story) => (
      <div className="mx-[auto] sm:w-[358px] md:w-[720px] lg:w-[576px]">
        <Story />
      </div>
    ),
  ],
};
export default meta;

type Story = StoryObj<typeof FullWidthImage>;

export const HeightAndWidth: Story = {
  args: {
    aspectRatio: undefined,
    height: 500,
    width: 500,
  },
  render: (incorrectlyTypedArgs) => {
    const args = incorrectlyTypedArgs as FullWidthImageDimsProps;
    return (
      <div className="flex gap-xxl">
        <FullWidthImage
          {...args}
          captionText={`This image is currently using its height and width as its aspect ratio (${args.width}/${args.height})`}
        />

        <FullWidthImage
          {...args}
          captionText={`This image's native resolution is currently it's aspect ratio (720/405)`}
          width={720}
          height={405}
        />
      </div>
    );
  },
};

export const NoCaption: Story = {
  args: {
    src: "/featured-image.jpeg",
    alt: "This is a test image",
    captionText: "",
  },
  parameters: { controls: { disable: true } },
};

export const NoAlt: Story = {
  args: {
    src: "/featured-image.jpeg",
    alt: "",
    captionText: "This is a test image caption",
  },
  parameters: { controls: { disable: true } },
};

export const AllAspectRatios: Story = {
  parameters: { controls: { disable: true } },
  render: () => {
    const aspectRatioElements = aspectRatioProps.map((aspectRatioName) => (
      <section className="mb-xl" key={aspectRatioName}>
        <Headline level={3}>
          &quot;{aspectRatioName}&quot; Aspect Ratio
        </Headline>
        <FullWidthImage
          src="/featured-image.jpeg"
          alt={`This is a "${aspectRatioName}" aspect ratio test image`}
          captionText={`This is a "${aspectRatioName}" aspect ratio test image caption`}
          aspectRatio={aspectRatioName}
        />
      </section>
    ));
    return (
      <div className="grid grid-cols-2 gap-l">
        <div>{aspectRatioElements.slice(0, 4)}</div>
        <div>{aspectRatioElements.slice(4)}</div>
      </div>
    );
  },
};
