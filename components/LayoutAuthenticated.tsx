import { Menu } from "./organisms/Menu/Menu";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  onLogout: () => void;
}

export const LayoutAuthenticated = ({ children, onLogout }: Props) => {
  return (
    <div>
      <Menu onLogout={onLogout} />
      <div className="grid grid-cols-12 gap-3 mt-8">{children}</div>
    </div>
  );
};
