import { useMount } from 'ahooks';
import Chat from './chat';

const Area = () => {
    useMount(() => {
        console.log('area');
    });
    return (
        <>
            <div className="area h-full overflow-auto scroll-smooth p-x-1 ">
                {new Array(100).fill(1).map((item, index) => {
                    return (
                        <Chat
                            key={index}
                            chatImage="https://avatars.githubusercontent.com/u/84982391?v=4"
                            chatName={`测试${index}`}
                            chatLastMessage="测试11111m1sbjs111111jbsjbsjsbsb"
                            chatLastMessageTime="2021-10-10"
                        />
                    );
                })}
            </div>
        </>
    );
};

export default Area;
