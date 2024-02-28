import { useMount } from 'ahooks';
import './loading.css';
const Loading = () => {
  useMount(() => {
    console.log('loading');
  });
  return <>加载...</>;
};

export default Loading;
