import { Button } from "../atoms/Button";
import { FaGithub } from "react-icons/fa";
import { GitHubOAuthService } from "../../core/features/github/GitHubOAuthService";
import Head from "next/head";
import { Header } from "../atoms/Header";
import { useEffect } from "react";
import { useRouter } from "next/router";

interface Props {
  onLoggedIn: () => void;
}

export const Login = ({ onLoggedIn }: Props) => {
  const router = useRouter();

  const handleLogin = () => {
    GitHubOAuthService.login(location.origin).catch(console.error);
  };

  useEffect(() => {
    const { code, state } = router.query;
    if (typeof code === "string" && typeof state === "string") {
      GitHubOAuthService.exchangeToken({
        code,
        state,
        redirectUri: location.origin,
      })
        .then(() => {
          onLoggedIn();
          return router.replace(location.pathname, undefined, {
            shallow: true,
          });
        })
        .catch(console.error);
    }
  }, [onLoggedIn, router]);

  return (
    <div className="grid place-items-center h-screen">
      <Head>
        <title>Login</title>
      </Head>
      <div className="h-4/6 flex flex-col space-y-5 items-center">
        <Header size={1}>Project Management Login</Header>
        <p>
          Service is only available to users added to the GitHub organization.
        </p>
        <div>
          <Button onClick={handleLogin} styling={{ color: "primary" }}>
            <FaGithub />
            Sign In
          </Button>
        </div>
      </div>
    </div>
  );
};
