import { useMount } from 'ahooks';
import Chat from './chat';
import { useAppSelector } from '@/store';
const Area = () => {
    const chatStore = useAppSelector(state => state.chat);
    useMount(() => {
        console.log('area');
    });
    // const dispatch = useAppDispatch();
    // useInterval(() => {
    //     dispatch(
    //         addChat({
    //             chatId: '22pk',
    //             chatName: '李四',
    //             chatImage: 'https://img.yzcdn.cn/vant/cat.jpeg',
    //             chatLastMessage: '你好',
    //             chatLastMessageTime: dayjs().format('HH:mm'),
    //         })
    //     );
    // }, 1500);
    return (
        <>
            <div className="area h-full overflow-auto scroll-smooth">
                {chatStore.chatList.map((item, index) => {
                    return <Chat key={index} {...item} />;
                })}
            </div>
        </>
    );
};

export default Area;
