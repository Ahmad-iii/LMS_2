import React from 'react';
import '../../index.css';

function CourseCard({ title, description, status }) {
  return (
    <div className="relative p-6 rounded-xl overflow-hidden transition-transform hover:scale-105">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 opacity-90"></div>
      
      {/* Content */}
      <div className="relative z-10 text-white">
        <h3 className="text-xl font-bold mb-3">{title}</h3>
        <p className="text-white/80 mb-4 text-sm">{description}</p>
        <div className="flex justify-between items-center">
          <span className="text-sm bg-white/20 px-3 py-1 rounded-full">{status}</span>
          <button className="bg-white text-blue-600 px-4 py-1 rounded-full text-sm font-medium hover:bg-blue-50 transition-colors">
            Enroll →
          </button>
        </div>
      </div>
    </div>
  );
}

export default CourseCard;
