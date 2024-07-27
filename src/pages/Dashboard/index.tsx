import { useAppSelector } from '@/store';
import styles from './index.module.less';
import { Panel, PanelGroup, PanelResizeHandle } from 'react-resizable-panels';
import Chat from '@/components/chat';
import { useMount } from 'ahooks';
import { useAppDispatch } from '@/store';
import { WebSocketService } from '@/service';
import { useState } from 'react';

const Dashboard = () => {
  const chat = useAppSelector((state) => state.chat);
  const dispatch = useAppDispatch();
  const [ws, setWs] = useState<WebSocketService | null>(null);
  useMount(() => {
  
  });
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
        side
      </Panel>
      <PanelResizeHandle className={styles.resizable} />
      <Panel className={styles.content}>
        <Chat />
      </Panel>
      <PanelResizeHandle className={styles.resizable} />
      <Panel
        defaultSize={20}
        minSize={20}
        maxSize={40}
        className={styles.chatlist}
      >
        side
      </Panel>
    </PanelGroup>
  );
};

export default Dashboard;
