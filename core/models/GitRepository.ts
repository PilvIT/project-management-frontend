import { IssueDetail } from "./Issue";
import { TechnologyDetail } from "./Technology";

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
  projectId: string;
}

export interface GitRepositoryDetail extends GitRepositoryListDetail {}
