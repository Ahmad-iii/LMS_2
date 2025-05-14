import React from 'react';
import Card from '../../components/common/Card';
import { Link } from 'react-router-dom';

const StudentDashboard = () => {
  const userEmail = localStorage.getItem('userEmail');

  const stats = {
    enrolledCourses: 4,
    activeAssignments: 3,
    upcomingDeadlines: 2,
    averageGrade: 85
  };

  const recentActivity = [
    { id: 1, type: 'assignment', course: 'Programming Fundamentals', action: 'Assignment submitted', date: '2025-05-14' },
    { id: 2, type: 'course', course: 'Database Systems', action: 'Course enrolled', date: '2025-05-13' },
    { id: 3, type: 'grade', course: 'Web Development', action: 'Grade posted', date: '2025-05-12' }
  ];

  return (
    <div className="space-y-6">
      {/* Welcome Section */}
      <div className="mb-8">
        <h1 className="text-2xl font-merriweather font-bold text-[#5D0018] mb-2">
          Welcome Back, {userEmail?.split('@')[0]}
        </h1>
        <p className="text-[#4A4A4A]">
          Here's an overview of your academic progress
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card className="p-6 bg-gradient-to-br from-[#5D0018] to-[#800020]">
          <h3 className="text-white text-sm font-medium mb-2">Enrolled Courses</h3>
          <p className="text-3xl text-white font-bold">{stats.enrolledCourses}</p>
          <Link to="/student/courses" className="mt-4 text-sm text-white/80 hover:text-white block">
            View all courses →
          </Link>
        </Card>

        <Card className="p-6 bg-gradient-to-br from-[#166335] to-[#1E8449]">
          <h3 className="text-white text-sm font-medium mb-2">Active Assignments</h3>
          <p className="text-3xl text-white font-bold">{stats.activeAssignments}</p>
          <Link to="/student/assignments" className="mt-4 text-sm text-white/80 hover:text-white block">
            View assignments →
          </Link>
        </Card>

        <Card className="p-6">
          <h3 className="text-[#5D0018] text-sm font-medium mb-2">Upcoming Deadlines</h3>
          <p className="text-3xl text-[#5D0018] font-bold">{stats.upcomingDeadlines}</p>
          <span className="mt-4 text-sm text-[#4A4A4A] block">
            Due this week
          </span>
        </Card>

        <Card className="p-6">
          <h3 className="text-[#5D0018] text-sm font-medium mb-2">Average Grade</h3>
          <p className="text-3xl text-[#5D0018] font-bold">{stats.averageGrade}%</p>
          <span className="mt-4 text-sm text-[#4A4A4A] block">
            Current semester
          </span>
        </Card>
      </div>

      {/* Recent Activity */}
      <div className="mt-8">
        <h2 className="text-xl font-merriweather font-semibold text-[#5D0018] mb-4">
          Recent Activity
        </h2>
        <Card>
          <div className="divide-y divide-gray-200">
            {recentActivity.map((activity) => (
              <div key={activity.id} className="p-4 flex items-start space-x-4">
                <div className={`p-2 rounded-full ${
                  activity.type === 'assignment' ? 'bg-[#5D0018]/10' :
                  activity.type === 'course' ? 'bg-[#166335]/10' :
                  'bg-yellow-100'
                }`}>
                  <span className="text-lg">
                    {activity.type === 'assignment' ? '📝' :
                     activity.type === 'course' ? '📚' :
                     '📊'}
                  </span>
                </div>
                <div className="flex-1">
                  <p className="text-[#5D0018] font-medium">{activity.course}</p>
                  <p className="text-sm text-[#4A4A4A]">{activity.action}</p>
                </div>
                <span className="text-sm text-[#4A4A4A]">{activity.date}</span>
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
          <Link to="/student/courses">
            <Card className="p-6 hover:shadow-md transition-shadow">
              <h3 className="text-[#5D0018] font-medium mb-2">Browse Courses</h3>
              <p className="text-sm text-[#4A4A4A]">View available courses and enroll</p>
            </Card>
          </Link>
          <Link to="/student/assignments">
            <Card className="p-6 hover:shadow-md transition-shadow">
              <h3 className="text-[#5D0018] font-medium mb-2">Submit Assignments</h3>
              <p className="text-sm text-[#4A4A4A]">View and submit your assignments</p>
            </Card>
          </Link>
          <Link to="/student/grades">
            <Card className="p-6 hover:shadow-md transition-shadow">
              <h3 className="text-[#5D0018] font-medium mb-2">Check Grades</h3>
              <p className="text-sm text-[#4A4A4A]">View your academic performance</p>
            </Card>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default StudentDashboard;