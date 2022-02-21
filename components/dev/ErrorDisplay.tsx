interface Props {
  debug?: object;
  /** Some features could be retried. */
  handleRetry?: () => void;
}

export const ErrorDisplay = ({ debug, handleRetry }: Props) => {
  const className =
    "border border-2 border-dotted border-red-500 bg-red-50 text-red-900 p-3";

  if (process.env.NODE_ENV === "development" && debug) {
    return (
      <div className={className}>
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
