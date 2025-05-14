import React from 'react';
import '../../index.css';

function Sidebar() {
  const navItems = [
    { name: 'Performance', icon: 'chart-bar' },
    { name: 'Courses', icon: 'book-open' },
    { name: 'Comment', icon: 'message-circle' },
    { name: 'Tools', icon: 'tool' },
    { name: 'Resources', icon: 'folder' }
  ];

  return (
    <div className="w-64 bg-white border-r border-gray-200 flex flex-col h-screen">
      {/* Logo Section */}
      <div className="p-6">
        <h1 className="text-xl font-bold text-gray-900">LMS Dashboard</h1>
      </div>

      {/* Navigation Menu */}
      <nav className="flex-grow px-4">
        <ul className="space-y-2">
          {navItems.map((item, index) => (
            <li key={index}>
              <a
                href="#"
                className="flex items-center px-4 py-3 text-gray-700 rounded-lg hover:bg-gray-100 transition-colors"
              >
                <span className="inline-block w-5 h-5 mr-3">
                  {/* Icon placeholder */}
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    {item.icon === 'chart-bar' && (
                      <>
                        <line x1="18" y1="20" x2="18" y2="10"></line>
                        <line x1="12" y1="20" x2="12" y2="4"></line>
                        <line x1="6" y1="20" x2="6" y2="14"></line>
                      </>
                    )}
                    {item.icon === 'book-open' && (
                      <>
                        <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
                        <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
                      </>
                    )}
                    {item.icon === 'message-circle' && (
                      <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
                    )}
                    {item.icon === 'tool' && (
                      <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path>
                    )}
                    {item.icon === 'folder' && (
                      <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
                    )}
                  </svg>
                </span>
                {item.name}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {/* Upgrade Plan Section */}
      <div className="p-4 m-4 bg-gray-50 rounded-lg">
        <h3 className="font-semibold mb-2">Upgrade your plan</h3>
        <p className="text-sm text-gray-500 mb-3">Access all features and resources</p>
        <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors">
          Pro plan →
        </button>
      </div>
    </div>
  );
}

export default Sidebar;
