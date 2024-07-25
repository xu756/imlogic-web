import { Toast } from '@douyinfe/semi-ui';
import { useMount } from 'ahooks';
import dayjs from 'dayjs';
// import 'dayjs/locale/zh-cn'; // 导入本地化语言
import router from './router';
// import relativeTime from 'dayjs/plugin/relativeTime'; // 导入插件
import { Suspense } from 'react';
import { Provider } from 'react-redux';
import { useLocation, useNavigate } from 'react-router';
import { RouterProvider } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';

import './App.css';
import Loading from './layout/loading';
import store from './store/store';
import { getCookie } from './utils';
// dayjs.extend(relativeTime); // 使用插件
dayjs.locale('zh-cn'); // 使用本地化语言

const App = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useMount(() => {
    const token = getCookie('ImlogicToken');
    if (
      location.pathname === '/login' ||
      localStorage.getItem('session_id') === null
    ) {
      const sessionId = uuidv4();
      localStorage.setItem('session_id', sessionId);
    }
    if (location.pathname !== '/login' && !token) {
      navigate('/login');
      Toast.error({
        content: '登录超时',
      });
      console.log(document.cookie);
      return {};
    }
  });
  return (
    <Provider store={store}>
      <Suspense fallback={<Loading />}>
        <RouterProvider router={router} />
      </Suspense>
    </Provider>
  );
};

export default App;
