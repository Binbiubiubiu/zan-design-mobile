import { Loading } from 'zan-design-mobile';

export default function CustomSize(): JSX.Element {
  return (
    <>
      <Loading size={24}/>
      <Loading type="spinner" size={24} />
    </>
  );
}
