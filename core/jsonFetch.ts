import { LocalStorageKeys } from "../constants/LocalStorageKeys";

type Methods = "GET" | "POST" | "PUT" | "DELETE";

/**
 * A thin wrapper for fetch that handles JSON requests
 *
 * @param method one of "GET", "POST", "PUT" or "DELETE"
 * @param url the endpoint relative to server host
 * @param data data to submit, only "POST" and "PUT" requests
 */
export const jsonFetch = async <T>(
  method: Methods,
  url: `/${string}`,
  data?: object
): Promise<T> => {
  let body;
  if (method === "POST" || method === "PUT") {
    if (!data) {
      throw new Error("POST and PUT methods need data!");
    }
    body = JSON.stringify(data);
  }

  const response = await fetch(`${process.env.NEXT_PUBLIC_SERVER_HOST}${url}`, {
    method,
    headers: getHeaders(),
    body,
  });

  if (response.ok) {
    return response.json();
  }

  if (response.status === 401) {
    localStorage.clear();
  }
  return Promise.reject(response);
};

const getHeaders = (): Record<string, string> => {
  const headers: Record<string, string> = {
    "Content-Type": "application/json",
  };

  const token: string | null = localStorage.getItem(LocalStorageKeys.AuthToken);
  if (token) {
    return {
      ...headers,
      Authorization: `Bearer ${token}`,
    };
  }

  return headers;
};
