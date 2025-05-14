import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainLayout from './components/layout/MainLayout';
import AuthLayout from './components/layout/AuthLayout';
import Login from './pages/auth/login/Login';
import Register from './pages/auth/register/Register';
import StudentDashboard from './pages/student/StudentDashboard';
import TeacherDashboard from './pages/teacher/TeacherDashboard';
import AdminDashboard from './pages/admin/AdminDashboard';
import StudentCourseList from './pages/student/StudentCourseList';
import TeacherCourseManagement from './pages/teacher/TeacherCourseManagement';
import ForumRoutes from './pages/forum/ForumRoutes';
import UnderConstruction from './components/common/UnderConstruction';
import './App.css';

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Auth pages */}
        <Route element={<AuthLayout />}>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Route>

        {/* Main Layout Routes */}
        <Route element={<MainLayout />}>
          {/* Admin Routes */}
          <Route path="/admin/dashboard" element={<AdminDashboard />} />
          <Route path="/admin/users" element={<UnderConstruction />} />
          <Route path="/admin/courses" element={<UnderConstruction />} />
          <Route path="/admin/reports" element={<UnderConstruction />} />
          <Route path="/admin/settings" element={<UnderConstruction />} />
          
          {/* Teacher Routes */}
          <Route path="/teacher/dashboard" element={<TeacherDashboard />} />
          <Route path="/teacher/courses" element={<TeacherCourseManagement />} />
          <Route path="/teacher/assignments" element={<UnderConstruction />} />
          <Route path="/teacher/grades" element={<UnderConstruction />} />
          <Route path="/teacher/students" element={<UnderConstruction />} />
          
          {/* Student Routes */}
          <Route path="/student/dashboard" element={<StudentDashboard />} />
          <Route path="/student/courses" element={<StudentCourseList />} />
          <Route path="/student/assignments" element={<UnderConstruction />} />
          <Route path="/student/grades" element={<UnderConstruction />} />
          <Route path="/student/calendar" element={<UnderConstruction />} />

          {/* Forum Routes */}
          <Route path="/forum/*" element={<ForumRoutes />} />
        </Route>

        {/* Default route to student dashboard for showcase */}
        <Route path="/" element={<MainLayout><StudentDashboard /></MainLayout>} />
      </Routes>
    </Router>
  );
};

export default App;