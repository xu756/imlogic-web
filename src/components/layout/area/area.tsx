import { useMount, useInterval } from 'ahooks';
import Chat from './chat';
import { useAppSelector, useAppDispatch, addChat } from '@/store';

const Area = () => {
    const chatList = useAppSelector(state => state.chatList);
    useMount(() => {
        console.log('area');
    });
    const dispatch = useAppDispatch();
    useInterval(() => {
        dispatch(
            addChat({
                chatId: '22pk',
                chatName: '李四',
                chatImage: 'https://img.yzcdn.cn/vant/cat.jpeg',
                chatLastMessage: '你好',
                chatLastMessageTime: new Date().getTime(),
            })
        );
    }, 1500);
    return (
        <>
            <div className="area h-full overflow-auto scroll-smooth">
                {chatList.map((item, index) => {
                    return <Chat key={index} {...item} />;
                })}
            </div>
        </>
    );
};

export default Area;
