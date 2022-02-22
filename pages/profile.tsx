import { Header } from "../components/atoms/Header";
import { LayoutSection } from "../components/atoms/LayoutSection";
import { NotImplemented } from "../components/dev/NotImplemented";

export default function ProfilePage() {
  return (
    <LayoutSection>
      <Header size={1}>Profile</Header>
      <NotImplemented />
    </LayoutSection>
  );
}
