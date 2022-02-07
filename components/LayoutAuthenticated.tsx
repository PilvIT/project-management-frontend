import { Menu } from "./organisms/Menu/Menu";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export const LayoutAuthenticated = ({ children }: Props) => {
  return (
    <div>
      <Menu />
      {children}
    </div>
  );
};
