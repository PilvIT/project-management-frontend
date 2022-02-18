export type IssueLogLevels = "info" | "warn" | "error" | "fatal";

export interface IssueDetail {
  id: string;
  message: string;
  createdAt: string;
  detailLink: string;
  cvssScore: number;
  level: IssueLogLevels;
}
