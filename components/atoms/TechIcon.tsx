import {
  SiDotnet,
  SiGatsby,
  SiJavascript,
  SiNextdotjs,
  SiPostgresql,
  SiReact,
  SiTypescript,
} from "react-icons/si";

interface Props {
  name: string;
}

/**
 * The icons for technologies that are allowed.
 * If it grows too large, a CDN with dynamic names might be faster and less intensive.
 */
export const TechIcon = ({ name }: Props) => {
  switch (name) {
    case "dotnet":
      return <SiDotnet />;
    case "react":
      return <SiReact />;
    case "js":
      return <SiJavascript />;
    case "ts":
      return <SiTypescript />;
    case "nextjs":
      return <SiNextdotjs />;
    case "gatsby":
      return <SiGatsby />;
    case "postgresql":
      return <SiPostgresql />;
    default:
      console.error(`Icon ${name} does not exist!`);
      return null;
  }
};
