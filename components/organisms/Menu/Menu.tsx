import { MenuLink } from "../../atoms/MenuLink/MenuLink";

interface Props {}

export const Menu = ({}: Props) => {
  return (
    <div className="flex bg-stone-800 text-white py-2 px-5">
      <div className="mr-10">LOGO</div>
      <div className="flex gap-5">
        <MenuLink href="/projects">Projects</MenuLink>
        <MenuLink href="/developers">Developers</MenuLink>
      </div>
    </div>
  );
};
