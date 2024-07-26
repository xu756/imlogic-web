import { useRef, useState } from 'react';
import styles from './index.module.less';
import { useCookieState, useMount } from 'ahooks';
import { accountLogin, mobileLogin } from '@/service';
import { Form, Toast, Avatar, Button } from '@douyinfe/semi-ui';
import { Typography, Space } from '@douyinfe/semi-ui';
import { useAppSelector } from '@/store';
import { useNavigate } from 'react-router-dom';
import { FormApi } from '@douyinfe/semi-ui/lib/es/form';
import { delCookie } from '@/utils/cookies';

const Login = () => {
  type LoginType = 'mobile' | 'account';
  const [loginType, setLoginType] = useState<LoginType>('account');
  const sessionId = localStorage.getItem('session_id');
  const [jwt, setJwt] = useCookieState('ImlogicToken');
  const system = useAppSelector((state) => state.system);
  const formApi = useRef<FormApi<API.LoginReq>>();
  const navigate = useNavigate();
  useMount(() => {
    delCookie('ImlogicToken');
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
        navigate('/dashboard');
        Toast.success({
          content: '登录成功',
        });
      } catch (e) {
        formApi.current?.reset();
      }
    } else {
      try {
        const res = await mobileLogin(values);
        setJwt(() => res.token, {
          path: location.origin,
          expires: (() => new Date(+new Date() + hour * 60 * 60 * 1000))(),
        });
      } catch (e) {
        formApi.current?.reset();
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
            formApi.current = api;
          }}
          initValues={{
            username: 'admin',
            password: '123456',
            autoLogin: true,
          }}
          style={{ width: 300 }}
          onSubmit={handleLogin}
          onSubmitFail={() => {
            Toast.error({
              content: '请检查输入',
            });
          }}
        >
          <Form.Input
            rules={[
              {
                required: true,
                message: '请输入用户名',
              },
            ]}
            showClear
            field="username"
            label="用户名"
          />
          <Form.Input
            type="password"
            showClear
            rules={[
              {
                required: true,
                message: '请输入密码',
              },
              {
                min: 6,
                message: '密码长度不能小于6位',
              },
            ]}
            field="password"
            label={{
              text: '密码',
            }}
          />
          <div className={styles.Checkbox}>
            <Form.Checkbox field="autoLogin" defaultChecked noLabel={true}>
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
