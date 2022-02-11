import { GitRepositoryListDetail } from "./GitRepository";

export interface ProjectDetail {
  id: string;
  group: string;
  name: string;
  repositories: GitRepositoryListDetail[];
}
