import { ChatWith } from '@/components/chat';
import { useAppSelector } from '@/store';
import { WebSocketService } from '@/utils';
import { useMount } from 'ahooks';
const Home = () => {
  const activeChat = useAppSelector((state) => state.chat.activeChat);
  const ws = new WebSocketService('ws://192.168.0.195:7082/connect');
  useMount(() => {
    console.log('activeChat', activeChat);
    console.log('ws', ws);
    ws.connect();
  });
  return (
    <>
      <ChatWith chatId={activeChat} />
    </>
  );
};

export default Home;
