import { AddGitRepositoryForm } from "../../../../components/forms/AddGitRepositoryForm";
import { GitRepositoryDetail } from "../../../../core/models/GitRepository";
import { Header } from "../../../../components/atoms/Header";
import { LayoutSection } from "../../../../components/atoms/LayoutSection";
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
    <LayoutSection>
      <Header size={1}>Add Repository</Header>
      <AddGitRepositoryForm onCreated={handleOnCreated} />
    </LayoutSection>
  );
}
