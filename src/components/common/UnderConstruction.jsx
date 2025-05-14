import React from 'react';
import { useLocation } from 'react-router-dom';

const UnderConstruction = () => {
  const location = useLocation();
  const pageName = location.pathname.split('/').pop().replace(/[-_]/g, ' ');

  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] p-4 text-center">
      <div className="w-24 h-24 mb-6 text-[#800020]">
        <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
        </svg>
      </div>
      <h2 className="text-2xl font-merriweather font-bold text-[#1A1A1A] mb-4 capitalize">
        {pageName.charAt(0).toUpperCase() + pageName.slice(1)}
      </h2>
      <p className="text-lg text-[#4A4A4A] mb-8">
        This feature is under construction and will be available soon.
      </p>
      <div className="text-sm text-[#4A4A4A] bg-[#F2EFE6] p-4 rounded-lg max-w-md">
        <p>
          We're working hard to bring you an amazing experience. Thank you for your patience!
        </p>
      </div>
    </div>
  );
};

export default UnderConstruction;
