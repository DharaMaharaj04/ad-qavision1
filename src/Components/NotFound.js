import React from 'react';
import { Link } from 'react-router-dom';
import NotFoundImage from '../assets/images/error-404.png'; // Add an SVG or image file to your assets folder

const NotFound = () => {
  return (
    <div className="flex items-center justify-center min-h-screen py-6">
      <div className="text-center px-4 sm:px-6 lg:px-8">
        <img 
          src={NotFoundImage} 
          alt="404 Not Found" 
          className="w-full bg-cover max-w-md mx-auto mb-8" 
        />
        <p className="mt-4 text-2xl font-bold text-gray-800">Oops! Error with page URL</p>
        <p className="mt-2 text-gray-600">The page you're looking for doesn't exist or has been moved.</p>

        <Link
          to="/"
          className="mt-6 inline-block px-8 py-3 text-lg font-medium text-white bg-[#2196f3] rounded-lg shadow-lg hover:bg-blue-200 focus:outline-none focus:ring-4 focus:ring-purple-300"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
