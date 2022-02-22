import { AddGitRepositoryForm } from "../../../../components/forms/AddGitRepositoryForm";
import { GitRepositoryDetail } from "../../../../core/models/GitRepository";
import { Header } from "../../../../components/atoms/Header";
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
    <div className="col-start-2 col-span-10 space-y-5">
      <Header size={1}>Add Repository</Header>
      <AddGitRepositoryForm onCreated={handleOnCreated} />
    </div>
  );
}
