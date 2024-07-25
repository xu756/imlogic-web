import router from '@/router';
import { useMount } from 'ahooks';
import dayjs from 'dayjs';
import 'dayjs/locale/zh-cn'; // 导入本地化语言
import relativeTime from 'dayjs/plugin/relativeTime'; // 导入插件
import { Suspense } from 'react';
import { Provider } from 'react-redux';
import { RouterProvider } from 'react-router-dom';
import './App.css';
import Loading from './layout/loading';
import store from './store/store';
dayjs.extend(relativeTime); // 使用插件
dayjs.locale('zh-cn'); // 使用本地化语言

const App = () => {
  useMount(() => {
    console.log('App mounted');
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
