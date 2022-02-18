import useSWR from "swr";
import { useRouter } from "next/router";
import { PageTitle } from "../../components/atoms/PageTitle/PageTitle";
import { Link } from "../../components/atoms/Link";
import { GitRepository } from "../../components/molecules/GitRepository";
import { ProjectDetail } from "../../core/models/Project";
import { Paginated } from "../../core/models/Paginated";
import { GitRepositoryListDetail } from "../../core/models/GitRepository";
import { jsonFetch } from "../../core/jsonFetch";

export default function ProjectPage() {
  const router = useRouter();
  const { id } = router.query;
  const { data, error, mutate } = useSWR<ProjectDetail>(
    id && `/projects/${id}`
  );
  const gitRepositories = useSWR<Paginated<GitRepositoryListDetail>>(
    id && `/git-repositories?projectId=${id}`
  );

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
    <div className="col-start-2 col-span-10 space-y-5">
      <header>
        <PageTitle>
          {data.group} / {data.name}
        </PageTitle>
        <small className="font-mono text-sm text-gray-400">ID: {data.id}</small>
      </header>

      <button onClick={handleDelete} className="bg-red-300">
        Delete
      </button>

      <div className="flex justify-between">
        <h2 className="font-bold text-2xl mb-5">Repositories</h2>
        <Link
          to={`/projects/${id}/repositories/create`}
          appearance="button"
          className="h-fit"
          styling={{ color: "primary" }}
        >
          Add Repository
        </Link>
      </div>

      {gitRepositories.data && (
        <div className="space-y-3">
          {gitRepositories.data.data.map((repository) => (
            <GitRepository
              key={repository.id}
              data={repository}
              onDeleted={mutate}
            />
          ))}
        </div>
      )}
    </div>
  );
}
