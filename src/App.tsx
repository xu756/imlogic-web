import router from '@/router';
import { useMount } from 'ahooks';
import { Suspense } from 'react';
import { Provider } from 'react-redux';
import { RouterProvider } from 'react-router-dom';
import './App.css';
import Loading from './layout/loading';
import store from './store/store';

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
