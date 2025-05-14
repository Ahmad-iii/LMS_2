import React from 'react';
import '../../index.css';

function Header() {
  return (
    <header className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
      {/* Date and Title */}
      <div>
        <p className="text-gray-500 text-sm mb-1">June 28th, 2020</p>
        <h1 className="text-2xl font-bold text-gray-900">Course Activity</h1>
      </div>

      {/* Search Bar */}
      <div className="flex items-center space-x-3 w-full md:w-auto">
        <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-500"><polyline points="15 18 9 12 15 6"></polyline></svg>
        </button>
        <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-500"><polyline points="9 18 15 12 9 6"></polyline></svg>
        </button>
        <div className="relative flex-grow md:flex-grow-0">
          <input
            type="text"
            placeholder="Search courses..."
            className="w-full md:w-64 pl-4 pr-10 py-2 border border-gray-200 rounded-lg focus:outline-none focus:border-blue-500 transition-colors"
          />
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400">
            <circle cx="11" cy="11" r="8"></circle>
            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
          </svg>
        </div>
      </div>
    </header>
  );
}

export default Header;
