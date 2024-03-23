import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <header className="flex items-center justify-between p-4 border-b border-gray-700">
      <div className="flex items-center">
      <img src="https://via.placeholder.com/50" alt="CodeEmpire Logo" className="h-10 mr-6" />
        <nav className="hidden md:flex space-x-4">
          <Link to="/home" className="text-gray-300 hover:text-white">Dashboard</Link>
          <Link to="/certification" className="text-gray-300 hover:text-white">Certification</Link>
          <Link to="/documentations" classNclaerame="text-gray-300 hover:text-white">Documentations</Link>
          <Link to="/questions" className="text-gray-300 hover:text-white">Questions</Link>
          <Link to="/dashboard" className="text-gray-300 hover:text-white">Find Code</Link>
        </nav>
      </div>
      <div className="flex items-center space-x-4">
      <img src="https://via.placeholder.com/50" alt="CodeEmpire Logo" className="h-10 mr-6" />
        <button className="text-sm px-3 py-1 bg-blue-600 hover:bg-blue-700 rounded">
          Find Code
        </button>
      </div>
    </header>
  );
};

export default Nav;
