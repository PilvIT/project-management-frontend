import { Header } from "../../components/atoms/Header";
import { NotImplemented } from "../../components/dev/NotImplemented";

export default function DeveloperListPage() {
  return (
    <div className="col-start-2 col-span-10">
      <Header size={1} className="mb-5">
        Developers
      </Header>
      <NotImplemented />
    </div>
  );
}
