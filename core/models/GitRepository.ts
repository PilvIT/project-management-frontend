import { TechnologyDetail } from "./Technology";

export interface GitRepositoryCreate {
  url: `https://${string}`;
}

export interface GitRepositoryListDetail {
  id: string;
  name: string;
  description: string;
  technologies: TechnologyDetail[];
  url: `https://${string}`;
}

export interface GitRepositoryDetail extends GitRepositoryListDetail {}
