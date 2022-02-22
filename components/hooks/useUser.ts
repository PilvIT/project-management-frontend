import { KeyedMutator } from "swr/dist/types";
import { LocalStorageKeys } from "../../constants/LocalStorageKeys";
import { UserDetail } from "../../core/models/User";
import { jsonFetch } from "../../core/jsonFetch";
import useSWR from "swr";

interface HookValue {
  data: UserDetail | null | undefined;
  isValidating: boolean;
  mutate: KeyedMutator<UserDetail | null>;
  logout: () => void;
}

/**
 * Fetches user using SWR if authenticated
 *
 * See https://swr.vercel.app/docs/getting-started#make-it-reusable
 */
export const useUser = (): HookValue => {
  const { data, isValidating, mutate } = useSWR<UserDetail | null>(
    "/user",
    fetcher,
    {
      errorRetryCount: 0,
      refreshInterval: 0,
    }
  );

  const handleLogout = async () => {
    localStorage.clear();
    await mutate(null, false);
  };

  return { data, mutate, isValidating, logout: handleLogout };
};

const fetcher = (url: `/${string}`): Promise<UserDetail | null> => {
  if (localStorage.getItem(LocalStorageKeys.AuthToken)) {
    return jsonFetch<UserDetail>("GET", url);
  }
  return Promise.resolve(null);
};
