import Access from './Access';
import './Section.less';

export interface SectionProps {
  title?: string;
  desc?: string;
  children?: React.ReactNode;
}

export default function Section({
  title,
  desc,
  children,
}: SectionProps): JSX.Element {
  return (
    <section className="section">
      <Access accessible={!!title}>
        <div className="section-title">{title}</div>
      </Access>
      <Access accessible={!!desc}>
        <div className="section-desc">{desc}</div>
      </Access>
      {children}
    </section>
  );
}
