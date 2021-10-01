import { Loading } from 'zan-design-mobile';

export default function CustomColor(): JSX.Element {
  return (
    <>
      <Loading color="#1989fa" vertical>加载中...</Loading>
      <Loading color="#1989fa" textColor="#969799" vertical>加载中...</Loading>
    </>
  );
}
