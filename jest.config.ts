import type {Config} from 'jest';

const config: Config = {
  verbose: true,
  testMatch: ["**/*.test.tsx"],
  moduleNameMapper: {
    '@ui-library/(.*)': "<rootDir>/ui-library/$1",
   "\\.(css|less)$": "<rootDir>/assets/css/__mocks__/styleMock.js" 
  },
  testEnvironment: "jsdom",
  setupFilesAfterEnv: ["<rootDir>/test-utility/setupJest.ts"]
};


export default config;