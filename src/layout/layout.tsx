import { Outlet,useMatches } from 'react-router-dom';
import { useTitle } from 'ahooks';
import Side from '@/components/layout/side/side';
import Area from '@/components/layout/area/area';

const AuthRoute =()=>{
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const matches:any = useMatches();
    useTitle(matches[1].handle?.title||import.meta.env.VITE_APP_TITLE||'web');
    return(
        <div className="flex h-full">
            <div className="w-16 bg-gray-200 py-4 px-2 ">
                <Side/>
            </div>
            <div className="w-52 bg-gray-300 p-4">
                <Area/>
            </div>
            <div className="flex-1 bg-gray-400 p-4">
                <Outlet/>
            </div>
        </div>
    );
};
export default AuthRoute;