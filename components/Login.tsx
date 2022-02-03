import { FaGithub } from "react-icons/fa";
import { jsonFetch } from "../core/jsonFetch";

export const Login = () => {
  const handleLogin = () => {
    jsonFetch("POST", "/github/auth", {
      redirectUri: `${location.origin}`,
    }).then((data) => {
      localStorage.setItem("aa", data.state);
      window.open(data.url, "_self");
    });
  };

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
