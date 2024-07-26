import { useAppSelector } from '@/store';
import styles from './index.module.less';

export default () => {
  const system = useAppSelector((state) => state.system);

  return <>chat</>;
};
