import { Toast } from '@douyinfe/semi-ui';
import { useMount } from 'ahooks';
import dayjs from 'dayjs';
// import 'dayjs/locale/zh-cn'; // 导入本地化语言
import router from './router';
// import relativeTime from 'dayjs/plugin/relativeTime'; // 导入插件
import { Suspense, useState } from 'react';
import { RouterProvider } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';

import './App.css';
import Loading from './layout/loading';
import { getCookie } from './utils';
// dayjs.extend(relativeTime); // 使用插件
dayjs.locale('zh-cn'); // 使用本地化语言
import { WebSocketService } from '@/service';

import { useAppDispatch, setSystem } from '@/store';

const App = () => {
  const dispatch = useAppDispatch();
  const [ws, setWs] = useState<WebSocketService | null>(null);
  useMount(() => {
    const newWs = new WebSocketService('wss://dev.imlogic.cn/api/im/connect');
    newWs.connect();
    setWs(newWs);
    dispatch(
      setSystem({
        name: '智云工坊',
        version: '1.0.0',
        description: '让科技生活更简单',
        logo: 'https://cos.imlogic.cn/appserver/images/logo.svg',
      }),
    );
    const token = getCookie('ImlogicToken');
    if (
      location.pathname === '/login' ||
      localStorage.getItem('session_id') === null
    ) {
      const sessionId = uuidv4();
      localStorage.setItem('session_id', sessionId);
    }
    if (location.pathname !== '/login' && !token) {
      window.location.href = '/login';
      Toast.error({
        content: '登录超时',
      });
      console.log(document.cookie);
      return {};
    }
  });
  return (
    <Suspense fallback={<Loading />}>
      <RouterProvider router={router} />
    </Suspense>
  );
};

export default App;
