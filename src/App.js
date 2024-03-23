import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Nav from './components/nav';
import Dashboard from './components/dashboard';
import Dashboard1 from './components/dashboard1';
import Home from './components/home';
import Landing from './components/landing';
import Search from './components/search';

const App = () => {
  return (
    <Router>
      <div className="bg-gray-800 text-white min-h-screen">
        <Nav />
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/dashboard1" element={<Dashboard1 />} />
          <Route path="/home" element={<Home />} />
          <Route path="/" element={<Landing />} />
          <Route path="/nav" element={<Nav />} />
          <Route path="/search" element={<Search />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
