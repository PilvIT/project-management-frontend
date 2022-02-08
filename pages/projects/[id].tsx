import useSWR from "swr";
import { useRouter } from "next/router";
import { PageTitle } from "../../components/atoms/PageTitle/PageTitle";
import { Link } from "../../components/atoms/Link";

export default function ProjectPage() {
  const router = useRouter();
  const { data, error } = useSWR(
    router.query.id ? `/projects/${router.query.id}` : null
  );

  if (!data) {
    return null;
  }

  return (
    <div>
      <PageTitle>
        {data.group} / {data.name}
      </PageTitle>
      <small>
        <code>{data.id}</code>
      </small>
      <code>
        <pre>{JSON.stringify(data, null, 2)}</pre>
      </code>

      <div>
        <Link
          href={`/projects/${data.id}/repositories/create`}
          appearance="button"
        >
          Add Repository
        </Link>
      </div>
    </div>
  );
}
