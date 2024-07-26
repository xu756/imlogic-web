import axios, { AxiosResponse } from 'axios';
import { Toast } from '@douyinfe/semi-ui';
import { delCookie } from '../utils';

// 创建axios实例
const instance = axios.create({
  baseURL: '/api/',
  timeout: 3000,
  headers: {
    Authorization: `Bearer ${localStorage.getItem('token') || ''}`,
  },
});

// 定义响应结构接口
interface ResponseStructure<T = any> {
  success: boolean;
  data?: T;
  errorCode?: number;
  errorMessage?: string;
  timestamp?: number;
}

// 请求拦截器
instance.interceptors.request.use(
  (config) => {
    // 可以在这里对请求配置进行修改
    return config;
  },
  (error) => {
    // 对请求错误做些什么
    return Promise.reject(error);
  },
);

// 响应拦截器
instance.interceptors.response.use(
  ({ data }) => {
    if (data.success) {
      return data;
    }
    const { errorCode, errorMessage } = data;
    switch (errorCode) {
      case 201:
        Toast.error({
          content: '参数错误，请检查参数',
        });
        break;
      case 202:
        Toast.error({
          content: '系统错误，请联系管理员',
        });
        break;
      case 203:
        Toast.error({
          content: '无权限，请重新登录',
        });
        delCookie('ImlogicToken');
        window.location.href = '/login';
        break;
      case 204:
        Toast.warning({
          content: errorMessage,
        });
        break;
      default:
        Toast.error({
          content: errorMessage || '系统错误，请联系管理员',
        });
        break;
    }
    return Promise.reject(data);
  },
  (error) => {
    Toast.error({
      content: error.message,
    });
    return Promise.reject(error);
  },
);

// 封装POST请求
export const post = <T = any>(url: string, data: any) => {
  return new Promise<T>((resolve, reject) => {
    instance
      .post<ResponseStructure<T>>(url, data)
      .then((res) => {
        resolve(res.data as T);
      })
      .catch((error) => {
        // 处理请求过程中出现的错误
        reject(error);
      });
  });
};
