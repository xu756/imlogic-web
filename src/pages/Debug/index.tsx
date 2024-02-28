import Chat from '@/components/layout/area/chat';

const DebugPage = () => {
  return (
    <div className="w-52 bg-gray-300">
      <Chat
        chatImage="https://www.baidu.com/img/flexible/logo/pc/result.png"
        chatName="测试"
        chatLastMessage="测试"
        chatLastMessageTime="2021-10-10"
      />
    </div>
  );
};

export default DebugPage;
