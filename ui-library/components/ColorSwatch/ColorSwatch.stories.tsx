import { Meta, StoryObj } from "@storybook/react";
import { ColorSwatch } from "./ColorSwatch";
import { colorClasses, theme } from "@ui-library/design-tokens/color-palette";
import "../../../src/app/globals.css";

const meta: Meta<typeof ColorSwatch> = {
  title: "Den/ColorSwatch",
  component: ColorSwatch,
  args: {},
};
export default meta;

type Story = StoryObj<typeof ColorSwatch>;
export const Default = () => {
  return (
    <div className="flex flex-wrap gap-m">
      <div className="flex flex-wrap flex-row gap-xs">
        {colorClasses.map((suffix) => {
          let background = `bg-${suffix}`;
          return (
            <div key={suffix} className="flex flex-col gap-xs">
              <div className={background}>{suffix}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
