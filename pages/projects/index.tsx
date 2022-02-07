import { Link } from "../../components/atoms/Link";
import useSWR from "swr";

export default function ProjectPage() {
  const projects = useSWR("/projects");

  console.log(projects);
  return (
    <div>
      <Link href="/projects/create" appearance="button">
        Add Project
      </Link>
    </div>
  );
}
