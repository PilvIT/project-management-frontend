import { Card } from "../atoms/Card";
import { GitRepositoryListDetail } from "../../core/models/GitRepository";
import { Header } from "../atoms/Header";
import NextLink from "next/link";

interface Props {
  data: GitRepositoryListDetail;
}

export const LatestIssueListDetailCard = ({ data }: Props) => {
  return (
    <NextLink key={data.id} href={`/projects/${data.projectId}`}>
      <a>
        <Card key={data.id} styling={{ hoverable: true }}>
          <div className="m-4">
            <Header className="capitalize mb-2" size={3}>
              {data.name.replaceAll("-", " ")}
            </Header>
            <p>{data.description}</p>
          </div>

          <div className="bg-yellow-400 text-center py-2 text-yellow-800 mt-8">
            Vulnerable dependencies detected!
          </div>
        </Card>
      </a>
    </NextLink>
  );
};
