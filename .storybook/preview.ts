import type { Preview } from "@storybook/react";
import "../src/app/globals.css";
import { MINIMAL_VIEWPORTS } from "@storybook/addon-viewport";
import { INITIAL_VIEWPORTS } from "@storybook/addon-viewport";
const customViewports = {
  desktop: {
    name: "Desktop (1200px min width)",
    styles: {
      width: "1200px",
      height: "1024px",
    },
  },
};
const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    viewport: {
      viewports: {
        ...MINIMAL_VIEWPORTS,
        ...customViewports,
      },
    },
    backgrounds: {
      default: 'figma',
      values: [
        {
          name: 'figma',
          value: '#F5F5F5',
        },
        {
          name: 'twitter',
          value: '#00aced',
        },
        {
          name: 'facebook',
          value: '#3b5998',
        },
      ],
    },
  },
  globalTypes: {
    darkMode: {
      defaultValue: true, // Enable dark mode by default on all stories
    },
  },
};

export default preview;
