import { TechIcon } from "../atoms/TechIcon";
import { TechnologyDetail } from "../../core/models/Technology";

interface Props {
  data: TechnologyDetail[];
}

export const TechnologyList = ({ data }: Props) => {
  if (data.length === 0) {
    return <small>No technologies added!</small>;
  }

  return (
    <div className="text-2xl">
      {data.map((tech) => (
        <TechIcon key={tech.id} name={tech.icon} />
      ))}
    </div>
  );
};
