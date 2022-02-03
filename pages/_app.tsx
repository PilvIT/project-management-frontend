import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Login } from "../components/Login";
import { useUser } from "../components/hooks/useUser";

export default function MyApp({ Component, pageProps }: AppProps) {
  const user = useUser();

  if (!user.loggedIn) {
    return <Login />;
  }

  return (
    <>
      <Component {...pageProps} />
    </>
  );
}
