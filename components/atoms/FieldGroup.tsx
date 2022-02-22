import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export const FieldGroup = ({ children }: Props) => {
  return <div className="mb-8 flex flex-col gap-5">{children}</div>;
};
