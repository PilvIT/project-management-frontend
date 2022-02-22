import { ButtonColors, colors as buttonColors } from "./Button";
import NextLink from "next/link";
import { ReactNode } from "react";

const classes = {
  link: "",
  button: "block py-2 px-4 rounded-md md:w-fit",
};

interface Colors {
  link: Record<ButtonColors, string>;
  button: Record<ButtonColors, string>;
}
const colors: Colors = {
  link: {
    primary: "",
    secondary: "text-gray-500",
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
        className={`${classes[appearance]}
          ${colors[appearance][styling.color]} ${className}`}
      >
        {children}
      </a>
    </NextLink>
  );
};
