import React from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './components/pages/Home';
import Services from './components/pages/Services';
import About from './components/pages/About';
import Admin from './components/pages/Admin';
import Schedules from './components/pages/Schedules';



function App() {
  return (
    
    <>
    <Router>
      <Navbar />
      <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/services" element={<Services />}></Route>
      <Route path='/about' element={<About />}></Route>
      <Route path='/sign-up' element={<Admin />}></Route>
      <Route path='/schedules' element={<Schedules />}></Route>
      </Routes>
      </Router>

      </>
   
  );
}

export default App;
