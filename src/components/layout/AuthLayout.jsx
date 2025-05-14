import { Outlet } from 'react-router-dom';

const AuthLayout = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#E8E4D9] to-[#F2EFE6]">
      <Outlet />
    </div>
  );
};

export default AuthLayout;
