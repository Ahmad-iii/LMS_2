import React from 'react';
import Sidebar from './components/layout/Sidebar';
import Header from './components/layout/Header';
import CourseGrid from './components/courses/CourseGrid';
import RightSidebar from './components/layout/RightSidebar';
import './index.css';
import './App.css';

function App() {
  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content Area */}
      <main className="flex-grow p-6">
        <Header />
        <CourseGrid />
      </main>

      {/* Right Sidebar */}
      <RightSidebar />
    </div>
  );
}

export default App;