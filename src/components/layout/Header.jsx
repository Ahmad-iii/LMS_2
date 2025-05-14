import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { roleThemes } from '../../constants/themes';
import NotificationBell from '../notifications/NotificationBell';

const Header = ({ onMenuClick, onNotificationsClick }) => {
  const location = useLocation();
  const userRole = location.pathname.split('/')[1] || 'student';
  const theme = roleThemes[userRole];

  const roleBasedLinks = {
    admin: [
      { to: '/admin/dashboard', label: 'Dashboard' },
      { to: '/admin/users', label: 'Users' },
      { to: '/admin/courses', label: 'Courses' },
      { to: '/admin/settings', label: 'Settings' }
    ],
    teacher: [
      { to: '/teacher/dashboard', label: 'Dashboard' },
      { to: '/teacher/courses', label: 'My Courses' },
      { to: '/teacher/assignments', label: 'Assignments' },
      { to: '/teacher/grades', label: 'Grade Center' }
    ],
    student: [
      { to: '/student/dashboard', label: 'Dashboard' },
      { to: '/student/courses', label: 'My Courses' },
      { to: '/student/assignments', label: 'Assignments' },
      { to: '/student/grades', label: 'Grades' }
    ]
  };

  return (
    <header 
      className="fixed top-0 left-0 right-0 h-16 z-40 shadow-lg"
      style={{ background: theme.header.bg }}
    >
      <div className="h-full px-4 mx-auto flex items-center justify-between">
        {/* Left Section: Menu Button (Mobile) & Logo */}
        <div className="flex items-center space-x-4">
          <button
            className="md:hidden p-2 rounded-lg text-white hover:bg-white/10"
            onClick={onMenuClick}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
          
          <Link to={`/${userRole}/dashboard`} className="flex items-center space-x-3">
            <img
              src="/AWKUM_logo.png"
              alt="AWKUM Logo"
              className="h-10 w-10"
            />
            <div className="hidden sm:block">
              <h1 className="text-lg font-merriweather font-bold text-white tracking-wide">
                AWKUM LMS
              </h1>
              <p className="text-xs text-white/80">
                Abdul Wali Khan University Mardan
              </p>
            </div>
          </Link>
        </div>

        {/* Center Section: Navigation (Desktop) */}
        <nav className="hidden md:flex items-center space-x-6">
          {roleBasedLinks[userRole].map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`text-white/90 hover:text-white font-medium ${
                location.pathname === link.to ? 'border-b-2 border-white' : ''
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Right Section: User Actions */}
        <div className="flex items-center space-x-4">
          {/* Role Selector (Desktop) */}
          <select
            value={userRole}
            onChange={(e) => window.location.href = `/${e.target.value}/dashboard`}
            className="hidden md:block bg-white/10 text-white border border-white/20 rounded-md px-3 py-1 text-sm"
          >
            <option value="admin">Admin View</option>
            <option value="teacher">Teacher View</option>
            <option value="student">Student View</option>
          </select>

          {/* Notifications */}
          <div className="hidden md:block">
            <NotificationBell />
          </div>

          {/* Mobile Notifications Button */}
          <button
            className="md:hidden p-2 rounded-lg text-white hover:bg-white/10"
            onClick={onNotificationsClick}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
