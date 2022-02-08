import { AddGitRepositoryForm } from "../../../../components/forms/AddGitRepositoryForm";
import { GitRepositoryModel } from "../../../../core/projects/models/GitRepositoryModel";
import { PageTitle } from "../../../../components/atoms/PageTitle/PageTitle";
import { useRouter } from "next/router";

export default function GitRepositoryCreatePage() {
  const router = useRouter();

  const handleOnCreated = async (repository: GitRepositoryModel) => {
    await router.push(`/projects/${router.query.id}`);
  };

  return (
    <div>
      <PageTitle className="mb-5">Add Repository</PageTitle>
      <AddGitRepositoryForm onCreated={handleOnCreated} />
    </div>
  );
}
