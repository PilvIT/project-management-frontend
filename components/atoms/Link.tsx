import NextLink from "next/link";
import { ReactNode } from "react";

const classes = {
  link: "",
  button: "block object-right bg-fuchsia-600 text-white p-2 rounded-md w-fit",
};

interface Props {
  children: ReactNode;
  href: string;
  appearance?: "link" | "button";
}

export const Link = ({ appearance = "link", children, href }: Props) => {
  return (
    <NextLink href={href}>
      <a className={classes[appearance]}>{children}</a>
    </NextLink>
  );
};
