import React from 'react';
import CourseGrid from '../../components/courses/CourseGrid';
import { mockCourses } from '../../constants/mockData';

const TeacherCourseManagement = () => {
  const handleEdit = (course) => {
    console.log('Editing course:', course);
    // Mock edit logic
  };

  const handleDelete = (courseId) => {
    console.log(`Deleting course ${courseId}`);
    // Mock delete logic
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-merriweather font-bold text-[#5D0018] mb-2">
          Course Management
        </h1>
        <p className="text-[#4A4A4A]">
          Create, edit, and manage your courses
        </p>
      </div>

      <CourseGrid
        courses={mockCourses}
        userRole="teacher"
        onEdit={handleEdit}
        onDelete={handleDelete}
      />
    </div>
  );
};

export default TeacherCourseManagement;