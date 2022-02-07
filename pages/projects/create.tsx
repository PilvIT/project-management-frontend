import { CreateProjectForm } from "../../components/forms/CreateProjectForm";
import { PageTitle } from "../../components/atoms/PageTitle/PageTitle";
import { ProjectModel } from "../../types/models/ProjectModel";
import { useRouter } from "next/router";

export default function CreatePage() {
  const router = useRouter();

  const handleCreated = (project: ProjectModel) => {
    router.push(`/projects/${project.id}`);
  };

  return (
    <div className="m-4">
      <PageTitle>Create Project</PageTitle>
      <CreateProjectForm onCreated={handleCreated} />
    </div>
  );
}
