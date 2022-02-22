import { Header } from "../../components/atoms/Header";
import { LayoutSection } from "../../components/atoms/LayoutSection";
import { NotImplemented } from "../../components/dev/NotImplemented";

export default function DeveloperListPage() {
  return (
    <LayoutSection>
      <Header size={1} className="mb-5">
        Developers
      </Header>
      <NotImplemented />
    </LayoutSection>
  );
}
