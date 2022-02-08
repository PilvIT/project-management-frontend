export interface GitRepositoryModel {
  id: string;
  name: string;
  technologies: Array<{ id: string; name: string; icon: string }>;
}
