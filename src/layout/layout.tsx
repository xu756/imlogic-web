import { Outlet,useMatches } from 'react-router-dom';
import { useTitle } from 'ahooks';

const AuthRoute =()=>{
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const matches:any = useMatches();
    useTitle(matches[1].handle?.title||import.meta.env.VITE_APP_TITLE||'web');
    return(
        <div className='container w-screen flex overflow-hidden'>
            <div className="h-screen w-1/12">
                side
            </div>
            <div className="h-screen w-3/12">

        
            </div>
            <div className="h-screen w-8/12">
                <Outlet/>
            </div>
        </div>
    );
};
export default AuthRoute;