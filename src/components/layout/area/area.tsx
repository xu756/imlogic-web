import { useMount } from 'ahooks';

const Area = () => {
    useMount(() => {
        console.log('area');
    });
    return (
        <>
            <div className="area h-full overflow-auto scroll-smooth	"></div>
        </>
    );
};

export default Area;
