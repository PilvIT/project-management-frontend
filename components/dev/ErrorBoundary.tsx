import { Component, ErrorInfo } from "react";
import { ErrorDisplay } from "./ErrorDisplay";

interface Props {}

interface State {
  error: Error | undefined;
}
/**
 * Catch component-level errors, must be implemented the old way.
 *
 * See https://reactjs.org/docs/error-boundaries.html
 */
export class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { error: undefined };
  }

  static getDerivedStateFromError(error: Error) {
    return { error };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error(error);
  }

  render() {
    if (this.state.error) {
      return (
        <ErrorDisplay
          debug={{
            error: this.state.error.name,
            message: this.state.error.message,
          }}
        />
      );
    }

    return this.props.children;
  }
}
