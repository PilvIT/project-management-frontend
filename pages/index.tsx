import { ErrorBoundary } from "../components/dev/ErrorBoundary";
import Head from "next/head";
import { Header } from "../components/atoms/Header";
import { LatestIssueListDetailCard } from "../components/organisms/LatestIssueListDetailCard";
import { LayoutSection } from "../components/atoms/LayoutSection";
import { NotImplemented } from "../components/dev/NotImplemented";
import { SwrListRenderer } from "../components/templates/SwrListRenderer";

export default function IndexPage() {
  return (
    <>
      <Head>
        <title>Dashboard</title>
      </Head>
      <LayoutSection>
        <ErrorBoundary>
          <Header size={2}>Latest Issues</Header>
          <SwrListRenderer
            url="/git-repositories?hasIssues=true"
            placeholder={
              <p>The projects you are part of does not have any issues.</p>
            }
            ItemRenderer={LatestIssueListDetailCard}
            className="flex-wrap basis-1/3"
          />
        </ErrorBoundary>
      </LayoutSection>
      <LayoutSection>
        <ErrorBoundary>
          <Header size={2}>News</Header>
        </ErrorBoundary>
        <NotImplemented />
      </LayoutSection>
    </>
  );
}
