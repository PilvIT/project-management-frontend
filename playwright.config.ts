import { PlaywrightTestConfig, devices } from "@playwright/test";

// https://github.com/microsoft/playwright/blob/master/packages/playwright-core/src/server/deviceDescriptorsSource.json
const config: PlaywrightTestConfig = {
  globalSetup: "playwright.setup.ts",
  projects: [
    {
      name: "chromium",
      use: { ...devices["Desktop Chrome"] },
    },
    {
      name: "firefox",
      use: { ...devices["Desktop Firefox"] },
    },
    {
      name: "webkit",
      use: { ...devices["Desktop Safari"] },
    },
  ],
  use: {
    baseURL: "http://localhost:3000",
    screenshot: "on",
    trace: "retain-on-failure",
    video: "on-first-retry",
  },
};

export default config;
