import { jsonFetch } from "./jsonFetch";

type EmptyFn = () => void;

/**
 * Creates a fetcher for SWR,
 * and serializes the data into JSON and handles 401 Unauthenticated errors.
 *
 * @param onUnauthenticated the action if not authenticated
 */
export const swrFetcher = (onUnauthenticated: EmptyFn) => {
  return async (url: `/${string}`) => {
    try {
      return await jsonFetch("GET", url, {});
    } catch (response: any) {
      if (response.status === 401) {
        onUnauthenticated();
      }
      const errorData = await response.json().catch(() => ({}));
      return Promise.reject({
        status: response.status,
        url: response.url,
        data: errorData,
      });
    }
  };
};
