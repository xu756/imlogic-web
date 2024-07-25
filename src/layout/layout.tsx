import { Outlet } from 'react-router-dom';
import { Nav } from '@douyinfe/semi-ui';
import { IconSemiLogo } from '@douyinfe/semi-icons';
import {
  IconDescriptions,
  IconIntro,
  IconTree,
  IconAvatar,
  IconTreeSelect,
  IconTabs,
} from '@douyinfe/semi-icons-lab';

const Layout = () => {
  return (
    <div className={'layout'}>
      <div>
        <Nav
          bodyStyle={{ height: '100%' }}
          items={[
            { itemKey: 'user', text: '用户管理', icon: <IconAvatar /> },
            { itemKey: 'union', text: '活动管理', icon: <IconDescriptions /> },
            {
              text: '任务平台',
              icon: <IconTree />,
              itemKey: 'job',
              items: ['任务管理', '用户任务查询'],
            },
          ]}
          header={{
            logo: <IconSemiLogo style={{ height: '36px', fontSize: 36 }} />,
            text: 'Semi 运营后台',
          }}
          footer={{
            collapseButton: true,
          }}
          onSelect={(data) => console.log('trigger onSelect: ', data)}
          onClick={(data) => console.log('trigger onClick: ', data)}
        />
      </div>

      <div>
        <Outlet />
      </div>
    </div>
  );
};
export default Layout;
