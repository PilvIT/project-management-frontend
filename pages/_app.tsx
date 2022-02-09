import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Login } from "../components/organisms/Login";
import { LayoutAuthenticated } from "../components/LayoutAuthenticated";
import useSWR, { SWRConfig } from "swr";
import { jsonFetch } from "../core/jsonFetch";

export default function MyApp({ Component, pageProps }: AppProps) {
  const user = useSWR("/user", (url) => jsonFetch("GET", url));

  const handleOnLogout = async () => {
    localStorage.clear();
    await user.mutate();
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
        refreshInterval: 0,
      }}
    >
      <LayoutAuthenticated onLogout={handleOnLogout}>
        <Component {...pageProps} />
      </LayoutAuthenticated>
    </SWRConfig>
  );
}
