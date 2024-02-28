import Layout from '@/layout/layout';
import { lazy } from 'react';
import { Navigate, createBrowserRouter } from 'react-router-dom';
import DebugPage from '../pages/Debug/index';
const Home = lazy(() => import('@/pages/Home'));
const NotFound = lazy(() => import('@/pages/Error/404'));
const Login = lazy(() => import('@/pages/Login'));

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Navigate to="/home" />,
      },
      {
        path: '/home',
        element: <Home />,
        handle: {
          title: '首页',
        },
      },
    ],
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/*',
    element: <NotFound />,
  },
  {
    path: '/debug',
    element: <DebugPage />,
  },
]);
export default router;
