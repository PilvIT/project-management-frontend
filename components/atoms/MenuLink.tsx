import NextLink from "next/link";
import { ReactNode } from "react";
import { useRouter } from "next/router";

const classes = {
  active: "text-lime-600 underline underline-offset-2",
};

interface Props {
  children: ReactNode;
  href: `/${string}`;
}

export const MenuLink = ({ children, href }: Props) => {
  const { pathname } = useRouter();

  return (
    <NextLink href={href} prefetch={false}>
      <a
        className={`p-3 ${pathname.startsWith(href) ? classes.active : ""}
            hover:brightness-120 hover:underline hover:underline-offset-2`}
      >
        {children}
      </a>
    </NextLink>
  );
};
