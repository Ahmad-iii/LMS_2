import { Outlet } from 'react-router-dom';
import UniversalMenu from '../common/UniversalMenu';

const AuthLayout = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#E8E4D9] to-[#F2EFE6]">
      <UniversalMenu />
      <div className="pt-[40px]"> {/* Add padding to account for fixed UniversalMenu */}
        <Outlet />
      </div>
    </div>
  );
};

export default AuthLayout;
