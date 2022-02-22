import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  className?: string;
}

export const ButtonGroup = ({ children, className }: Props) => {
  return (
    <div className={`flex items-center gap-6 ${className}`}>{children}</div>
  );
};
