import React, { useState, useEffect } from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import Header from './Header';
import Sidebar from './Sidebar';
import RightSidebar from './RightSidebar';
import { roleThemes } from '../../constants/themes';

const MainLayout = () => {
  const [showMobileSidebar, setShowMobileSidebar] = useState(false);
  const [showMobileRightSidebar, setShowMobileRightSidebar] = useState(false);
  const [showRoleSelector, setShowRoleSelector] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const userRole = location.pathname.split('/')[1] || 'student';
  const theme = roleThemes[userRole];

  // Handle back/forward navigation
  const handleNavigation = (direction) => {
    if (direction === 'back') {
      navigate(-1);
    } else {
      navigate(1);
    }
  };

  // Close mobile panels when route changes
  useEffect(() => {
    setShowMobileSidebar(false);
    setShowMobileRightSidebar(false);
    setShowRoleSelector(false);
  }, [location.pathname]);

  const handleRoleChange = (newRole) => {
    window.location.href = `/${newRole}/dashboard`;
    setShowRoleSelector(false);
  };

  return (
    <div className="flex flex-col min-h-screen bg-[#F7F5F0]">
      <Header 
        theme={theme}
        onMenuClick={() => setShowMobileSidebar(true)}
        onNotificationsClick={() => setShowMobileRightSidebar(true)}
      />
      
      <div className="flex flex-1 pt-16">
        {/* Overlays */}
        {(showMobileSidebar || showMobileRightSidebar || showRoleSelector) && (
          <div 
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-30 md:hidden"
            onClick={() => {
              setShowMobileSidebar(false);
              setShowMobileRightSidebar(false);
              setShowRoleSelector(false);
            }}
          />
        )}

        {/* Navigation Arrows (Mobile) */}
        <div className="fixed left-0 right-0 top-16 flex justify-between px-4 py-2 bg-white border-b border-gray-200 md:hidden z-20">
          <button
            onClick={() => handleNavigation('back')}
            className="p-2 rounded-full hover:bg-gray-100"
            aria-label="Go back"
          >
            <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={() => handleNavigation('forward')}
            className="p-2 rounded-full hover:bg-gray-100"
            aria-label="Go forward"
          >
            <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Sidebar */}
        <aside 
          className={`
            fixed md:static inset-y-0 left-0 w-[85%] sm:w-[380px] md:w-64 
            transform ${showMobileSidebar ? 'translate-x-0' : '-translate-x-full'}
            md:translate-x-0 transition-transform duration-200 ease-in-out
            z-40 md:z-0 bg-white md:h-[calc(100vh-4rem)]
            flex flex-col
          `}
        >
          <div className="flex-1 overflow-y-auto overscroll-contain">
            <Sidebar theme={theme} />
          </div>
        </aside>

        {/* Main Content Area */}
        <main className="flex-1 min-w-0 h-[calc(100vh-4rem)] overflow-y-auto mt-12 md:mt-0 pb-16 md:pb-0">
          <div className="container mx-auto p-4 md:p-6 max-w-7xl">
            <div className="bg-white rounded-lg shadow-sm p-4 md:p-6">
              <Outlet />
            </div>
          </div>
        </main>

        {/* RightSidebar */}
        <aside 
          className={`
            fixed md:static inset-y-0 right-0 w-[85%] sm:w-[380px] md:w-80
            transform ${showMobileRightSidebar ? 'translate-x-0' : 'translate-x-full'}
            md:translate-x-0 transition-transform duration-200 ease-in-out
            z-40 md:z-0 bg-white md:h-[calc(100vh-4rem)]
            flex flex-col
          `}
        >
          <div className="flex-1 overflow-y-auto overscroll-contain">
            <RightSidebar theme={theme} />
          </div>
        </aside>

        {/* Mobile Role Selector */}
        <aside 
          className={`
            fixed inset-y-0 right-0 w-[85%] sm:w-[380px] bg-white
            transform ${showRoleSelector ? 'translate-x-0' : 'translate-x-full'}
            transition-transform duration-200 ease-in-out z-40 md:hidden
            flex flex-col
          `}
        >
          <div className="sticky top-0 p-4 border-b bg-white">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold text-[#1A1A1A]">Switch Role</h3>
              <button
                onClick={() => setShowRoleSelector(false)}
                className="p-2 rounded-full hover:bg-gray-100"
                aria-label="Close role selector"
              >
                <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>
          <div className="flex-1 overflow-y-auto overscroll-contain p-4 space-y-2">
            {['admin', 'teacher', 'student'].map((role) => (
              <button
                key={role}
                onClick={() => handleRoleChange(role)}
                className={`
                  w-full px-4 py-3 rounded-lg text-left capitalize
                  ${userRole === role ? 'bg-[#800020] text-white' : 'hover:bg-gray-100'}
                `}
              >
                <div className="flex items-center space-x-3">
                  <div className={`
                    w-10 h-10 rounded-full flex items-center justify-center
                    ${userRole === role ? 'bg-white/20' : 'bg-gray-100'}
                  `}>
                    <span className={userRole === role ? 'text-white' : 'text-gray-600'}>
                      {role[0].toUpperCase()}
                    </span>
                  </div>
                  <div>
                    <p className="font-medium">{role} View</p>
                    <p className={`text-sm ${userRole === role ? 'text-white/80' : 'text-gray-500'}`}>
                      Switch to {role} dashboard
                    </p>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </aside>
      </div>

      {/* Mobile Navigation Bar */}
      <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 flex justify-around p-2 md:hidden z-50">
        <button
          onClick={() => setShowMobileSidebar(true)}
          className={`p-2 rounded-lg ${showMobileSidebar ? 'text-[#800020] bg-red-50' : 'text-gray-600 hover:bg-gray-100'}`}
          aria-label="Open menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
        <button
          onClick={() => setShowRoleSelector(true)}
          className={`p-2 rounded-lg ${showRoleSelector ? 'text-[#800020] bg-red-50' : 'text-gray-600 hover:bg-gray-100'}`}
          aria-label="Switch role"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
          </svg>
        </button>
        <button
          onClick={() => setShowMobileRightSidebar(true)}
          className={`p-2 rounded-lg ${showMobileRightSidebar ? 'text-[#800020] bg-red-50' : 'text-gray-600 hover:bg-gray-100'}`}
          aria-label="Open notifications"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
          </svg>
        </button>
      </nav>
    </div>
  );
};

export default MainLayout;
