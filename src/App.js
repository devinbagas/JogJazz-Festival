import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Lineup from './pages/Lineup';
import Ticket from './pages/Ticket';
import FAQ from './pages/FAQ';
import Transaction from './pages/Transaction';
import Main from './component/Main';
import Navbar from './component/Navbar';
import ScrollToTop from './component/ScrollToTop';


function App() {
  return (
    <div className="text-white font-poppins relative">
      <ScrollToTop />
      <Navbar /> 
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/JogJazz-Festival" element={<Main />} />
        <Route path="/lineup" element={<Lineup />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/transaction" element={<Transaction />} />
        <Route path="/ticket" element={<Ticket />} />
      </Routes>
    </div>
  );
}

export default App;
