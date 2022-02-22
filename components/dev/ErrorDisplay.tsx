interface Props {
  debug?: object;
  /** Some features could be retried. */
  handleRetry?: () => void;
  name?: string;
}

export const ErrorDisplay = ({ debug, name, handleRetry }: Props) => {
  const className =
    "border border-2 border-dotted border-red-500 bg-red-50 text-red-900 p-3";

  if (process.env.NODE_ENV === "development" && debug) {
    return (
      <div className={className}>
        <div>
          <b>Error Boundary:</b> {name}
        </div>

        <code>
          <pre>{JSON.stringify(debug, undefined, 2)}</pre>
        </code>
      </div>
    );
  }

  return (
    <div className={className}>
      An unknown error happened,{" "}
      {handleRetry ? (
        <button
          onClick={handleRetry}
          className="underline underline-offset-2 text-red-700"
        >
          try again
        </button>
      ) : (
        "try again"
      )}{" "}
      later or contact support!
    </div>
  );
};
