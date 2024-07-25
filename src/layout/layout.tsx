
import { useLocalStorageState } from 'ahooks';
import { Outlet } from 'react-router-dom';
const AuthRoute = () => {
  const [width, setWidth] = useLocalStorageState<number>('Area_width', {
    defaultValue: 200,
    deserializer: (val) => Number(val),
  });


  return (
    <div >
      <div >
       
      </div>
     
      <div >
      
      </div>
    </div>
  );
};
export default AuthRoute;
