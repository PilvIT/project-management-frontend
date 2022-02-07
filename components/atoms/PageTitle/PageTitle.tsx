import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export const PageTitle = ({ children }: Props) => {
  return <h1 className="text-b text-2xl mb-3">{children}</h1>;
};
