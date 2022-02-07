import { MouseEvent, ReactNode } from "react";

interface Props {
  children: ReactNode;
  onClick: (event: MouseEvent<HTMLButtonElement>) => void;
}

export const Button = ({ children, onClick }: Props) => {
  return (
    <button
      onClick={onClick}
      className="bg-fuchsia-600 text-white p-2 rounded-md"
    >
      {children}
    </button>
  );
};
