import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import {Home, Business, AboutUs,Contacts} from './components';
import Navbar from './components/Navbar';
import Ecopackaging from './components/Ecopackaging';
import Musiq from './components/Musiq';
const App = () => {
  return (
    <div className='bg-primary w-full min-h-screen flex flex-col'>
      <p className="text-[16px] text-center text-white font-judson">Caring Today for the Leaders of Tomorrow</p>
      <Navbar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/business" element={<Business />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/contact" element={<Contacts />} />
          <Route path="/ecopackaging" element={<Ecopackaging />} />
          <Route path="/musiq" element={<Musiq />} />
        </Routes>
    </div>
  );
}

export default App;
