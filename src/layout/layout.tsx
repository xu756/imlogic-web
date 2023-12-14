import { Outlet,useMatches } from 'react-router-dom';
import { useTitle } from 'ahooks';
const AuthRoute =()=>{
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const matches:any = useMatches();
    useTitle(matches[1].handle?.title||import.meta.env.VITE_APP_TITLE||'web');
    return(
        <Outlet />
    );
};
export default AuthRoute;