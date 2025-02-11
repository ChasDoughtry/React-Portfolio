import './App.css';
import React, {useState, useEffect} from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from './pages/home.js'
import AboutMe from './pages/aboutme.js';
import Projects from './pages/projects.js';
import Contact from './pages/contact.js';


function App() {
  return (
    <Router>
      <Routes>
        {/* Home Page Route */}
                <Route path="/" element={<Home />} />

        {/* About Me Route */}
                <Route path="/aboutme" element={<AboutMe />} />

        {/* Project Page Route */}
                <Route path="/projects" element={<Projects />} />
        
        {/* Contact Page Route */}
                <Route path="/contact" element={<Contact />} />

      </Routes>
   </Router>
    
  );
}

export default App;
