import React from 'react';
import Card from '../../components/common/Card';
import { Link } from 'react-router-dom';

const TeacherDashboard = () => {
  const userEmail = localStorage.getItem('userEmail');

  const stats = {
    activeCourses: 3,
    totalStudents: 120,
    pendingAssignments: 15,
    averagePerformance: 78
  };

  const recentSubmissions = [
    { 
      id: 1, 
      student: 'Ahmad Khan',
      course: 'Programming Fundamentals',
      assignment: 'Lab 3',
      submittedAt: '2025-05-14 14:30'
    },
    { 
      id: 2, 
      student: 'Sarah Ahmed',
      course: 'Database Systems',
      assignment: 'Project Proposal',
      submittedAt: '2025-05-14 12:15'
    },
    { 
      id: 3, 
      student: 'Ali Hassan',
      course: 'Web Development',
      assignment: 'Assignment 2',
      submittedAt: '2025-05-13 16:45'
    }
  ];

  return (
    <div className="space-y-6">
      {/* Welcome Section */}
      <div className="mb-8">
        <h1 className="text-2xl font-merriweather font-bold text-[#5D0018] mb-2">
          Welcome, Professor {userEmail?.split('@')[0]}
        </h1>
        <p className="text-[#4A4A4A]">
          Manage your courses and track student progress
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card className="p-6 bg-gradient-to-br from-[#5D0018] to-[#800020]">
          <h3 className="text-white text-sm font-medium mb-2">Active Courses</h3>
          <p className="text-3xl text-white font-bold">{stats.activeCourses}</p>
          <Link to="/teacher/courses" className="mt-4 text-sm text-white/80 hover:text-white block">
            Manage courses →
          </Link>
        </Card>

        <Card className="p-6 bg-gradient-to-br from-[#166335] to-[#1E8449]">
          <h3 className="text-white text-sm font-medium mb-2">Total Students</h3>
          <p className="text-3xl text-white font-bold">{stats.totalStudents}</p>
          <span className="mt-4 text-sm text-white/80 block">
            Across all courses
          </span>
        </Card>

        <Card className="p-6">
          <h3 className="text-[#5D0018] text-sm font-medium mb-2">Pending Assignments</h3>
          <p className="text-3xl text-[#5D0018] font-bold">{stats.pendingAssignments}</p>
          <Link to="/teacher/assignments" className="mt-4 text-sm text-[#166335] hover:text-[#0E4020] block">
            Grade assignments →
          </Link>
        </Card>

        <Card className="p-6">
          <h3 className="text-[#5D0018] text-sm font-medium mb-2">Average Performance</h3>
          <p className="text-3xl text-[#5D0018] font-bold">{stats.averagePerformance}%</p>
          <span className="mt-4 text-sm text-[#4A4A4A] block">
            Student average
          </span>
        </Card>
      </div>

      {/* Recent Submissions */}
      <div className="mt-8">
        <h2 className="text-xl font-merriweather font-semibold text-[#5D0018] mb-4">
          Recent Submissions
        </h2>
        <Card>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="px-4 py-3 text-left text-sm font-semibold text-[#5D0018]">Student</th>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-[#5D0018]">Course</th>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-[#5D0018]">Assignment</th>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-[#5D0018]">Submitted</th>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-[#5D0018]">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {recentSubmissions.map((submission) => (
                  <tr key={submission.id}>
                    <td className="px-4 py-3 text-sm text-[#4A4A4A]">{submission.student}</td>
                    <td className="px-4 py-3 text-sm text-[#4A4A4A]">{submission.course}</td>
                    <td className="px-4 py-3 text-sm text-[#4A4A4A]">{submission.assignment}</td>
                    <td className="px-4 py-3 text-sm text-[#4A4A4A]">{submission.submittedAt}</td>
                    <td className="px-4 py-3 text-sm">
                      <Link
                        to={`/teacher/assignments/${submission.id}`}
                        className="text-[#166335] hover:text-[#0E4020]"
                      >
                        Grade →
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Card>
      </div>

      {/* Quick Actions */}
      <div className="mt-8">
        <h2 className="text-xl font-merriweather font-semibold text-[#5D0018] mb-4">
          Quick Actions
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Link to="/teacher/courses">
            <Card className="p-6 hover:shadow-md transition-shadow">
              <h3 className="text-[#5D0018] font-medium mb-2">Manage Courses</h3>
              <p className="text-sm text-[#4A4A4A]">Create or edit your courses</p>
            </Card>
          </Link>
          <Link to="/teacher/assignments">
            <Card className="p-6 hover:shadow-md transition-shadow">
              <h3 className="text-[#5D0018] font-medium mb-2">Grade Assignments</h3>
              <p className="text-sm text-[#4A4A4A]">Review and grade submissions</p>
            </Card>
          </Link>
          <Link to="/teacher/students">
            <Card className="p-6 hover:shadow-md transition-shadow">
              <h3 className="text-[#5D0018] font-medium mb-2">View Students</h3>
              <p className="text-sm text-[#4A4A4A]">Monitor student performance</p>
            </Card>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TeacherDashboard;