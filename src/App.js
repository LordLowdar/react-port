import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Header from './components/Header';
import Resume from './components/Resume';
import Divide from './components/Divide';
import Portfolio from './components/Portfolio';

function App() {
  return (
    <>
      <Router>
        <Header />
        {/* <Divide /> */}
        <Routes>
          <Route exact path="/" element={<About />} />
          <Route path="/about" element={<About />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        {/* <Footer /> */}
      </Router>
    </>
  );
}

export default App;
