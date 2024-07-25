import { Outlet } from 'react-router-dom';
const Layout = () => {
  return (
    <div className={'layout'}>
      <div></div>

      <div>
        <Outlet />
      </div>
    </div>
  );
};
export default Layout;
