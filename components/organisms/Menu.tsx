import { FiLogOut } from "react-icons/fi";
import { Logo } from "../svg/Logo";
import { MenuLink } from "../atoms/MenuLink";
import NextLink from "next/link";
import { useUser } from "../hooks/useUser";

export const Menu = () => {
  const user = useUser();

  return (
    <div className="grid grid-flow-col items-center auto-cols-max gap-5 whitespace-normal bg-stone-800 px-5">
      <NextLink href="/" prefetch={false}>
        <a>
          <Logo className="fill-gray-200" />
        </a>
      </NextLink>
      <div className="flex gap-5">
        <MenuLink href="/projects">Projects</MenuLink>
        <MenuLink href="/developers">Developers</MenuLink>
      </div>

      <button className="flex grow" onClick={user.logout} aria-label="Log out">
        <FiLogOut className="justify-self-right text-neutral-200" />
      </button>
    </div>
  );
};
