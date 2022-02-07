import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Login } from "../components/organisms/Login";
import { useUser } from "../components/hooks/useUser";
import { LayoutAuthenticated } from "../components/LayoutAuthenticated";
import { SWRConfig } from "swr";
import { jsonFetch } from "../core/jsonFetch";

export default function MyApp({ Component, pageProps }: AppProps) {
  const user = useUser();

  if (!user.loggedIn) {
    return <Login onLoggedIn={user.reload} />;
  }

  return (
    <SWRConfig
      value={{
        fetcher: (url) => jsonFetch("GET", url, {}),
        refreshInterval: 0,
      }}
    >
      <LayoutAuthenticated>
        <Component {...pageProps} />
      </LayoutAuthenticated>
    </SWRConfig>
  );
}
