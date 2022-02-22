import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  className?: string;
  size: "h1" | "h2" | "h3" | "h4";
}

export const Header = ({ children, className, size }: Props) => {
  switch (size) {
    case "h1":
      return (
        <h1 className={`font-serif text-b text-4xl ${className}`}>
          {children}
        </h1>
      );
    case "h2":
      return (
        <h2 className={`font-serif text-b text-3xl ${className}`}>
          {children}
        </h2>
      );
    case "h3":
      return (
        <h3 className={`font-serif text-b text-xl ${className}`}>{children}</h3>
      );
    case "h4":
      return (
        <h4 className={`font-serif text-b text-lg ${className}`}>{children}</h4>
      );
    default:
      throw new Error(`Size ${size} is not supported!`);
  }
};
