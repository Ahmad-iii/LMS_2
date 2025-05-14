import React from 'react';
import '../../index.css';

function RightSidebar() {
  const learningProgress = [
    { course: 'Target Audience Training', progress: 53 },
    { course: 'The Complete Web Development', progress: 75 },
    { course: 'Grow your Community', progress: 14 }
  ];

  const schedule = [
    { event: 'Morning review', time: '07:00', color: 'yellow' },
    { event: 'Call with John', time: '08:00', color: 'green' },
    { event: 'Team meeting', time: '09:00', color: 'blue' },
    { event: 'Design workshop', time: '11:00', color: 'pink' }
  ];

  return (
    <aside className="w-80 bg-white border-l border-gray-200 p-6 overflow-y-auto">
      {/* User Profile */}
      <div className="flex items-center space-x-4 mb-8">
        <div className="relative">
          <img
            src="/vite.svg"
            alt="Profile"
            className="w-12 h-12 rounded-full border-2 border-white shadow-lg"
          />
          <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-400 rounded-full border-2 border-white"></div>
        </div>
        <div>
          <h3 className="text-lg font-semibold text-gray-900">Wesley Matthews</h3>
          <p className="text-sm text-gray-500 flex items-center">
            <span className="w-2 h-2 bg-green-400 rounded-full mr-2"></span>
            Online Student
          </p>
        </div>
      </div>

      {/* Learning Progress */}
      <div className="mb-8">
        <div className="flex justify-between items-center mb-4">
          <h4 className="font-semibold text-gray-900">My learning</h4>
          <a href="#" className="text-sm text-blue-600 hover:text-blue-700">View All</a>
        </div>
        <div className="space-y-4">
          {learningProgress.map((item, index) => (
            <div key={index} className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">{item.course}</span>
                <span className="font-medium">{item.progress}%</span>
              </div>
              <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-blue-600 rounded-full transition-all duration-300"
                  style={{ width: `${item.progress}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Planning Calendar */}
      <div>
        <div className="flex justify-between items-center mb-4">
          <h4 className="font-semibold text-gray-900">Planning</h4>
          <div className="flex space-x-2">
            <button className="text-sm text-gray-600 hover:text-gray-900">This week</button>
            <button className="text-sm text-blue-600">Next week</button>
          </div>
        </div>
        <div className="space-y-3">
          {schedule.map((item, index) => (
            <div key={index} className="flex items-center justify-between p-3 rounded-lg hover:bg-gray-50 transition-colors cursor-pointer">
              <div className="flex items-center space-x-3">
                <div className={`w-2 h-2 rounded-full bg-${item.color}-400`}></div>
                <span className="text-sm text-gray-700">{item.event}</span>
              </div>
              <span className="text-sm text-gray-500">{item.time}</span>
            </div>
          ))}
        </div>
      </div>
    </aside>
  );
}

export default RightSidebar;
