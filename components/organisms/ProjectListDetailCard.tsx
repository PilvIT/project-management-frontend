import { Card } from "../atoms/Card";
import { Header } from "../atoms/Header";
import NextLink from "next/link";
import { ProjectListDetail } from "../../core/models/Project";

interface Props {
  data: ProjectListDetail;
}

export const ProjectListDetailCard = ({ data }: Props) => (
  <NextLink key={data.id} href={`/projects/${data.id}`} prefetch={false}>
    <a>
      <Card styling={{ hoverable: true, padded: true }}>
        <div>
          <Header size={3}>{data.displayName}</Header>
        </div>
      </Card>
    </a>
  </NextLink>
);
