import Head from "next/head";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  className?: string;
  size: 1 | 2 | 3 | 4;
}

export const Header = ({ children, className, size }: Props) => {
  const baseClasses = `font-serif text-b ${className}`;

  switch (size) {
    case 1:
      return (
        <>
          <Head>
            <title>{children}</title>
          </Head>
          <h1 className={`text-4xl ${baseClasses}`}>{children}</h1>
        </>
      );
    case 2:
      return <h2 className={`text-3xl ${baseClasses}`}>{children}</h2>;
    case 3:
      return <h3 className={`text-xl ${baseClasses}`}>{children}</h3>;
    case 4:
      return <h4 className={`text-lg ${baseClasses}`}>{children}</h4>;
    default:
      throw new Error(`Header size ${size} is not supported!`);
  }
};
