import { Meta, StoryObj } from "@storybook/react";
import { ScreenSize } from "@ui-library/design-tokens/index";
import { ClampedText } from ".";

const meta: Meta<typeof ClampedText> = {
  title: "Library/Clamped Text",
  component: ClampedText,
  args: {
    children:
      "I'm baby chartreuse YOLO bodega boys cloud bread bruh hot chicken snackwave twee squid coloring book small batch. Fingerstache venmo trust fund VHS artisan swag cliche bodega boys. Woke pitchfork DIY jianbing ethical +1 cupping cred pickled. Helvetica pinterest gastropub beard, brunch vape pop-up. Activated charcoal fam blackbird spyplane food truck, fanny pack cred adaptogen offal put a bird on it biodiesel etsy. Asymmetrical VHS banh mi jianbing occupy shoreditch. Activated charcoal poutine artisan butcher kitsch cliche tbh ugh yuccie ramps. Literally la croix direct trade actually iPhone JOMO offal. Single-origin coffee pour-over ethical quinoa grailed yes plz copper mug selvage hashtag vice hell of bitters pitchfork try-hard. Art party +1 butcher waistcoat bicycle rights pickled vape subway tile af yuccie grailed actually tousled distillery gluten-free. Chartreuse palo santo hexagon vaporware, literally four dollar toast lo-fi blog ethical hoodie butcher gastropub polaroid williamsburg deep v. Gochujang pug listicle, celiac prism taxidermy tofu truffaut plaid pork belly chambray glossier subway tile church-key. Hammock ascot intelligentsia, literally hashtag VHS big mood cred blue bottle viral tumeric.",
  },
  parameters: {
    chromatic: {
      viewports: [ScreenSize.SMALL],
    },
  },
};
export default meta;

type Story = StoryObj<typeof ClampedText>;

export const Clamped: Story = {};

export const NotClamped: Story = {
  args: {
    children: "Short Bio Not Clamped",
  },
};
