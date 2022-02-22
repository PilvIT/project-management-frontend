import { CreateProjectForm } from "../../components/forms/CreateProjectForm";
import { Header } from "../../components/atoms/Header";
import { ProjectDetail } from "../../core/models/Project";
import { useRouter } from "next/router";

export default function CreatePage() {
  const router = useRouter();

  const handleCreated = async (project: ProjectDetail) => {
    await router.push(`/projects/${project.id}`);
  };

  return (
    <div className="col-start-2 col-end-12">
      <Header size={1} className="mb-5">
        Create Project
      </Header>
      <CreateProjectForm onCreated={handleCreated} />
    </div>
  );
}
