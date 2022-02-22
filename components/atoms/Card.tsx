import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  className?: string;
  styling?: {
    hoverable?: boolean;
    padded?: boolean;
  };
}

export const Card = ({ children, className, styling }: Props) => {
  return (
    <div
      className={`
        border border-gray-300 rounded-md shadow-md
        overflow-clip
        ${styling?.padded && "p-4"}
        ${styling?.hoverable && "hover:border-blue-300"}
        ${className}
      `}
    >
      {children}
    </div>
  );
};
