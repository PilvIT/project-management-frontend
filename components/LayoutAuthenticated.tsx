import { Menu } from "./organisms/Menu";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export const LayoutAuthenticated = ({ children }: Props) => {
  return (
    <div className="space-y-10 grid grid-cols-12 gap-5">
      <Menu className={"col-start-2 col-span-10"} />
      {children}
    </div>
  );
};
