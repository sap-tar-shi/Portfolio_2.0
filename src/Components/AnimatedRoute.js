import React from 'react'
import {AnimatePresence} from 'framer-motion'
import {
  Routes,
  Route,
  useLocation
} from "react-router-dom";
import '../Styles/App.css';
import Intro from '../intro.js'; 
import About from '../about.js';
import Skills from '../skills.js';
import Project from '../project';

function AnimatedRoute() {
    const location = useLocation();
    return (
        <AnimatePresence>
            <Routes  location={location} key={location.pathname}>
                <Route path="/" element={<Intro />} />
                <Route path="/about" element={<About />} />
                <Route path="/skills" element={<Skills />} />
                <Route path="/project" element={<Project />} />
            </Routes>
        </AnimatePresence>
  )
}

export default AnimatedRoute