import { Link } from "../../components/atoms/Link";
import { PageTitle } from "../../components/atoms/PageTitle/PageTitle";
import useSWR from "swr";
import { ProjectModel } from "../../core/projects/models/ProjectModel";
import NextLink from "next/link";

export default function ProjectPage() {
  const { data, error } = useSWR("/projects");

  return (
    <div className="flex flex-col gap-5 m-4">
      <PageTitle>Projects</PageTitle>
      <Link href="/projects/create" appearance="button">
        Add Project
      </Link>

      {data &&
        data.map((project: ProjectModel) => (
          <NextLink
            key={project.id}
            href={`/projects/${project.id}`}
            prefetch={false}
          >
            <a
              className={`border border-gray-200 p-4 shadow-md rounded-md hover:cursor-pointer hover:border-blue-300`}
            >
              <div>
                <h2 className="text-md font-bold py-2">
                  {project.group} / {project.name}
                </h2>
              </div>
            </a>
          </NextLink>
        ))}
    </div>
  );
}
