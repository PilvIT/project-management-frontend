import { LocalStorageKeys } from "../../../constants/LocalStorageKeys";
import { jsonFetch } from "../../jsonFetch";

interface AuthorizationUrl {
  url: string;
  state: string;
}
/** Redirect to GitHub login and redirect back to the service. */
const login = (redirectUri: string): Promise<void> => {
  return jsonFetch("POST", "/github/auth", {
    redirectUri,
  }).then((data: AuthorizationUrl) => {
    localStorage.setItem(LocalStorageKeys.GitHubOAuthState, data.state);
    console.log(data.url);
    window.open(data.url, "_self");
    console.log("D");
  });
};

interface ExchangeTokenArgs {
  code: string;
  state: string;
  redirectUri: string;
}
const exchangeToken = (data: ExchangeTokenArgs): Promise<void> => {
  console.info("Exchange for GitHub token");

  if (data.state === localStorage.getItem(LocalStorageKeys.GitHubOAuthState)) {
    localStorage.removeItem(LocalStorageKeys.GitHubOAuthState);
    return jsonFetch("POST", "/github/exchange-token", data).then(({ token }) =>
      localStorage.setItem(LocalStorageKeys.AuthToken, token)
    );
  }

  return Promise.reject(new Error("OAuth state is invalid."));
};

export const GitHubOAuthService = {
  exchangeToken,
  login,
};
