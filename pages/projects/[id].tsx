import { ErrorBoundary } from "../../components/dev/ErrorBoundary";
import { GitRepositoryListDetailCard } from "../../components/organisms/GitRepositoryListDetailCard";
import { Header } from "../../components/atoms/Header";
import { LayoutSection } from "../../components/atoms/LayoutSection";
import { Link } from "../../components/atoms/Link";
import { ProjectDetail } from "../../core/models/Project";
import { SwrListRenderer } from "../../components/templates/SwrListRenderer";
import { TemporaryFeature } from "../../components/dev/TemporaryFeature";
import { jsonFetch } from "../../core/jsonFetch";
import { useRouter } from "next/router";
import useSWR from "swr";

export default function ProjectPage() {
  const router = useRouter();
  const { id } = router.query;
  const { data } = useSWR<ProjectDetail>(id && `/projects/${id}`);

  const handleDelete = () => {
    console.info(`Delete project ${id}`);
    jsonFetch("DELETE", `/projects/${id}`).then(() =>
      router.replace("/projects")
    );
  };

  if (!data) {
    return null;
  }

  return (
    <LayoutSection>
      <header>
        <Header size={1}>
          {data.group} / {data.name}
        </Header>
        <small className="font-mono text-sm text-gray-400">ID: {data.id}</small>
      </header>

      <TemporaryFeature name="Project Edit">
        <button onClick={handleDelete} className="bg-red-300">
          Delete
        </button>
      </TemporaryFeature>

      <div className="flex justify-between">
        <Header size={2}>Repositories</Header>
        <Link
          to={`/projects/${id}/repositories/create`}
          appearance="button"
          className="h-fit"
          styling={{ color: "primary" }}
        >
          Add Repository
        </Link>
      </div>

      <ErrorBoundary>
        {typeof id === "string" && (
          <SwrListRenderer
            url={`/git-repositories?projectId=${id}`}
            placeholder={
              <p>You have not added any repository to the project.</p>
            }
            ItemRenderer={GitRepositoryListDetailCard}
            className="flex-col"
          />
        )}
      </ErrorBoundary>
    </LayoutSection>
  );
}
