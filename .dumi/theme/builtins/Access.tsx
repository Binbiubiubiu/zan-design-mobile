export interface AccessProps {
  accessible: boolean;
  fallback?: React.ReactNode;
  children?: React.ReactNode;
}

export default function Access(props: AccessProps): JSX.Element {
  const { accessible, fallback, children } = props;
  return <>{accessible ? children : fallback}</>;
}
