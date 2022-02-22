import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  className?: string;
}
const defaultClassName = "col-span-10 col-start-2 space-y-5";

export const LayoutSection = ({ children, className }: Props) => {
  return (
    <section className={className || defaultClassName}>{children}</section>
  );
};
