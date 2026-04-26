import React from 'react';
import { FiHeart } from 'react-icons/fi';

const Footer = () => {
  return (
    <footer className="bg-white dark:bg-gray-950 py-8 border-t border-gray-200 dark:border-gray-800">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
        <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 md:mb-0">
          © {new Date().getFullYear()} Dasari Bhuvana Sri. All rights reserved.
        </p>
        <p className="text-gray-600 dark:text-gray-400 text-sm flex items-center">
          Built with <FiHeart className="text-red-500 mx-1" /> and React.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
