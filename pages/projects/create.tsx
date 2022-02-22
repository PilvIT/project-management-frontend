import { CreateProjectForm } from "../../components/forms/CreateProjectForm";
import { Header } from "../../components/atoms/Header";
import { LayoutSection } from "../../components/atoms/LayoutSection";
import { ProjectDetail } from "../../core/models/Project";
import { useRouter } from "next/router";

export default function CreatePage() {
  const router = useRouter();

  const handleCreated = async (project: ProjectDetail) => {
    await router.push(`/projects/${project.id}`);
  };

  return (
    <LayoutSection>
      <Header size={1} className="mb-5">
        Create Project
      </Header>
      <CreateProjectForm onCreated={handleCreated} />
    </LayoutSection>
  );
}
