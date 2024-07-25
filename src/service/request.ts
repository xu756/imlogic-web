import axios, { AxiosResponse } from 'axios';

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
  (response: AxiosResponse) => {
    // 对响应数据做点什么
    return response.data;
  },
  (error) => {
    // 对响应错误做点什么
    return Promise.reject(error);
  },
);

// 封装POST请求
export const post = <T = any>(url: string, data: any) => {
  return new Promise<T>((resolve, reject) => {
    instance
      .post<ResponseStructure>(url, data)
      .then((res) => {
        resolve(res.data as T);
      })
      .catch((error) => {
        // 处理请求过程中出现的错误
        reject(error);
      });
  });
};
