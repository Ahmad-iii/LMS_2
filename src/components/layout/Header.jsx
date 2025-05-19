import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { roleThemes } from '../../constants/themes';
import Card from '../common/Card';

const Header = ({ onMenuClick }) => {
  const [showNotifications, setShowNotifications] = useState(false);
  const location = useLocation();
  const userRole = location.pathname.split('/')[1] || 'student';
  const theme = roleThemes[userRole];

  const notifications = [
    {
      id: 1,
      title: 'New Assignment Posted',
      message: 'Programming Assignment 2 has been posted in CS101',
      timestamp: '2024-02-15T10:30:00',
      type: 'assignment',
      isRead: false
    },
    {
      id: 2,
      title: 'Grade Posted',
      message: 'Your grade for Programming Assignment 1 has been posted',
      timestamp: '2024-02-14T15:45:00',
      type: 'grade',
      isRead: true
    },
    {
      id: 3,
      title: 'Forum Reply',
      message: 'Dr. Sarah Ahmed replied to your question about Python loops',
      timestamp: '2024-02-14T11:15:00',
      type: 'forum',
      isRead: false
    }
  ];

  const getNotificationIcon = (type) => {
    switch (type) {
      case 'assignment':
        return (
          <svg className="w-5 h-5 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
          </svg>
        );
      case 'grade':
        return (
          <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        );
      case 'forum':
        return (
          <svg className="w-5 h-5 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
          </svg>
        );
    }
  };

  const unreadCount = notifications.filter(n => !n.isRead).length;

  return (
    <header 
      className="fixed top-0 left-0 right-0 h-16 z-40 shadow-lg"
      style={{ background: theme.primary }}
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
          <div className="relative">
            <button
              onClick={() => setShowNotifications(!showNotifications)}
              className="p-2 rounded-lg text-white hover:bg-white/10"
              aria-label="Notifications"
            >
              <div className="relative">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                </svg>
                {unreadCount > 0 && (
                  <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 text-white text-xs rounded-full flex items-center justify-center">
                    {unreadCount}
                  </span>
                )}
              </div>
            </button>

            {/* Notifications Panel */}
            {showNotifications && (
              <div className="fixed inset-0 z-50 flex items-start justify-end sm:relative">
                {/* Mobile overlay */}
                <div 
                  className="fixed inset-0 bg-black/20 sm:hidden" 
                  onClick={() => setShowNotifications(false)}
                />
                
                <Card className="absolute right-2 top-16 sm:top-10 w-full max-w-[95vw] sm:max-w-md max-h-[80vh] overflow-y-auto shadow-xl rounded-lg border border-gray-200 bg-white z-50 sm:w-96">
                  <div className="p-4 border-b border-gray-200 sticky top-0 bg-white z-10">
                    <div className="flex items-center justify-between">
                      <h3 className="text-lg font-semibold text-gray-900">Notifications</h3>
                      <button
                        onClick={() => setShowNotifications(false)}
                        className="text-sm text-[#5D0018] hover:text-[#5D0018]/80"
                      >
                        Mark all as read
                      </button>
                    </div>
                  </div>
                  
                  <div className="divide-y divide-gray-200">
                    {notifications.map((notification) => (
                      <div
                        key={notification.id}
                        className={`p-4 hover:bg-gray-50 transition-colors ${
                          !notification.isRead ? 'bg-[#5D0018]/5' : ''
                        }`}
                      >
                        <div className="flex items-start gap-3">
                          <div className="flex-shrink-0 mt-1">
                            {getNotificationIcon(notification.type)}
                          </div>
                          <div className="flex-1 min-w-0">
                            <p className="text-sm font-medium text-gray-900">
                              {notification.title}
                            </p>
                            <p className="mt-1 text-sm text-gray-600 break-words">
                              {notification.message}
                            </p>
                            <p className="mt-1 text-xs text-gray-500">
                              {new Date(notification.timestamp).toLocaleString('en-US', {
                                month: 'short',
                                day: 'numeric',
                                hour: 'numeric',
                                minute: 'numeric',
                                hour12: true
                              })}
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </Card>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
