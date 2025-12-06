import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-8 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="mb-4 md:mb-0">&copy; 2025 Juan Carlos Jerez Velásquez. All rights reserved.</p>
          <div className="flex space-x-6">
            <a href="#" className="hover:text-blue-400">LinkedIn</a>
            <a href="#" className="hover:text-blue-400">GitHub</a>
            <a href="#" className="hover:text-blue-400">Email</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;