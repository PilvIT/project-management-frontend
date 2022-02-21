import { ResponseSet, useMockApi } from "../playwright.utils";
import { expect, test } from "@playwright/test";
import { mockUser } from "../mocks/mockUser";

const githubUrl = "https://github.com/login/oauth/authorize";
const mockState = "mock-state";
const mockResponses: ResponseSet = {
  "POST /github/auth": {
    status: 200,
    body: {
      url: `${githubUrl}?client_id=client_id&redirect_uri=ruri&state=${mockState}&allow_signup=false`,
      state: mockState,
    },
  },
  "POST /github/exchange-token": {
    status: 200,
    body: {
      accessToken: "accessToken",
    },
  },
  "GET /user": {
    status: 200,
    body: mockUser,
  },
};

test.describe("GitHub App Authentication", () => {
  test("it should complete OAuth flow", async ({ page, baseURL }, {
    project,
  }) => {
    await useMockApi(page, mockResponses);
    await page.goto("/");

    await page.route(`${githubUrl}**`, (route) => {
      if (project.name === "webkit") {
        // WebKit is unable to fulfill, so it will skip
        return page.goto(`${baseURL}?code=code&state=${mockState}`);
      }

      return route.fulfill({
        status: 301,
        headers: {
          location: `${baseURL}?code=code&state=${mockState}`,
        },
      });
    });

    await page.locator("text=Sign In").click();
    await page.waitForNavigation();
    expect(page.url()).toEqual(`${baseURL}/?code=code&state=${mockState}`);
    // Note: Flaky selector in Firefox?
    await expect(page.locator(`[aria-label="Log out"]`).count()).toBeTruthy();
  });
});
