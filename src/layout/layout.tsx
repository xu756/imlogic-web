import { Outlet } from 'react-router-dom';
import Side from '@/components/layout/side/side';
import Area from '@/components/layout/area/area';
import { Resizable } from 're-resizable';
import { useLocalStorageState } from 'ahooks';
const AuthRoute = () => {
    const [width, setWidth] = useLocalStorageState<number>('Area_width', {
        defaultValue: 200,
        deserializer: val => Number(val),
    });
    const resizeProp = {
        size: {
            width: width || 200,
            height: '100%',
        },
        enable: {
            right: true,
        },
        minWidth: 180,
        maxWidth: 500,
        handleStyles: {
            right: {
                width: '5px',
            },
        },
        handleClasses: {
            right: 'hover:bg-layout-handle w-1',
        },
        handleWrapperClass: 'resize',
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        onResize: (e: any) => {
            setWidth(Math.min(Math.max(e.clientX - 64, 180), 500));
        },
    };

    return (
        <div className="flex h-full">
            <div className=" w-16 bg-layout-side py-4 px-2 ">
                <Side />
            </div>
            <Resizable {...resizeProp} className="bg-layout-area">
                <Area />
            </Resizable>
            <div className="flex-1 bg-layout-contain ">
                <Outlet />
            </div>
        </div>
    );
};
export default AuthRoute;
