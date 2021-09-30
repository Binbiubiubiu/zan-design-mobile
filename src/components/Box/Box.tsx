export type BoxProps = React.HTMLAttributes<HTMLDivElement>;

export default function Box(props: BoxProps): JSX.Element {
  return <div {...props} />;
}
