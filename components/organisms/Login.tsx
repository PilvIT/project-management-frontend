import { FaGithub } from "react-icons/fa";
import { GitHubOAuthService } from "../../core/features/github/GitHubOAuthService";
import { useEffect } from "react";
import { useRouter } from "next/router";

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
    <div className="flex flex-col items-center mx-3">
      <h1 className="text-6xl block my-5 ">Project Management</h1>
      <button
        onClick={handleLogin}
        className="bg-fuchsia-500 text-white flex gap-3 items-center px-3 py-2 rounded-md"
      >
        <FaGithub />
        Sign In
      </button>
    </div>
  );
};
