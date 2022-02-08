import { FiLogOut } from "react-icons/fi";
import { Logo } from "../../svg/Logo";
import { MenuLink } from "../../atoms/MenuLink/MenuLink";

interface Props {
  onLogout: () => void;
}

export const Menu = ({ onLogout }: Props) => {
  return (
    <div className="grid grid-flow-col auto-cols-max gap-5 whitespace-normal bg-stone-800 px-5">
      <Logo className="fill-gray-200" />
      <div className="flex gap-5">
        <MenuLink href="/projects">Projects</MenuLink>
        <MenuLink href="/developers">Developers</MenuLink>
      </div>

      <button className="bg-cyan-800 flex grow" onClick={onLogout}>
        <FiLogOut className="justify-self-right" />
      </button>
    </div>
  );
};
