import NextLink from "next/link";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  href: `/${string}`;
}

export const MenuLink = ({ children, href }: Props) => {
  return (
    <NextLink href={href} prefetch={false}>
      <a className="">{children}</a>
    </NextLink>
  );
};
