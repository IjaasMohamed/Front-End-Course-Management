import React from 'react';
import { useNavigate } from 'react-router-dom';



const Dashboard1 = () => {
   
  const details = {
    language: 'HTML',
    subTopic: 'HTML Styles',
    description: `Setting the style of an HTML element can be done with the style attribute.
                  The HTML style attribute has the following syntax:`
  };

  
  const downloadReport = () => console.log('Download Report');
  const editItem = () => console.log('Edit Item');
  const deleteItem = () => console.log('Delete Item');

  return (
    <div className="bg-gray-800 text-white min-h-screen">
      <header className="flex justify-between items-center p-4 border-b border-gray-700">
        {}
      </header>
      <main className="p-4">
        <div className="flex flex-col md:flex-row justify-between">
          {}
          <div className="bg-gray-700 p-4 rounded-lg mb-4 md:mb-0 flex-1 md:mr-4">
            <h2 className="text-xl mb-2">Details</h2>
            <div className="mb-4">
              <h3 className="font-semibold">Language</h3>
              <p className="bg-gray-600 p-2 rounded">{details.language}</p>
            </div>
            <div className="mb-4">
              <h3 className="font-semibold">Sub Topic</h3>
              <p className="bg-gray-600 p-2 rounded">{details.subTopic}</p>
            </div>
            <div className="mb-4">
              <h3 className="font-semibold">Description</h3>
              <p className="bg-gray-600 p-2 rounded">{details.description}</p>
            </div>
            <div className="flex space-x-2">
              <button className="bg-green-500 hover:bg-green-600 text-sm rounded px-3 py-1" onClick={downloadReport}>Download Report</button>
              <button className="bg-yellow-500 hover:bg-yellow-600 text-sm rounded px-3 py-1" onClick={editItem}>Edit</button>
              <button className="bg-red-500 hover:bg-red-600 text-sm rounded px-3 py-1" onClick={deleteItem}>Delete</button>
            </div>
          </div>
          
          {}
          <div className="flex-1 max-w-md">
            {}
            <div className="bg-gray-700 p-4 rounded-lg h-64">
              <h2 className="text-xl mb-2">Activity Chart</h2>
              <p className="text-center text-gray-400">Chart Placeholder</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard1;
