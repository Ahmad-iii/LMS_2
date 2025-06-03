import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const menuItems = [
  { to: '/login', label: 'Login' },
  { to: '/register', label: 'Register' },
  { to: '/student/dashboard', label: 'Student View' },
  { to: '/teacher/dashboard', label: 'Teacher View' },
  { to: '/admin/dashboard', label: 'Admin View' },
];

const UniversalMenu = () => {
  const location = useLocation();
  
  return (
    <nav className="w-full bg-[#F2EFE6] border-b border-[#D8D4C9] py-2 px-2 flex flex-wrap gap-2 justify-center fixed top-0 left-0 right-0 z-[45]">
      {menuItems.map((item) => (
        <Link
          key={item.to}
          to={item.to}
          className={`px-4 py-2 rounded text-sm font-medium transition-colors duration-150 ${
            location.pathname === item.to
              ? 'bg-[#800020] text-white shadow'
              : 'hover:bg-[#800020]/10 text-[#800020]'
          }`}
        >
          {item.label}
        </Link>
      ))}
    </nav>
  );
};

export default UniversalMenu;
