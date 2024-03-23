import React from 'react';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const navigate = useNavigate();

  const handleNextClick = () => {
    navigate('/dashboard1');
  };
  return (
    <div className="bg-gray-800 text-white min-h-screen">
      { }
      <header className="flex items-center justify-between p-4 border-b border-gray-700">
        { }
      </header>

      { }
      <main className="px-4 py-8">
        <div className="grid md:grid-cols-2 gap-4 max-w-7xl mx-auto">
          { }
          <div className="bg-gray-700 p-4 rounded-lg space-y-4">
            <div className="flex items-center space-x-2">
              <img src="https://" />
              <h2 className="text-xl font-bold">HTML TUTORIAL</h2>
            </div>
            <p>
              HTML (hypertext markup language) is indeed the standard markup language for creating web pages.
              It provides a set of elements or tags that define the structure and content of a web page. here's a bit
              more detail on how html works:
            </p>
            <button className="text-sm bg-blue-600 hover:bg-blue-700 rounded px-3 py-1">Categories</button>
          </div>

          { }
          <div className="bg-gray-700 p-4 rounded-lg space-y-4">
            <h2 className="text-xl font-bold">EASY LEARNING WITH HTML</h2>
            <div className="bg-white text-gray-800 p-4 rounded-lg">
              { }
              <code>
                <pre>
                  {"<html>\n<head>\n<title>Page Title</title>\n</head>\n<body>\n<h1>This is a Heading</h1>\n<p>This is a paragraph.</p>\n</body>\n</html>"}
                </pre>
              </code>
              <p>
                The Given HTML Code Represents The Structure Of A Basic Webpage. It Starts With The &lt;!DOCTYPE html&gt; Declaration,
                Which Specifies That The Document Follows The HTML5 Standard. Inside The &lt;html&gt; Tags, There Are Two Main Sections: &lt;head&gt;
                And &lt;body&gt;. The &lt;head&gt; Section Contains Metadata About The Webpage, Including The Title Specified Within The &lt;title&gt;
                Tags. In This Case, The Title Is "Page Title".
              </p>
              <button className="text-sm bg-green-500 hover:bg-green-600 rounded px-3 py-1">Copy Code</button>
            </div>
            { }
            <div className="space-y-2">
              <div>
                <span className="text-sm">Rate this</span>
                { }
                <span className="ml-2">☆☆☆☆☆</span>
              </div>
              <button className="text-sm bg-gray-600 hover:bg-gray-700 rounded px-3 py-1">Download Document</button>
            </div>
            <div>
            <button onClick={handleNextClick} className="text-sm bg-gray-600 hover:bg-gray-700 rounded px-3 py-1">Next</button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;


