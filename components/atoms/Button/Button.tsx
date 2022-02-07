import { MouseEvent, ReactNode } from "react";

interface Props {
  className?: string;
  children: ReactNode;
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
  type?: "submit" | "button";
}

export const Button = ({
  children,
  className,
  onClick,
  type = "button",
}: Props) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`bg-fuchsia-600 text-white p-2 rounded-md ${className}`}
    >
      {children}
    </button>
  );
};
