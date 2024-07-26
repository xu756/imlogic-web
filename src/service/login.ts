import { post } from './request.ts';
/**
 * 账号密码登录
 */
export const accountLogin = async (params: API.LoginReq) => {
  return post<API.LoginRes>('/login/account', params);
};

/**
 * 手机验证码登录
 */
export const mobileLogin = async (params: API.LoginReq) => {
  return post<API.LoginRes>('/login/mobile', params);
};

/**
 * 获取验证码
 */
export const getCaptcha = async (params: API.LoginReq) => {
  return post('/login/captcha', params);
};

/**
 * 获取用户权限
 */
export const getUserAccess = async () => {
  return post<API.UserAccess>('/login/access', {});
};

export const getSystemConfig = async () => {
  return post<Store.System>('/system/config', {});
};
