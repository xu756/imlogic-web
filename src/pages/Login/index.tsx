import { useState } from 'react';
import styles from './index.module.less';
import { useCookieState } from 'ahooks';
import { accountLogin, mobileLogin } from '@/service';
import { Form, Card, Tooltip, useFormApi } from '@douyinfe/semi-ui';
import { IconHelpCircle } from '@douyinfe/semi-icons';

const Login = () => {
  type LoginType = 'mobile' | 'account';
  const [loginType, setLoginType] = useState<LoginType>('account');
  const sessionId = localStorage.getItem('session_id');
  const [jwt, setJwt] = useCookieState('ImlogicToken');
  const formApi = useFormApi();

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
      <Card className={styles.form}>
        <Form<API.LoginReq>
          onSubmit={(values) => console.log(values)}
          onValueChange={(values) => console.log(values)}
        >
          <Form.Input field="username" label="用户名" />
          <Form.Input
            field="password"
            label={{
              text: '密码',
              extra: (
                <Tooltip content="详情">
                  <IconHelpCircle
                    style={{ color: 'var(--semi-color-text-2)' }}
                  />
                </Tooltip>
              ),
            }}
            style={{ width: 176 }}
          />
        </Form>
      </Card>
    </div>
  );
};

export default Login;
