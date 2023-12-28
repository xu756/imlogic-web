import { useAppSelector } from '@/store';
import { ChatWith } from '@/components/chat';
import { useMount } from 'ahooks';
import { WebSocketService } from '@/utils';
const Home = () => {
    const activeChat = useAppSelector(state => state.chat.activeChat);
    const ws = new WebSocketService('ws://localhost:7082/connect');
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
