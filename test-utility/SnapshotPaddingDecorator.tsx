import { Decorator } from "@storybook/react";

export const SnapshotPaddingDecorator: Decorator<unknown> = (Story) => (
  <div className="p-xxs">
    <Story />
  </div>
);
