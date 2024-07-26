import { Layout } from '@douyinfe/semi-ui';
import ChatList from './ChatList';
import ChatHeader from './ChatHeader';
import ChatFooter from './ChatFooter';
import { useAppSelector } from '@/store';
const { Header, Footer, Content } = Layout;
const Chat = () => {
  const system = useAppSelector((state) => state.system);

  return (
    <Layout className="h100">
      <Header>
        <ChatHeader username={system.name} avatar={system.logo} />
        <div className="chat-line" />
      </Header>
      <Content>
        <ChatList />
      </Content>
      <Footer>
        <ChatFooter />
      </Footer>
    </Layout>
  );
};

export default Chat;
