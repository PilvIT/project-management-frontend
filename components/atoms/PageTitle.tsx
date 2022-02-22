import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  className?: string;
}

export const PageTitle = ({ children, className }: Props) => {
  return (
    <h1 className={`font-serif text-b text-3xl ${className}`}>{children}</h1>
  );
};
