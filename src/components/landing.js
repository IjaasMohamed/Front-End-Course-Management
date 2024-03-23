import React from 'react';



const Landing = () => {
  return (
    <div className="bg-gray-800 text-white min-h-screen">
      {}
      

      {}
      <main className="px-4 py-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl font-bold mb-6">CODE CONFIDENTLY, LEARN COLLABORATIVELY</h1>
          <p className="text-lg mb-6">Find what you need first</p>
          <div className="flex justify-center mb-4">
            <div className="relative w-full max-w-xl">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                {}
              </div>
              <input className="block w-full pl-10 pr-3 py-2 bg-gray-700 text-white rounded-md placeholder-gray-400 focus:outline-none focus:bg-white focus:text-gray-900" placeholder="Search..." type="search" />
            </div>
          </div>
          <a href="javascript:void(0)" className="text-gray-400 hover:text-gray-300">Need Help ?</a>
        </div>
      </main>
    </div>
  );
}

export default Landing;
