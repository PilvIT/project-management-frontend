import { AddGitRepositoryForm } from "../../../../components/forms/AddGitRepositoryForm";
import { PageTitle } from "../../../../components/atoms/PageTitle/PageTitle";
import { useRouter } from "next/router";
import { GitRepositoryDetail } from "../../../../core/models/GitRepository";

export default function GitRepositoryCreatePage() {
  const router = useRouter();

  const handleOnCreated = async (repository: GitRepositoryDetail) => {
    await router.push(`/projects/${router.query.id}`);
  };

  return (
    <div>
      <PageTitle className="mb-5">Add Repository</PageTitle>
      <AddGitRepositoryForm onCreated={handleOnCreated} />
    </div>
  );
}
