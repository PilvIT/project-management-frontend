import { TechnologyDetail } from "./Technology";
import { IssueDetail } from "./IssueDetail";

export interface GitRepositoryCreate {
  url: `https://${string}`;
}

export interface GitRepositoryListDetail {
  id: string;
  name: string;
  description: string;
  technologies: TechnologyDetail[];
  issues: IssueDetail[];
  url: `https://${string}`;
}

export interface GitRepositoryDetail extends GitRepositoryListDetail {}
