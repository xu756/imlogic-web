import { useState } from 'react';
import styles from './index.module.less';
import { useCookieState, useMount } from 'ahooks';
import { accountLogin, mobileLogin } from '@/service';
import {
  Form,
  Card,
  Avatar,
  Tooltip,
  useFormApi,
  Button,
} from '@douyinfe/semi-ui';
import { Typography, Space } from '@douyinfe/semi-ui';
import { useAppSelector } from '@/store';

const Login = () => {
  type LoginType = 'mobile' | 'account';
  const [loginType, setLoginType] = useState<LoginType>('account');
  const sessionId = localStorage.getItem('session_id');
  const [jwt, setJwt] = useCookieState('ImlogicToken');
  const system = useAppSelector((state) => state.system);
  let formApi = useFormApi<API.LoginReq>();
  useMount(() => {
    console.log(system);
  });
  const handleLogin = async (values: API.LoginReq) => {
    const hour = values.autoLogin ? 3 * 24 : 3;
    values.session_id = String(sessionId);
    if (loginType === 'account') {
      try {
        const res = await accountLogin(values);
        setJwt(() => res.token, {
          path: location.origin,
          expires: (() => new Date(+new Date() + hour * 60 * 60 * 1000))(),
        });
        // updateUserAccess();
      } catch (e) {
        formApi.reset();
      }
    } else {
      try {
        const res = await mobileLogin(values);
        setJwt(() => res.token, {
          path: location.origin,
          expires: (() => new Date(+new Date() + hour * 60 * 60 * 1000))(),
        });
      } catch (e) {
        formApi.reset();
      }
    }
  };
  return (
    <div className={styles.main}>
      <div className={styles.form}>
        <Space align="center">
          <Avatar src={system.logo} />
          <Typography.Title heading={2}>{system.name}</Typography.Title>
        </Space>
        <Typography.Title heading={4}>{system.description}</Typography.Title>
        <Form<API.LoginReq>
          getFormApi={(api) => {
            formApi = api;
          }}
          style={{ width: 300 }}
          onSubmit={handleLogin}
          onValueChange={(values) => console.log(values)}
        >
          <Form.Input field="username" label="用户名" />
          <Form.Input
            field="password"
            label={{
              text: '密码',
            }}
          />
          <div className={styles.Checkbox}>
            <Form.Checkbox field="autoLogin" noLabel={true}>
              自动登录
            </Form.Checkbox>
            <Button theme="borderless" type="primary">
              忘记密码
            </Button>
          </div>

          <Button block htmlType="submit">
            提交
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default Login;
