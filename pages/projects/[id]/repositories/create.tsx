import { AddGitRepositoryForm } from "../../../../components/forms/AddGitRepositoryForm";
import { GitRepositoryDetail } from "../../../../core/models/GitRepository";
import { PageTitle } from "../../../../components/atoms/PageTitle/PageTitle";
import { jsonFetch } from "../../../../core/jsonFetch";
import { useRouter } from "next/router";

export default function GitRepositoryCreatePage() {
  const router = useRouter();

  const handleOnCreated = async (repository: GitRepositoryDetail) => {
    try {
      await jsonFetch("POST", `/git-repositories/${repository.id}/refresh`, {});
    } catch (e) {
      console.error("Failed to refresh repository after creation");
    }
    await router.push(`/projects/${router.query.id}`);
  };

  return (
    <div className="col-start-2 col-span-10">
      <PageTitle className="mb-5">Add Repository</PageTitle>
      <AddGitRepositoryForm onCreated={handleOnCreated} />
    </div>
  );
}
