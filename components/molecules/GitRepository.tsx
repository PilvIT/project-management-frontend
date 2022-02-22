import { TechIcon } from "../atoms/TechIcon";
import { TechnologyDetail } from "../../core/models/Technology";
import { SiGithub } from "react-icons/si";
import { GitRepositoryDetail } from "../../core/models/GitRepository";
import { jsonFetch } from "../../core/jsonFetch";
import { IssueList } from "./IssueList";
import { Card } from "../atoms/Card";
import { Header } from "../atoms/Header";

interface Props {
  data: GitRepositoryDetail;
  onDeleted: () => void;
}

export const GitRepository = ({ data, onDeleted }: Props) => {
  const handleDelete = () => {
    jsonFetch("DELETE", `/git-repositories/${data.id}`).then((data) => {
      onDeleted();
    });
  };

  const onRefresh = () => {
    jsonFetch("GET", `/git-repositories/${data.id}/refresh`).then((data) =>
      console.log(data)
    );
  };

  return (
    <Card className="p-4">
      <header className="flex justify-between">
        <Header className="capitalize" size="h3">
          {data.name.replaceAll("-", " ")}
        </Header>
        <div className="">
          <TechnologyList data={data.technologies} />
        </div>
      </header>
      <div className="flex items-center space-x-2 text-sm text-gray-500">
        <SiGithub />
        <a href={data.url} target="_blank" rel="noreferrer">
          {data.url}
        </a>
      </div>
      <p className="my-2">
        {data.description || "Description is not defined."}
      </p>

      <IssueList className="my-5" data={data.issues} />

      <div className="flex space-x-2">
        <button onClick={handleDelete} className="bg-gray-300 px-2 py-1">
          Delete
        </button>
        <button onClick={onRefresh} className="bg-fuchsia-300 px-2 py-1">
          Update
        </button>
      </div>
    </Card>
  );
};

interface TechnologyProps {
  data: TechnologyDetail[];
}
const TechnologyList = ({ data }: TechnologyProps) => {
  if (data.length === 0) {
    return <small>No technologies added!</small>;
  }

  return (
    <>
      {data.map((tech) => (
        <TechIcon key={tech.id} name={tech.icon} />
      ))}
    </>
  );
};
