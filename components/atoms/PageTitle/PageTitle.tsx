import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  className?: string;
}

export const PageTitle = ({ children, className }: Props) => {
  return <h1 className={`text-b text-2xl ${className}`}>{children}</h1>;
};
