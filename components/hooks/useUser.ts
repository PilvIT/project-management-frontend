import { useCallback, useEffect, useState } from "react";
import { UserModel } from "../../types/models/UserModel";
import { LocalStorageKeys } from "../../constants/LocalStorageKeys";

interface HookValue {
  loggedIn: boolean;
  reload: () => void;
}

export const useUser = (): HookValue => {
  const [user, setUser] = useState<UserModel | null>(null);

  const reload = useCallback(() => {
    const token: string | null = localStorage.getItem(
      LocalStorageKeys.AuthToken
    );
    if (token !== null) {
      setUser({ name: "Yoda" });
    }
  }, []);

  useEffect(() => {
    reload();
  }, [reload]);

  return {
    loggedIn: user !== null,
    reload,
  };
};
