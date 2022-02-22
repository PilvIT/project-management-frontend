import { ButtonGroup } from "../../components/atoms/ButtonGroup";
import { ErrorBoundary } from "../../components/dev/ErrorBoundary";
import { Header } from "../../components/atoms/Header";
import { LayoutSection } from "../../components/atoms/LayoutSection";
import { Link } from "../../components/atoms/Link";
import NextHead from "next/head";
import { ProjectListDetailCard } from "../../components/organisms/ProjectListDetailCard";
import { SwrListRenderer } from "../../components/templates/SwrListRenderer";

export default function ProjectListPage() {
  return (
    <LayoutSection>
      <NextHead>
        <title>Projects</title>
      </NextHead>

      <header className="flex items-center justify-between">
        <Header size={1}>Projects</Header>
        <ButtonGroup>
          <Link
            to="/projects/join"
            appearance="button"
            styling={{ color: "secondary" }}
          >
            Join Project
          </Link>
          <Link
            to="/projects/create"
            appearance="button"
            styling={{ color: "primary" }}
          >
            Add Project
          </Link>
        </ButtonGroup>
      </header>

      <ErrorBoundary name="ProjectListView">
        <SwrListRenderer
          url="/projects"
          placeholder={<p>You have not joined or added any project.</p>}
          ItemRenderer={ProjectListDetailCard}
          className="flex-col"
        />
      </ErrorBoundary>
    </LayoutSection>
  );
}
