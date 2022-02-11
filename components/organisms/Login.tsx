import { FaGithub } from "react-icons/fa";
import { GitHubOAuthService } from "../../core/features/github/GitHubOAuthService";
import { useEffect } from "react";
import { useRouter } from "next/router";
import { PageTitle } from "../atoms/PageTitle/PageTitle";
import { Button } from "../atoms/Button/Button";

interface Props {
  onLoggedIn: () => void;
}

export const Login = ({ onLoggedIn }: Props) => {
  const router = useRouter();

  const handleLogin = () => {
    GitHubOAuthService.login(location.origin).catch(() => {
      // TODO: handle error
    });
  };

  useEffect(() => {
    if (
      typeof router.query.code === "string" &&
      typeof router.query.state === "string"
    ) {
      GitHubOAuthService.exchangeToken({
        code: router.query.code,
        state: router.query.state,
        redirectUri: location.origin,
      })
        .then(async () => {
          onLoggedIn();
          await router.replace(location.pathname, undefined, {
            shallow: true,
          });
        })
        .catch((e) => {
          console.error(e);
          // TODO: handle error
        });
    }
  }, [onLoggedIn, router]);

  return (
    <div className="grid place-items-center auto-rows-auto h-screen">
      <div className="h-4/6 flex flex-col gap-5">
        <PageTitle>Project Management Login</PageTitle>
        <Button onClick={handleLogin}>
          <FaGithub />
          Sign In
        </Button>
      </div>
    </div>
  );
};
