import { MouseEvent, ReactNode } from "react";

export type ButtonColors = "secondary" | "primary";

export const colors: Record<ButtonColors, string> = {
  secondary: "bg-gray-500 text-white-300",
  primary: "bg-teal-700 text-white",
};

interface Props {
  className?: string;
  children: ReactNode;
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
  type?: "submit" | "button";
  styling: {
    color: ButtonColors;
  };
}

export const Button = ({
  children,
  className,
  onClick,
  styling,
  type = "button",
}: Props) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`flex items-center gap-2 py-2 px-4 rounded-md hover:brightness-110 ${
        colors[styling.color]
      } ${className}`}
    >
      {children}
    </button>
  );
};
