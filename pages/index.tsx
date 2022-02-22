import { ErrorBoundary } from "../components/dev/ErrorBoundary";
import Head from "next/head";
import { Header } from "../components/atoms/Header";
import { LatestIssues } from "../components/organisms/LatestIssues";
import { NotImplemented } from "../components/dev/NotImplemented";

export default function IndexPage() {
  return (
    <>
      <Head>
        <title>Dashboard</title>
      </Head>
      <section className="col-start-2 col-span-10 space-y-5">
        <Header size="h2">Latest Issues</Header>
        <ErrorBoundary>
          <LatestIssues />
        </ErrorBoundary>
      </section>
      <section className="col-start-2 col-span-10 space-y-5 my-10">
        <Header size="h2">News</Header>
        <NotImplemented />
      </section>
    </>
  );
}
