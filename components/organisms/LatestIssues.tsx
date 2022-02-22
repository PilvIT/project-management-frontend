import { Card } from "../atoms/Card";
import { ErrorDisplay } from "../dev/ErrorDisplay";
import { GitRepositoryListDetail } from "../../core/models/GitRepository";
import { Header } from "../atoms/Header";
import NextLink from "next/link";
import useSWR from "swr";

export const LatestIssues = () => {
  const { data, error } = useSWR("/git-repositories?hasIssues=true");

  if (data) {
    return (
      <div className="grid grid-cols-3 gap-5">
        {data.data.map((repository: GitRepositoryListDetail) => (
          <NextLink
            key={repository.id}
            href={`/projects/${repository.projectId}`}
          >
            <a>
              <Card key={repository.id}>
                <div className="m-3">
                  <Header className="capitalize mb-2" size="h3">
                    {repository.name.replaceAll("-", " ")}
                  </Header>
                  <p>{repository.description}</p>
                </div>

                {/* TODO: Differentiate between health check and vulnerabilities*/}
                {/*<div className="bg-red-500 text-center py-2 text-red-100">
              The repository vulnerable dependencies!
            </div>*/}
                <div className="bg-yellow-400 text-center py-2 text-yellow-800">
                  Vulnerable dependencies detected!
                </div>
              </Card>
            </a>
          </NextLink>
        ))}
      </div>
    );
  }

  if (error) {
    return <ErrorDisplay debug={error} />;
  }

  return null;
};
