import { useMount } from 'ahooks';

const Area = () => {
    useMount(() => {
        console.log('area');
    });
    return (
        <div>
            <h1>area</h1>
        </div>
    );
};
    
export default Area;
