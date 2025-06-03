import React, { useState, useEffect } from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import Header from './Header';
import Sidebar from './Sidebar';
import RightSidebar from './RightSidebar';
import { roleThemes } from '../../constants/themes';
import UniversalMenu from '../common/UniversalMenu';

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

  // Lock background scroll when overlays are open
  useEffect(() => {
    if (showMobileSidebar || showMobileRightSidebar || showRoleSelector) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }
    return () => document.body.classList.remove('overflow-hidden');
  }, [showMobileSidebar, showMobileRightSidebar, showRoleSelector]);

  return (
    <div className="flex flex-col min-h-screen bg-[#F7F5F0]">
      {/* Universal Menu - Fixed at the top */}
      <UniversalMenu />
      
      {/* App Header - Below Universal Menu */}
      <div className="mt-[40px]"> {/* Adjust this value based on UniversalMenu height */}
        <Header 
          theme={theme}
          onMenuClick={() => setShowMobileSidebar(true)}
          onNotificationsClick={() => setShowMobileRightSidebar(true)}
        />
      </div>

      <div className="flex flex-1 pt-16">
        {/* Overlays */}
        {(showMobileSidebar || showMobileRightSidebar || showRoleSelector) && (
          <div 
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[60] md:hidden"
            onClick={() => {
              setShowMobileSidebar(false);
              setShowMobileRightSidebar(false);
              setShowRoleSelector(false);
            }}
          />
        )}

        {/* Navigation Arrows (Mobile) */}
        <div className="fixed left-0 right-0 top-[88px] flex justify-between px-4 py-2 bg-white border-b border-gray-200 md:hidden z-[50]">
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
        <div className={`
          fixed md:static inset-y-0 left-0 w-[85%] sm:w-[380px] md:w-64 
          transform ${showMobileSidebar ? 'translate-x-0' : '-translate-x-full'}
          md:translate-x-0 transition-transform duration-200 ease-in-out
          z-[60] md:z-0 h-[calc(100vh-4rem)] mt-[88px] md:mt-0 pb-16 md:pb-0
        `}>
          <div className="h-full overflow-y-auto bg-[#F2EFE6] overscroll-contain">
            <Sidebar theme={theme} />
          </div>
        </div>

        {/* Main Content Area */}
        <main className="flex-1 w-full md:w-0 min-w-0 h-[calc(100vh-4rem)] overflow-y-auto mt-12 md:mt-0 pb-16 md:pb-0">
          <div className="container mx-auto p-4 md:p-6 max-w-7xl">
            <div className="bg-white rounded-lg shadow-sm p-4 md:p-6">
              <Outlet />
            </div>
          </div>
        </main>

        {/* RightSidebar */}
        <div className={`
          fixed md:static inset-y-0 right-0 w-[85%] sm:w-[380px] md:w-80
          transform ${showMobileRightSidebar ? 'translate-x-0' : 'translate-x-full'}
          md:translate-x-0 transition-transform duration-200 ease-in-out
          z-[60] md:z-0 h-[calc(100vh-4rem)] mt-[88px] md:mt-0 pb-16 md:pb-0
        `}>
          <div className="h-full overflow-y-auto bg-[#F2EFE6] overscroll-contain">
            <RightSidebar theme={theme} />
          </div>
        </div>

        {/* Mobile Role Selector */}
        <div className={`
          fixed inset-y-0 right-0 w-[85%] sm:w-[380px] bg-white
          transform ${showRoleSelector ? 'translate-x-0' : 'translate-x-full'}
          transition-transform duration-200 ease-in-out z-40 md:hidden
          h-[calc(100vh-4rem)] mt-16 pb-16 overflow-y-auto overscroll-contain
        `}>
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
        </div>
      </div>

      {/* Mobile Navigation Bar */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 flex justify-around p-2 md:hidden z-[60]">
        {/* Menu */}
        <button
          onClick={() => setShowMobileSidebar(true)}
          className={`p-2 rounded-lg ${showMobileSidebar ? 'text-[#800020] bg-red-50' : 'text-gray-600 hover:bg-gray-100'}`}
          aria-label="Menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>

        {/* Profile/Role Selector */}
        <button
          onClick={() => setShowRoleSelector(true)}
          className={`p-2 rounded-lg ${showRoleSelector ? 'text-[#800020] bg-red-50' : 'text-gray-600 hover:bg-gray-100'}`}
          aria-label="Switch Role"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
          </svg>
        </button>

        {/* Messages */}
        <button
          onClick={() => setShowMobileRightSidebar(true)}
          className={`p-2 rounded-lg ${showMobileRightSidebar ? 'text-[#800020] bg-red-50' : 'text-gray-600 hover:bg-gray-100'}`}
          aria-label="Messages"
        >
          <div className="relative">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 text-white text-xs rounded-full flex items-center justify-center">
              3
            </span>
          </div>
        </button>
      </div>
    </div>
  );
};

export default MainLayout;
