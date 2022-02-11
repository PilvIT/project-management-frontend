import "../styles/globals.css";
import type { AppProps } from "next/app";
import { LayoutAuthenticated } from "../components/LayoutAuthenticated";
import { Login } from "../components/organisms/Login";
import { jsonFetch } from "../core/jsonFetch";
import useSWR, { SWRConfig } from "swr";

export default function MyApp({ Component, pageProps }: AppProps) {
  const user = useSWR("/user", (url) => jsonFetch("GET", url), {
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
        fetcher: (url) => jsonFetch("GET", url, {}),
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
