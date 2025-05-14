import React from 'react';
import Card from '../../components/common/Card';
import { Link } from 'react-router-dom';

const AdminDashboard = () => {

  const stats = {
    totalUsers: 450,
    activeCourses: 25,
    departments: 9,
    newRegistrations: 12
  };

  const recentActivities = [
    { 
      id: 1, 
      type: 'user',
      action: 'New teacher registration',
      details: 'Dr. Fazal Rahman - Computer Science',
      time: '2 hours ago'
    },
    { 
      id: 2, 
      type: 'course',
      action: 'New course created',
      details: 'Database Systems - CS305',
      time: '3 hours ago'
    },
    { 
      id: 3, 
      type: 'department',
      action: 'Department updated',
      details: 'Management Sciences - New HOD assigned',
      time: '5 hours ago'
    }
  ];

  return (
    <div className="space-y-6">
      {/* Welcome Section */}
      <div className="mb-8">
        <h1 className="text-2xl font-merriweather font-bold text-[#5D0018] mb-2">
          Admin Dashboard
        </h1>
        <p className="text-[#4A4A4A]">
          System overview and management
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card className="p-6 bg-gradient-to-br from-[#5D0018] to-[#800020]">
          <h3 className="text-white text-sm font-medium mb-2">Total Users</h3>
          <p className="text-3xl text-white font-bold">{stats.totalUsers}</p>
          <Link to="/admin/users" className="mt-4 text-sm text-white/80 hover:text-white block">
            Manage users →
          </Link>
        </Card>

        <Card className="p-6 bg-gradient-to-br from-[#166335] to-[#1E8449]">
          <h3 className="text-white text-sm font-medium mb-2">Active Courses</h3>
          <p className="text-3xl text-white font-bold">{stats.activeCourses}</p>
          <Link to="/admin/courses" className="mt-4 text-sm text-white/80 hover:text-white block">
            View courses →
          </Link>
        </Card>

        <Card className="p-6">
          <h3 className="text-[#5D0018] text-sm font-medium mb-2">Departments</h3>
          <p className="text-3xl text-[#5D0018] font-bold">{stats.departments}</p>
          <Link to="/admin/departments" className="mt-4 text-sm text-[#166335] hover:text-[#0E4020] block">
            Manage departments →
          </Link>
        </Card>

        <Card className="p-6">
          <h3 className="text-[#5D0018] text-sm font-medium mb-2">New Registrations</h3>
          <p className="text-3xl text-[#5D0018] font-bold">{stats.newRegistrations}</p>
          <span className="mt-4 text-sm text-[#4A4A4A] block">
            Last 7 days
          </span>
        </Card>
      </div>

      {/* System Status */}
      <div className="mt-8">
        <h2 className="text-xl font-merriweather font-semibold text-[#5D0018] mb-4">
          System Status
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Card className="p-6">
            <div className="flex items-center">
              <div className="h-3 w-3 bg-green-500 rounded-full mr-2"></div>
              <span className="text-[#4A4A4A]">Database: Online</span>
            </div>
          </Card>
          <Card className="p-6">
            <div className="flex items-center">
              <div className="h-3 w-3 bg-green-500 rounded-full mr-2"></div>
              <span className="text-[#4A4A4A]">Storage: 78% Free</span>
            </div>
          </Card>
          <Card className="p-6">
            <div className="flex items-center">
              <div className="h-3 w-3 bg-green-500 rounded-full mr-2"></div>
              <span className="text-[#4A4A4A]">All Services: Running</span>
            </div>
          </Card>
        </div>
      </div>

      {/* Recent Activity */}
      <div className="mt-8">
        <h2 className="text-xl font-merriweather font-semibold text-[#5D0018] mb-4">
          Recent Activity
        </h2>
        <Card>
          <div className="divide-y divide-gray-200">
            {recentActivities.map((activity) => (
              <div key={activity.id} className="p-4 flex items-start">
                <div className={`p-2 rounded-full mr-4 ${
                  activity.type === 'user' ? 'bg-[#5D0018]/10' :
                  activity.type === 'course' ? 'bg-[#166335]/10' :
                  'bg-yellow-100'
                }`}>
                  <span className="text-lg">
                    {activity.type === 'user' ? '👤' :
                     activity.type === 'course' ? '📚' :
                     '🏢'}
                  </span>
                </div>
                <div className="flex-1">
                  <p className="text-[#5D0018] font-medium">{activity.action}</p>
                  <p className="text-sm text-[#4A4A4A]">{activity.details}</p>
                </div>
                <span className="text-sm text-[#4A4A4A]">{activity.time}</span>
              </div>
            ))}
          </div>
        </Card>
      </div>

      {/* Quick Actions */}
      <div className="mt-8">
        <h2 className="text-xl font-merriweather font-semibold text-[#5D0018] mb-4">
          Quick Actions
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Link to="/admin/users/new">
            <Card className="p-6 hover:shadow-md transition-shadow">
              <h3 className="text-[#5D0018] font-medium mb-2">Add New User</h3>
              <p className="text-sm text-[#4A4A4A]">Create student or teacher account</p>
            </Card>
          </Link>
          <Link to="/admin/courses/new">
            <Card className="p-6 hover:shadow-md transition-shadow">
              <h3 className="text-[#5D0018] font-medium mb-2">Create Course</h3>
              <p className="text-sm text-[#4A4A4A]">Set up a new course</p>
            </Card>
          </Link>
          <Link to="/admin/settings">
            <Card className="p-6 hover:shadow-md transition-shadow">
              <h3 className="text-[#5D0018] font-medium mb-2">System Settings</h3>
              <p className="text-sm text-[#4A4A4A]">Configure LMS settings</p>
            </Card>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;