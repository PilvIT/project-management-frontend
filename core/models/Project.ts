import { GitRepositoryListDetail } from "./GitRepository";

export interface ProjectDetail {
  id: string;
  group: string;
  name: string;
  repositories: GitRepositoryListDetail[];
}

export interface ProjectCreate {
  group: string;
  name: string;
}

export interface ProjectListDetail {
  id: string;
  displayName: string;
}
