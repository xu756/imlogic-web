import { ChatModel } from '@/model/chat_model';
const chat = (prop: ChatModel) => {
    return (
        <>
            <div className="w-full cursor-pointer not-select flex hover:bg-area-hover p-1 rounded-lg ">
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
export default chat;
