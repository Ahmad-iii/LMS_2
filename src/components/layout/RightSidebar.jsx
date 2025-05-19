import React from 'react';
import { useLocation } from 'react-router-dom';
import Card from '../common/Card';
import { roleThemes } from '../../constants/themes';

const RightSidebar = () => {
  const location = useLocation();
  const userRole = location.pathname.split('/')[1] || 'student';
  const theme = roleThemes[userRole];

  const roleSpecificContent = {
    admin: {
      stats: [
        { label: 'Total Users', value: '2,450', change: '+15%', icon: '👥' },
        { label: 'Active Courses', value: '156', change: '+8%', icon: '📚' },
        { label: 'System Load', value: '32%', change: '-5%', icon: '🔄' }
      ],
      quickActions: [
        { label: 'Add New User', icon: '➕' },
        { label: 'Course Approvals', icon: '✅' },
        { label: 'System Backup', icon: '💾' }
      ]
    },
    teacher: {
      stats: [
        { label: 'Active Students', value: '186', change: '+12%', icon: '👨‍🎓' },
        { label: 'Pending Grades', value: '23', change: '-7%', icon: '📝' },
        { label: 'Course Rating', value: '4.8', change: '+0.2', icon: '⭐' }
      ],
      quickActions: [
        { label: 'Grade Assignments', icon: '✏️' },
        { label: 'Create Quiz', icon: '📋' },
        { label: 'Schedule Class', icon: '📅' }
      ]
    },
    student: {
      stats: [
        { label: 'Course Progress', value: '68%', change: '+5%', icon: '📊' },
        { label: 'Assignments Done', value: '12/15', change: '+2', icon: '✅' },
        { label: 'GPA', value: '3.8', change: '+0.2', icon: '🎯' }
      ],
      quickActions: [
        { label: 'Submit Assignment', icon: '📤' },
        { label: 'Join Class', icon: '🎓' },
        { label: 'View Grades', icon: '📊' }
      ]
    }
  };

  const upcomingEvents = [
    {
      id: 1,
      title: userRole === 'student' ? 'Mid-term Exam' : 'Conduct Mid-term',
      date: '2025-05-20',
      course: 'Programming Fundamentals',
      type: 'exam'
    },
    {
      id: 2,
      title: userRole === 'student' ? 'Project Submission' : 'Review Projects',
      date: '2025-05-25',
      course: 'Database Systems',
      type: 'project'
    }
  ];

  return (
    <div className="flex flex-col h-full bg-[#F2EFE6] border-l border-[#D8D4C9]">
      {/* User Profile Section */}
      <div className="sticky top-0 bg-[#F2EFE6] z-10 p-4 border-b border-[#D8D4C9]">
        <div className="flex items-center space-x-3">
          <div className="flex items-center space-x-3 flex-1 min-w-0">
            <div 
              className="w-12 h-12 rounded-full text-white flex items-center justify-center font-bold text-lg shadow-md flex-shrink-0"
              style={{ backgroundColor: theme.primary }}
            >
              {userRole[0].toUpperCase()}
            </div>
            <div className="min-w-0">
              <h3 className="font-merriweather font-semibold text-[#1A1A1A] truncate">John Doe</h3>
              <p className="text-sm text-[#4A4A4A] capitalize">{userRole}</p>
            </div>
          </div>
          <button 
            className="p-2 rounded-full hover:bg-white/50 transition-colors flex-shrink-0"
            aria-label="Settings"
          >
            <svg className="w-5 h-5 text-[#4A4A4A]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
          </button>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto overscroll-contain p-4 space-y-6">
        {/* Stats Grid */}
        <div className="grid grid-cols-1 gap-4">
          {roleSpecificContent[userRole].stats.map((stat, index) => (
            <Card key={index} className="p-4 hover:shadow-md transition-shadow bg-white">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-[#4A4A4A]">{stat.label}</p>
                  <p className="text-2xl font-bold" style={{ color: theme.primary }}>{stat.value}</p>
                  <span className={`text-xs ${
                    stat.change.startsWith('+') ? 'text-green-600' : 'text-red-600'
                  }`}>
                    {stat.change}
                  </span>
                </div>
                <span className="text-2xl select-none">{stat.icon}</span>
              </div>
            </Card>
          ))}
        </div>

        {/* Quick Actions */}
        <div className="bg-white rounded-lg p-4">
          <h3 className="font-merriweather font-semibold text-[#1A1A1A] mb-3">Quick Actions</h3>
          <div className="grid grid-cols-3 gap-3">
            {roleSpecificContent[userRole].quickActions.map((action, index) => (
              <button
                key={index}
                className="flex flex-col items-center justify-center p-2 rounded-lg border border-[#D8D4C9] bg-[#F2EFE6] hover:bg-[#E8E4D9] transition-colors min-w-0 min-h-0"
                style={{wordBreak: 'break-word'}}
              >
                <span className="text-xl select-none mb-1">{action.icon}</span>
                <span className="text-xs font-medium text-center leading-tight break-words max-w-[70px]">{action.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Upcoming Events */}
        <div className="bg-white rounded-lg p-4">
          <h3 className="font-merriweather font-semibold text-[#1A1A1A] mb-3">Upcoming</h3>
          <div className="space-y-3">
            {upcomingEvents.map((event) => (
              <div
                key={event.id}
                className={`p-4 rounded-lg border-l-4 bg-[#F2EFE6] ${
                  event.type === 'exam'
                    ? 'border-l-[#800020]'
                    : 'border-l-[#1E8449]'
                }`}
              >
                <div className="flex justify-between items-start">
                  <div className="min-w-0">
                    <h4 className="font-medium text-[#1A1A1A] truncate">{event.title}</h4>
                    <p className="text-sm text-[#4A4A4A] truncate">{event.course}</p>
                  </div>
                  <span className="text-sm font-medium flex-shrink-0" style={{ color: theme.primary }}>
                    {new Date(event.date).toLocaleDateString('en-US', { 
                      month: 'short',
                      day: 'numeric'
                    })}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* System Status (Admin Only) */}
        {userRole === 'admin' && (
          <div className="bg-white rounded-lg p-4">
            <h3 className="font-merriweather font-semibold text-[#1A1A1A] mb-3">System Status</h3>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-[#4A4A4A]">Server Load</span>
                  <span className="text-[#1A1A1A]">32%</span>
                </div>
                <div className="h-2 bg-[#E8E4D9] rounded-full overflow-hidden">
                  <div
                    className="h-full bg-green-500 rounded-full transition-all duration-500"
                    style={{ width: '32%' }}
                  />
                </div>
              </div>
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-[#4A4A4A]">Storage Usage</span>
                  <span className="text-[#1A1A1A]">68%</span>
                </div>
                <div className="h-2 bg-[#E8E4D9] rounded-full overflow-hidden">
                  <div
                    className="h-full bg-yellow-500 rounded-full transition-all duration-500"
                    style={{ width: '68%' }}
                  />
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default RightSidebar;
