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
      <div className="m-auto my-5 max-w-[95vw] md:max-w-[80vw]">{children}</div>
    </div>
  );
};
