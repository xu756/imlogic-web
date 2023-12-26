import { useAppSelector } from '@/store';
import { ChatWith } from '@/components/chat';
import { useMount } from 'ahooks';
const Home = () => {
    const activeChat = useAppSelector(state => state.chat.activeChat);
    useMount(() => {
        console.log('activeChat', activeChat);
    });
    return (
        <>
            <ChatWith chatId={activeChat} />
        </>
    );
};

export default Home;
