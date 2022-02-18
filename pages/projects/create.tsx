import { CreateProjectForm } from "../../components/forms/CreateProjectForm";
import { PageTitle } from "../../components/atoms/PageTitle/PageTitle";
import { useRouter } from "next/router";
import { ProjectDetail } from "../../core/models/Project";

export default function CreatePage() {
  const router = useRouter();

  const handleCreated = async (project: ProjectDetail) => {
    await router.push(`/projects/${project.id}`);
  };

  return (
    <div className="col-start-2 col-end-12">
      <PageTitle className="mb-5">Create Project</PageTitle>
      <CreateProjectForm onCreated={handleCreated} />
    </div>
  );
}
