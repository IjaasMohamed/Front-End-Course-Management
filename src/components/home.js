import React from 'react';

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Top navigation bar */}
      <nav className="bg-black p-4 flex justify-between items-center">
        <div className="flex items-center">
          <div className="rounded-full h-8 w-8 flex items-center justify-center bg-yellow-400 mr-2" />
          <span className="font-semibold text-xl">CodeEmpire</span>
        </div>
        <div className="flex">
          <a href="#dashboard" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">DASHBOARD</a>
          <a href="#certification" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">CERTIFICATION</a>
          <a href="#documentation" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">DOCUMENTATIONS</a>
        </div>
      </nav>

      {/* Main content */}
      <div className="flex">
        {/* Side navigation */}
        <div className="w-1/6 bg-gray-800 p-5">
          <div className="flex flex-col">
            <button className="mb-3 bg-gray-700 text-sm text-left text-green-400 px-4 py-2 rounded">ADD</button>
            <button className="bg-gray-700 text-sm text-left text-green-400 px-4 py-2 rounded">VIEW</button>
          </div>
        </div>

        {/* Document list */}
        <div className="w-5/6 p-10">
          <div className="flex flex-col space-y-4">
            <div className="bg-gray-700 p-4 rounded">HTML Elements</div>
            <div className="bg-gray-700 p-4 rounded">HTML Attributes</div>
            <div className="bg-gray-700 p-4 rounded">HTML Headings</div>
            <div className="bg-gray-700 p-4 rounded">HTML Editors</div>
            <button className="self-start mt-5 bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded">Add new doc</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
