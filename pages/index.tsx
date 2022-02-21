import { Header } from "../components/atoms/Header";
import { LatestIssues } from "../components/organisms/LatestIssues";
import { NotImplemented } from "../components/dev/NotImplemented";
import { ErrorBoundary } from "../components/dev/ErrorBoundary";

export default function IndexPage() {
  return (
    <>
      <section className="col-start-2 col-span-10 space-y-3">
        <Header size="h2">Latest Issues</Header>
        <ErrorBoundary>
          <LatestIssues />
        </ErrorBoundary>
      </section>
      <section className="col-start-2 col-span-10 my-5 space-y-3">
        <Header size="h2">News</Header>
        <NotImplemented />
      </section>
    </>
  );
}
