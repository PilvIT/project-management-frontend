import { SiGithub } from "react-icons/si";

interface Props {
  url: string;
}

export const GitRepositoryLink = ({ url }: Props) => {
  return (
    <div className="flex flex-wrap items-center space-x-2 text-sm text-gray-400 basis-full">
      <SiGithub />
      <a href={url} target="_blank" rel="noreferrer">
        {url}
      </a>
    </div>
  );
};
