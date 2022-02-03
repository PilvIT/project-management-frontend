import { useEffect, useState } from "react";
import { UserModel } from "../../types/models/UserModel";

interface HookValue {
  loggedIn: boolean;
}

export const useUser = (): HookValue => {
  const [user, setUser] = useState<UserModel | null>(null);

  useEffect(() => {
    const token: string | null = localStorage.getItem("auth-token");
    if (token !== null) {
      setUser({ name: "Yoda" });
    }
  }, []);

  return {
    loggedIn: user !== null,
  };
};
