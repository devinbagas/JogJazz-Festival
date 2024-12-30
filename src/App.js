import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Lineup from './pages/Lineup';
import Tickets from './pages/Tickets';
import FAQ from './pages/FAQ';
import Main from './component/Main';
import Navbar from './component/Navbar';

function App() {
  return (
    <div className="text-white font-poppins relative">
      <Navbar /> {/* Gunakan Navbar */}
      <Routes>
        {/* Render Main hanya di rute "/" */}
        <Route path="/JogJazz-Festival" element={<Main />} />
      </Routes>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/lineup" element={<Lineup />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/tickets" element={<Tickets />} />
      </Routes>
    </div>
  );
}

export default App;
