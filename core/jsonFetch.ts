// A thin wrapper for fetch

type Methods = "GET" | "POST" | "PUT" | "DELETE";
export const jsonFetch = async (
  method: Methods,
  url: `/${string}`,
  data: object
) => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_SERVER_HOST}${url}`, {
    method,
    headers: getHeaders(),
    body: JSON.stringify(data),
  });

  if (response.ok) {
    return response.json();
  }
  return Promise.reject(response);
};

const getHeaders = (): Record<string, string> => {
  const headers: Record<string, string> = {
    "Content-Type": "application/json",
  };

  const token: string | null = localStorage.getItem("auth-token");
  if (token) {
    return {
      ...headers,
      Authorization: `Bearer ${token}`,
    };
  }

  return headers;
};
