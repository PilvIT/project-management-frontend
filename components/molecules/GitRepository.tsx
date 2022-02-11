import { TechIcon } from "../atoms/TechIcon";
import { TechnologyDetail } from "../../core/models/Technology";
import { SiGithub } from "react-icons/si";
import { GitRepositoryDetail } from "../../core/models/GitRepository";

interface Props {
  data: GitRepositoryDetail;
}

export const GitRepository = ({ data }: Props) => {
  return (
    <section className="p-4 border border-gray-400 rounded-md">
      <header className="flex justify-between">
        <h3 className="font-bold capitalize text-lg">
          {data.name.replaceAll("-", " ")}
        </h3>
        <div>
          <TechnologyList data={data.technologies} />
        </div>
      </header>
      <div className="flex items-center space-x-2 text-sm text-gray-500">
        <SiGithub />
        <a href={data.url} target="_blank" rel="noreferrer">
          {data.url}
        </a>
      </div>
      <p>{data.description || "Undefined"}</p>
    </section>
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
