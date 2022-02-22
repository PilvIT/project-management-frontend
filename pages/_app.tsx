import "../styles/globals.css";
import type { AppProps } from "next/app";
import { LayoutAuthenticated } from "../components/LayoutAuthenticated";
import { Login } from "../components/organisms/Login";
import { SWRConfig } from "swr";
import { swrFetcher } from "../core/swrFetcher";
import { useUser } from "../components/hooks/useUser";

export default function MyApp({ Component, pageProps }: AppProps) {
  const user = useUser();

  if (!user.data && user.isValidating) {
    return null;
  }

  if (!user.data) {
    return <Login onLoggedIn={user.mutate} />;
  }

  return (
    <div className="bg-zinc-50 h-screen">
      <SWRConfig
        value={{
          fetcher: swrFetcher(user.logout),
          errorRetryCount: 3,
          refreshInterval: 0,
          focusThrottleInterval: 10_000,
        }}
      >
        <LayoutAuthenticated>
          <Component {...pageProps} />
        </LayoutAuthenticated>
      </SWRConfig>
    </div>
  );
}
