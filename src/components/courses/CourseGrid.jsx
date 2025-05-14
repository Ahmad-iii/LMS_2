import React from 'react';
import CourseCard from './CourseCard';
import '../../index.css';

function CourseGrid() {
  const courses = [
    {
      title: 'How to grow your Facebook Page',
      description: 'Follow these easy and simple steps to grow your Facebook audience organically.',
      status: 'Live • 12 Enrolled',
    },
    {
      title: 'Grow your Community',
      description: 'Follow these easy and simple steps to build and grow your online community.',
      status: '7 Enrolled',
    },
    {
      title: 'Data Science Bootcamp',
      description: 'Learn data science fundamentals with practical exercises and real projects.',
      status: 'Full • 17 Students',
    },
    {
      title: 'Target Audience Training',
      description: 'Master the art of identifying and reaching your perfect audience.',
      status: 'Full • 21 Students',
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {courses.map((course, index) => (
        <CourseCard key={index} {...course} />
      ))}
    </div>
  );
}

export default CourseGrid;
