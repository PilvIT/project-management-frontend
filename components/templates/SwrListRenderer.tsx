import { ComponentType, ReactNode } from "react";
import { ErrorDisplay } from "../dev/ErrorDisplay";
import useSWR from "swr";

interface Props {
  className?: string;
  placeholder: ReactNode;
  url: string;
  ItemRenderer: ComponentType<any>;
}

export const SwrListRenderer = <T,>({
  className,
  placeholder,
  url,
  ItemRenderer,
}: Props) => {
  const { data, error, mutate } = useSWR(url);

  if (error) {
    return <ErrorDisplay debug={error} />;
  }

  if (!data && !error) {
    return <p>Loading...</p>;
  }

  if (data.count === 0) {
    return <>{placeholder}</>;
  }

  return (
    <div className={`flex gap-5 ${className}`}>
      {data.data.map((item: any) => (
        <ItemRenderer key={item.id} data={item} onMutated={mutate} />
      ))}
    </div>
  );
};
