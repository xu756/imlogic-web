import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import { useAppSelector } from '@/store';
import styles from './index.module.less';
import { Avatar, Layout, Nav, Typography } from '@douyinfe/semi-ui';
import { IconHome, IconSemiLogo } from '@douyinfe/semi-icons';
import { IconNotification } from '@douyinfe/semi-icons-lab';
export default () => {
  const system = useAppSelector((state) => state.system);
  const { Sider, Content } = Layout;
  const location = useLocation();
  const navigate = useNavigate();
  const selectedKeys = [location.pathname];
  return (
    <Layout className={styles.layout}>
      <Sider className={styles.side}>
        <Nav
          style={{ height: '100%' }}
          defaultSelectedKeys={selectedKeys}
          items={[
            {
              itemKey: '/dashboard',
              text: '首页',
              icon: <IconHome />,
            },
            {
              itemKey: '/chat',
              text: '聊天',
              icon: <IconNotification />,
            },
          ]}
          header={{
            logo: <Avatar size="small" src={system.logo} />,
            text: system.name,
          }}
          footer={{
            collapseButton: true,
          }}
          onSelect={(data: any) => navigate(data.itemKey, {})}
        />
      </Sider>

      <Content className={styles.content}>
        <Outlet />
      </Content>
    </Layout>
  );
};
