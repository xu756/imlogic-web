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
            right: 'hover:bg-red-400 w-1',
        },
        handleWrapperClass: 'resize',
        className: 'bg-gray-300 ',

        onMouseUp: (e: { clientX: number }) => [
            // 打印宽度
            setWidth(Math.min(Math.max(e.clientX - 64, 180), 500)),
        ],
    };

    return (
        <div className="flex h-full">
            <div className=" w-16 bg-gray-200 py-4 px-2 ">
                <Side />
            </div>
            <Resizable {...resizeProp}>
                <Area />
            </Resizable>
            <div className="flex-1 bg-blue-400 p-4">
                <Outlet />
            </div>
        </div>
    );
};
export default AuthRoute;
