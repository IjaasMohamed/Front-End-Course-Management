import React, { useState } from 'react';

const Search = () => {
  const [language, setLanguage] = useState('');
  const [subTopic, setSubTopic] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(language, subTopic, description);
  };

  const handleCancel = () => {
    setLanguage('');
    setSubTopic('');
    setDescription('');
  };

  return (
    <div className="bg-gray-800 text-white min-h-screen">
      {}
      <header className="flex justify-between items-center p-4 border-b border-gray-700">
        {}
      </header>

      {}
      <main className="p-4">
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            className="w-full p-2 rounded-lg bg-gray-700 text-white"
            type="text"
            placeholder="Language"
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
          />
          <input
            className="w-full p-2 rounded-lg bg-gray-700 text-white"
            type="text"
            placeholder="Sub Topic"
            value={subTopic}
            onChange={(e) => setSubTopic(e.target.value)}
          />
          <textarea
            className="w-full p-2 rounded-lg bg-gray-700 text-white"
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <div className="flex justify-end space-x-4">
            <button
              type="button"
              onClick={handleCancel}
              className="bg-gray-600 hover:bg-gray-700 text-sm rounded px-3 py-1"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-green-500 hover:bg-green-600 text-sm rounded px-3 py-1"
            >
              ADD
            </button>
          </div>
        </form>
      </main>
    </div>
  );
};

export default Search;
