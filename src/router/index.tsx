import Layout from '@/layout/layout';
import { lazy } from 'react';
import { Navigate, createBrowserRouter } from 'react-router-dom';
const Dashboard = lazy(() => import('@/pages/Dashboard'));
const NotFound = lazy(() => import('@/pages/Error/404'));
const Login = lazy(() => import('@/pages/Login'));

const router = createBrowserRouter([
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/*',
    element: <NotFound />,
  },
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Navigate to="/dashboard" />,
      },
      {
        path: '/dashboard',
        element: <Dashboard />,
        handle: {
          title: '首页',
        },
      },
    ],
  },
]);
export default router;
