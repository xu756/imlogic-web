import { useMount } from 'ahooks';
import Chat from './chat';

const Area = () => {
    useMount(() => {
        console.log('area');
    });
    return (
        <>
            <div className="area h-full overflow-auto scroll-smooth p-2 ">
                <Chat
                    chatImage="https://avatars.githubusercontent.com/u/84982391?v=4"
                    chatName="测试"
                    chatLastMessage="测试11111m1sbjs111111jbsjbsjsbsb"
                    chatLastMessageTime="2021-10-10"
                />
            </div>
        </>
    );
};

export default Area;
