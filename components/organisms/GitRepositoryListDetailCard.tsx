import { Card } from "../atoms/Card";
import { GitRepositoryDetail } from "../../core/models/GitRepository";
import { GitRepositoryLink } from "../molecules/GitRepositoryLink";
import { Header } from "../atoms/Header";
import { IssueList } from "../molecules/IssueList";
import { TechnologyList } from "../molecules/TechnologyList";
import { TemporaryFeature } from "../dev/TemporaryFeature";
import { jsonFetch } from "../../core/jsonFetch";

interface Props {
  data: GitRepositoryDetail;
  onMutated: () => void;
}

export const GitRepositoryListDetailCard = ({ data, onMutated }: Props) => {
  const handleDelete = () => {
    jsonFetch("DELETE", `/git-repositories/${data.id}`).then(onMutated);
  };

  const onRefresh = () => {
    jsonFetch("GET", `/git-repositories/${data.id}/refresh`).then(onMutated);
  };

  return (
    <Card styling={{ padded: true }}>
      <header className="flex justify-between">
        <Header className="capitalize mb-1" size={3}>
          {data.name.replaceAll("-", " ")}
        </Header>
        <TechnologyList data={data.technologies} />
      </header>
      <GitRepositoryLink url={data.url} />
      <p className="my-5">
        {data.description || "Description is not defined."}
      </p>
      <IssueList className="my-5" data={data.issues} />
      <TemporaryFeature name="Repository Edit">
        <button onClick={handleDelete} className="bg-gray-300 px-2 py-1">
          Delete
        </button>
        <button onClick={onRefresh} className="bg-fuchsia-300 px-2 py-1">
          Update
        </button>
      </TemporaryFeature>
    </Card>
  );
};
