import { Page, Request } from "playwright-core";

interface MockedResponse {
  status: number;
  body: object;
}
export type ResponseSet = Record<string, MockedResponse>;
type RouteHandler = (path: string, request: Request) => MockedResponse | void;

export const useMockApi = async (
  page: Page,
  customHandler: RouteHandler | ResponseSet
) => {
  await page.route(`http://localhost:5000/**`, (route, request) => {
    const path = request.url().replace("http://localhost:5000", "");

    let mockedResponse;
    if (typeof customHandler === "function") {
      mockedResponse = customHandler(path, request);
    } else {
      const key = `${request.method()} ${path}`;
      mockedResponse = customHandler[key];
    }

    if (mockedResponse) {
      return route.fulfill({
        status: mockedResponse.status,
        headers: { "access-control-allow-origin": "*" },
        body: JSON.stringify(mockedResponse.body),
      });
    }

    throw new Error(`Unhandled route: ${request.method()} ${request.url()}`);
  });
};
