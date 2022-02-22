import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  className?: string;
}

export const Card = ({ children, className }: Props) => {
  const classes = `border border-gray-200 shadow-md box-border rounded-md overflow-clip space-y-5 hover:border-blue-300 ${className}`;

  return <div className={classes}>{children}</div>;
};
