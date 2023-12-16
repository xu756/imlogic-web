import { Chat } from '@/model/chat';
const chat = (prop: Chat) => {
    return (
        <>
            <div className="chat">
                <div className="chat__image">
                    <img src={prop.chatImage} alt="" />
                </div>
                <div className="chat__details">
                    <div className="chat__details__top">
                        <h3>{prop.chatName}</h3>
                        <p>{prop.chatLastMessageTime}</p>
                    </div>
                    <div className="chat__details__bottom">
                        <p>{prop.chatLastMessage}</p>
                    </div>
                </div>
            </div>
        </>
    );
};
export default chat;
