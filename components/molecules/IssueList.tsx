import { IssueDetail, IssueLogLevels } from "../../core/models/IssueDetail";

const logColors: Record<IssueLogLevels, string> = {
  info: "",
  warn: "text-amber-500",
  error: "",
  fatal: "",
};

interface Props {
  className?: string;
  data: IssueDetail[];
}

export const IssueList = ({ className, data }: Props) => {
  return (
    <ul className={`font-mono flex flex-col gap-1 ${className}`}>
      {data.map((issue) => (
        <li key={issue.id} className="">
          <small className="opacity-80">
            {new Date(issue.createdAt).toLocaleString("en-GB")}
          </small>{" "}
          <a
            href={issue.detailLink}
            className={`hover:brightness-110 hover:underline hover:underline-offset-4 ${
              logColors[issue.level]
            }`}
            target="_blank"
            rel="noreferrer"
          >
            <b className="uppercase">{issue.level}</b> {issue.message} CVSS{" "}
            {issue.cvssScore}
          </a>
        </li>
      ))}
    </ul>
  );
};
