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
            <div className=" p-4  w-full flex h-scree ">
                <div className="w-full">
                    <form className="flex items-center">
                        <div className="relative w-full">
                            <div className="flex absolute inset-y-0 left-0 items-center pl-2 pointer-events-none">
                                <svg
                                    aria-hidden="true"
                                    className="w-5 h-5 text-gray-500 dark:text-gray-400"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"></path>
                                </svg>
                            </div>
                            <input
                                type="text"
                                className="block w-full pl-7 p-1.5 bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                placeholder="搜索"
                                required
                            />
                        </div>
                        <button
                            type="submit"
                            className="inline-flex items-center py-1.5 px-3 ml-2 text-sm font-medium text-white bg-blue-700 border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                        >
                            Search
                        </button>
                    </form>
                </div>
            </div>
            <div className="scroll h-full overflow-auto scroll-smooth">
                {chatStore.chatList.map((item, index) => {
                    return <Chat key={index} {...item} />;
                })}
            </div>
        </>
    );
};

export default Area;
