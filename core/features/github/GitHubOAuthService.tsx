import { LocalStorageKeys } from "../../../constants/LocalStorageKeys";
import { jsonFetch } from "../../jsonFetch";

interface OAuthInitResponse {
  url: string;
  state: string;
}

interface ExchangeTokenRequest {
  code: string;
  state: string;
  redirectUri: string;
}

interface ExchangeTokenResponse {
  userId: string;
  token: string;
}

/** Redirect to GitHub login and redirect back to the service. */
const login = (redirectUri: string): Promise<void> => {
  return jsonFetch<OAuthInitResponse>("POST", "/github/auth", {
    redirectUri,
  }).then((data: OAuthInitResponse) => {
    localStorage.setItem(LocalStorageKeys.GitHubOAuthState, data.state);
    window.open(data.url, "_self");
  });
};

const exchangeToken = (data: ExchangeTokenRequest): Promise<void> => {
  console.info("Exchange for GitHub token");

  if (data.state === localStorage.getItem(LocalStorageKeys.GitHubOAuthState)) {
    localStorage.removeItem(LocalStorageKeys.GitHubOAuthState);
    return jsonFetch<ExchangeTokenResponse>(
      "POST",
      "/github/exchange-token",
      data
    ).then(({ token }) =>
      localStorage.setItem(LocalStorageKeys.AuthToken, token)
    );
  }

  return Promise.reject(new Error("OAuth state is invalid."));
};

export const GitHubOAuthService = {
  exchangeToken,
  login,
};
