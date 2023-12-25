import { ChatModel } from '@/model/chat_model';
import { useAppDispatch, setActiveChat } from '@/store';
import { useAppSelector } from '@/store';

const Chat = (prop: ChatModel) => {
    const chatStore = useAppSelector(state => state.chat);
    const dispatch = useAppDispatch();
    const clickChat = () => {
        dispatch(setActiveChat(prop.chatId));
    };
    return (
        <>
            <div
                className={
                    'w-full cursor-pointer not-select flex p-1 rounded-lg' +
                    ` ${
                        chatStore.activeChat === prop.chatId
                            ? 'bg-area-chatActive'
                            : ''
                    }`
                }
                onClick={clickChat}
            >
                <div className="flex-none w-[36px] h-[36px] my-1 mx-[3px]">
                    <img
                        src={prop.chatImage}
                        alt=""
                        className="w-full h-full rounded-[8px]"
                    />
                </div>
                <div className="grow my-1 truncate">
                    <div className="flex grow justify-between">
                        <div className="text-sm font-bold text-area-chatName">
                            {prop.chatName}
                        </div>
                        <div className="text-xs text-area-chatLastMessageTime">
                            {prop.chatLastMessageTime}
                        </div>
                    </div>
                    <p className="text-xs text-area-chatLastMessage truncate">
                        {prop.chatLastMessage}
                    </p>
                </div>
            </div>
        </>
    );
};
export default Chat;
