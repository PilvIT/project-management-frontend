import "../styles/globals.css";
import useSWR, { SWRConfig } from "swr";
import type { AppProps } from "next/app";
import { LayoutAuthenticated } from "../components/LayoutAuthenticated";
import { LocalStorageKeys } from "../constants/LocalStorageKeys";
import { Login } from "../components/organisms/Login";
import { UserModel } from "../types/models/UserModel";
import { jsonFetch } from "../core/jsonFetch";

const fetchUser = (url: `/${string}`): Promise<UserModel> => {
  if (localStorage.getItem(LocalStorageKeys.AuthToken)) {
    return jsonFetch("GET", url);
  }
  return Promise.reject(null);
};

export default function MyApp({ Component, pageProps }: AppProps) {
  const user = useSWR<UserModel | null>("/user", fetchUser, {
    errorRetryCount: 0,
    refreshInterval: 0,
  });

  const handleOnLogout = async () => {
    localStorage.clear();
    await user.mutate(null, false);
  };

  if (!user.data && user.isValidating) {
    return null;
  }

  if (!user.data) {
    return <Login onLoggedIn={user.mutate} />;
  }

  return (
    <SWRConfig
      value={{
        fetcher: (url) =>
          jsonFetch("GET", url, {}).catch(async (response) => {
            if (response.status === 401) {
              user.mutate(null, false);
            }
            return Promise.reject(
              await response
                .json()
                .then((data: unknown) => ({
                  status: response.status,
                  url: response.url,
                  data,
                }))
                .catch(() => ({ status: response.status, url: response.url }))
            );
          }),
        errorRetryCount: 3,
        refreshInterval: 0,
        focusThrottleInterval: 15_000,
      }}
    >
      <LayoutAuthenticated onLogout={handleOnLogout}>
        <Component {...pageProps} />
      </LayoutAuthenticated>
    </SWRConfig>
  );
}
