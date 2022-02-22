import NextLink from "next/link";
import { ReactNode } from "react";
import { useRouter } from "next/router";

const classes = {
  active: "text-amber-600 underline",
};

interface Props {
  children: ReactNode;
  href: `/${string}`;
}

export const MenuLink = ({ children, href }: Props) => {
  const router = useRouter();

  return (
    <NextLink href={href} prefetch={false}>
      <a
        className={`py-2 px-3
          ${router.pathname === href ? classes.active : "text-neutral-200"}`}
      >
        {children}
      </a>
    </NextLink>
  );
};
