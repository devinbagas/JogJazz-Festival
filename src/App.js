import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Lineup from './pages/Lineup';
import Tickets from './pages/Tickets';
import FAQ from './pages/FAQ';


function App() {
  return (
    <div className="bg-black text-white font-sans">
      <nav className="flex justify-between p-4 bg-gray-900">
        <h1 className="text-xl font-bold"><Link to="/">JogJazz</Link></h1>
        <ul className="flex space-x-4">
          <li><Link to="/lineup" className="hover:underline">Lineup</Link></li>
          <li><Link to="/tickets" className="hover:underline">Tickets</Link></li>
          <li><Link to="/faq" className="hover:underline">FAQ</Link></li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/lineup" element={<Lineup />} />
        <Route path="/tickets" element={<Tickets />} />
        <Route path="/faq" element={<FAQ />} />
      </Routes>
    </div>
  );
}

export default App;
