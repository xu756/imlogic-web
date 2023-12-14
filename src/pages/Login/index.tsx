import { useNavigate } from 'react-router-dom';
import { useTitle } from 'ahooks';

const Login = () => {
    const navigate = useNavigate();
    useTitle('请登录');

    return (
        <>
            <div onClick={
                () => {
                    navigate('/home');
                } 
            }>Login</div>
        </>

    );
};

export default Login;
