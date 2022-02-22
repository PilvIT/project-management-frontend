import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  name: string;
}

/**
 * Feature that is not supposed to exist in production, e.g. a prototype or development tool!
 */
export const TemporaryFeature = ({ children, name }: Props) => {
  if (process.env.NODE_ENV === "production") {
    console.warn(`A temporary feature ${name} built in production!`);
    return null;
  }

  return (
    <div className="border-2 border-dotted border-purple-400 p-2">
      <div className="text-purple-400 text-sm mb-5">
        <b>Temporary Feature</b>: {name}
      </div>
      {children}
    </div>
  );
};
