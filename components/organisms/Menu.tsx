import { FiLogOut } from "react-icons/fi";
import { Link } from "../atoms/Link";
import { Logo } from "../svg/Logo";
import { MenuLink } from "../atoms/MenuLink";
import NextLink from "next/link";
import { useUser } from "../hooks/useUser";

interface Props {
  className?: string;
}

export const Menu = ({ className }: Props) => {
  const user = useUser();

  return (
    <div className={`flex items-center ${className}`}>
      <NextLink href="/" prefetch={false}>
        <a>
          <Logo />
        </a>
      </NextLink>
      <div className="flex items-center gap-2 ml-10">
        <MenuLink href="/projects">Projects</MenuLink>
        <MenuLink href="/developers">Developers</MenuLink>
      </div>

      <div className="flex-grow flex flex-row-reverse items-center gap-8">
        <button
          onClick={user.logout}
          className="flex items-center gap-2"
          aria-label="Log out"
        >
          <FiLogOut />
        </button>
        <Link to="/profile" styling={{ color: "secondary" }}>
          {user.data!.name}
        </Link>
      </div>
    </div>
  );
};
