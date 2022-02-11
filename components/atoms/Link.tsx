import { ReactNode } from "react";
import NextLink from "next/link";

const classes = {
  link: "",
  button: "block object-right bg-slate-600 text-white p-2 rounded-md w-fit",
};

interface Props {
  appearance?: "link" | "button";
  children: ReactNode;
  className?: string;
  to: string;
}

export const Link = ({
  className,
  appearance = "link",
  children,
  to,
}: Props) => {
  return (
    <NextLink href={to}>
      <a className={`${classes[appearance]} ${className}`}>{children}</a>
    </NextLink>
  );
};
