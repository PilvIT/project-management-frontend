import { Card } from "../../components/atoms/Card";
import { Link } from "../../components/atoms/Link";
import NextHead from "next/head";
import NextLink from "next/link";
import { PageTitle } from "../../components/atoms/PageTitle";
import { ProjectListDetail } from "../../core/models/Project";
import useSWR from "swr";

export default function ProjectPage() {
  const { data, error } = useSWR("/projects");

  return (
    <div className="col-span-10 col-start-2 flex flex-col space-y-5">
      <NextHead>
        <title>Projects</title>
      </NextHead>

      <div className="flex items-center justify-between">
        <PageTitle>Projects</PageTitle>

        <div className="flex items-center gap-3">
          <Link
            to="/projects/join"
            appearance="button"
            styling={{ color: "secondary" }}
          >
            Join Project
          </Link>
          <Link
            to="/projects/create"
            appearance="button"
            styling={{ color: "primary" }}
          >
            Add Project
          </Link>
        </div>
      </div>

      {data &&
        data.map((project: ProjectListDetail) => (
          <NextLink
            key={project.id}
            href={`/projects/${project.id}`}
            prefetch={false}
          >
            <a>
              <Card
                className={`border border-gray-200 p-4 shadow-md rounded-md hover:cursor-pointer hover:border-blue-300`}
              >
                <div>
                  <h2 className="text-md font-bold py-2">
                    {project.displayName}
                  </h2>
                </div>
              </Card>
            </a>
          </NextLink>
        ))}
    </div>
  );
}
