import { ChatModel } from '@/model/chat_model';
const chat = (prop: ChatModel) => {
    return (
        <>
            <div className="w-full flex hover:bg-slate-50 p-1 rounded-lg my-1  ">
                <div className="flex-none w-[36px] h-[36px] my-1 mx-[3px]">
                    <img
                        src={prop.chatImage}
                        alt=""
                        className="w-full h-full rounded-[8px]"
                    />
                </div>
                <div className="grow my-1 truncate">
                    <div className="flex grow justify-between">
                        <div className="text-sm font-bold text-gray-800">
                            {prop.chatName}
                        </div>
                        <div className="text-xs text-gray-500">
                            {prop.chatLastMessageTime}
                        </div>
                    </div>
                    <p className="text-xs text-gray-500 truncate">
                        {prop.chatLastMessage}
                    </p>
                </div>
            </div>
        </>
    );
};
export default chat;
