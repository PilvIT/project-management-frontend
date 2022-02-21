import { ErrorDisplay } from "../dev/ErrorDisplay";
import useSWR from "swr";

export const LatestIssues = () => {
  const { data, error } = useSWR("/issues?latest=true");

  if (data) {
    return <div>{JSON.stringify(data)}</div>;
  }

  if (error) {
    return <ErrorDisplay debug={error} />;
  }

  return null;
};
