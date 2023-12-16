import { Outlet } from 'react-router-dom';
import Side from '@/components/layout/side/side';
import Area from '@/components/layout/area/area';

const AuthRoute = () => {
    return (
        <div className="flex h-full">
            <div className="w-16 bg-gray-200 py-4 px-2 ">
                <Side />
            </div>
            <div className="w-52 bg-gray-300 ">
                <Area />
            </div>
            <div className="flex-1 bg-gray-400 p-4">
                <Outlet />
            </div>
        </div>
    );
};
export default AuthRoute;
