import { Menu } from "./organisms/Menu";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export const LayoutAuthenticated = ({ children }: Props) => {
  return (
    <div>
      <Menu />
      <div className="grid grid-cols-12 gap-3 mt-8">{children}</div>
    </div>
  );
};
