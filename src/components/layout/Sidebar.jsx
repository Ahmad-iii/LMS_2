import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { roleThemes } from '../../constants/themes';

const Sidebar = () => {
  const location = useLocation();
  const userRole = location.pathname.split('/')[1] || 'student';
  const theme = roleThemes[userRole];

  const menuItems = {
    admin: [
      { path: '/admin/dashboard', label: 'Dashboard', icon: '📊' },
      { path: '/admin/users', label: 'User Management', icon: '👥' },
      { path: '/admin/courses', label: 'Course Management', icon: '📚' },
      { path: '/admin/reports', label: 'Reports & Analytics', icon: '📈' },
      { path: '/admin/settings', label: 'System Settings', icon: '⚙️' },
      { path: '/forum', label: 'Forums', icon: '💭' }
    ],
    teacher: [
      { path: '/teacher/dashboard', label: 'Dashboard', icon: '📊' },
      { path: '/teacher/courses', label: 'My Courses', icon: '📚' },
      { path: '/teacher/assignments', label: 'Assignments', icon: '📝' },
      { path: '/teacher/grades', label: 'Grade Center', icon: '📈' },
      { path: '/teacher/students', label: 'My Students', icon: '👥' },
      { path: '/forum', label: 'Forums', icon: '💭' }
    ],
    student: [
      { path: '/student/dashboard', label: 'Dashboard', icon: '📊' },
      { path: '/student/courses', label: 'My Courses', icon: '📚' },
      { path: '/student/assignments', label: 'Assignments', icon: '📝' },
      { path: '/student/grades', label: 'My Grades', icon: '📈' },
      { path: '/student/calendar', label: 'Calendar', icon: '📅' },
      { path: '/forum', label: 'Forums', icon: '💭' }
    ]
  };

  const stats = {
    admin: [
      { label: 'Active Users', value: '2,450' },
      { label: 'Total Courses', value: '156' }
    ],
    teacher: [
      { label: 'Active Students', value: '186' },
      { label: 'Course Rating', value: '4.8' }
    ],
    student: [
      { label: 'Courses Enrolled', value: '6' },
      { label: 'Assignments Due', value: '3' }
    ]
  };

  return (
    <div className="flex flex-col h-full bg-[#F2EFE6] border-r border-[#D8D4C9]">
      <div className="flex-1 p-4 overflow-y-auto overscroll-contain">
        {/* Role Title */}
        <div className="mb-8 sticky top-0 bg-[#F2EFE6] pt-2 pb-4 -mt-2 -mx-4 px-4">
          <h2 className="text-lg font-merriweather font-bold capitalize" style={{ color: theme.primary }}>
            {userRole} Menu
          </h2>
          <div className="h-1 w-16 mt-2 rounded" style={{ backgroundColor: theme.primary }}></div>
        </div>

        {/* Navigation Menu */}
        <nav className="space-y-1">
          {menuItems[userRole].map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <Link
                key={item.path}
                to={item.path}
                className={`
                  flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors duration-200
                  group hover:bg-white/50 active:bg-white active:shadow-sm
                  ${isActive ? 'bg-white shadow-sm' : ''}
                `}
                style={{
                  color: isActive ? theme.primary : '#4A4A4A',
                }}
              >
                <span className="text-xl select-none">{item.icon}</span>
                <span className={`font-medium ${
                  isActive ? 'font-semibold' : ''
                }`}>
                  {item.label}
                </span>
                {isActive && (
                  <div className="ml-auto w-1.5 h-1.5 rounded-full"
                    style={{ backgroundColor: theme.primary }}
                  />
                )}
              </Link>
            );
          })}
        </nav>
      </div>

      {/* Stats Section */}
      <div className="p-4 border-t border-[#D8D4C9] bg-white/30">
        <div className="grid grid-cols-2 gap-4">
          {stats[userRole].map((stat, index) => (
            <div key={index} className="p-3 bg-white rounded-lg shadow-sm">
              <p className="text-sm text-[#4A4A4A] mb-1">{stat.label}</p>
              <p className="text-lg font-bold" style={{ color: theme.primary }}>{stat.value}</p>
            </div>
          ))}
        </div>
      </div>

      {/* User Profile */}
      <div className="p-4 border-t border-[#D8D4C9] bg-white/50">
        <div className="flex items-center space-x-3">
          <div 
            className="w-10 h-10 rounded-full text-white flex items-center justify-center font-bold shadow-sm select-none"
            style={{ backgroundColor: theme.primary }}
          >
            {userRole[0].toUpperCase()}
          </div>
          <div className="flex-1 min-w-0">
            <h3 className="font-medium text-[#1A1A1A] truncate">John Doe</h3>
            <p className="text-sm text-[#4A4A4A] capitalize">{userRole}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
