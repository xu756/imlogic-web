import { Outlet } from 'react-router-dom';
import { useAppSelector } from '@/store';
import styles from './index.module.less';
import { Panel, PanelGroup, PanelResizeHandle } from 'react-resizable-panels';

export default () => {
  const system = useAppSelector((state) => state.system);

  return (
    <PanelGroup
      autoSaveId="dashboard"
      direction="horizontal"
      className={styles.layout}
    >
      <Panel
        defaultSize={20}
        minSize={20}
        maxSize={40}
        className={styles.chatlist}
      >
        chatlist
      </Panel>
      <PanelResizeHandle className={styles.resizable} />
      <Panel className={styles.content}>chat</Panel>
    </PanelGroup>
  );
};
