import React from 'react';
import CourseGrid from '../../components/courses/CourseGrid';
import { mockCourses } from '../../constants/mockData';

const StudentCourseList = () => {
  const handleEnroll = (courseId) => {
    console.log(`Enrolling in course ${courseId}`);
    // Mock enrollment logic
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-merriweather font-bold text-[#5D0018] mb-2">
          Available Courses
        </h1>
        <p className="text-[#4A4A4A]">
          Browse and enroll in courses for the upcoming semester
        </p>
      </div>

      <CourseGrid
        courses={mockCourses}
        userRole="student"
        onEnroll={handleEnroll}
      />
    </div>
  );
};

export default StudentCourseList;