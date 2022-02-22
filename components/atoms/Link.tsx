import { ReactNode } from "react";
import NextLink from "next/link";
import { colors as buttonColors, ButtonColors } from "./Button";

const classes = {
  link: "",
  button: "block object-right bg-slate-600 text-white p-2 rounded-md w-fit",
};

interface Colors {
  link: Record<ButtonColors, string>;
  button: Record<ButtonColors, string>;
}
const colors: Colors = {
  link: {
    primary: "",
    secondary: "",
  },
  button: buttonColors,
};

interface Props {
  appearance?: "link" | "button";
  children: ReactNode;
  className?: string;
  to: string;
  styling: {
    color: ButtonColors;
  };
}

export const Link = ({
  className,
  appearance = "link",
  children,
  to,
  styling,
}: Props) => {
  return (
    <NextLink href={to}>
      <a
        className={`${classes[appearance]} ${
          colors[appearance][styling.color]
        } ${className}`}
      >
        {children}
      </a>
    </NextLink>
  );
};
