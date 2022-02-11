import useSWR from "swr";
import { useRouter } from "next/router";
import { PageTitle } from "../../components/atoms/PageTitle/PageTitle";
import { Link } from "../../components/atoms/Link";
import { GitRepository } from "../../components/molecules/GitRepository";
import { Project } from "../../core/models/Project";

export default function ProjectPage() {
  const router = useRouter();
  const { data, error } = useSWR<Project>(
    router.query.id ? `/projects/${router.query.id}` : null
  );

  if (!data) {
    return null;
  }

  return (
    <div className="col-start-2 col-span-10 space-y-5">
      <header>
        <PageTitle>
          {data.group} / {data.name}
        </PageTitle>
        <small className="font-mono text-sm text-gray-400">{data.id}</small>
      </header>

      <div className="flex justify-between">
        <h2 className="font-bold text-2xl mb-5">Repositories</h2>
        <Link
          to={`/projects/${data.id}/repositories/create`}
          appearance="button"
          className="h-fit"
        >
          Add Repository
        </Link>
      </div>

      <div className="space-y-3">
        {data.repositories.map((repository) => (
          <GitRepository key={repository.id} data={repository} />
        ))}
      </div>
    </div>
  );
}
