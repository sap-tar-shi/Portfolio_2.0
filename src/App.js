import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import './Styles/App.css';
import Header from './Components/header';
import Footer from './Components/footer';
import Intro from './intro';
import About from './about';
import Skills from './skills';
import Project from './project';
import Contact from './contact';

class App extends React.Component {
  render() {
    return (
      <>
        <Header />
        <Router>
          <Routes>
            <Route path="/" element={<Intro />} />
          </Routes>
          <Routes>
            <Route path="/about" element={<About />} />
          </Routes>
          <Routes>
            <Route path="/skills" element={<Skills />} />
          </Routes>
          <Routes>
            <Route path="/project" element={<Project />} />
          </Routes>
          <Routes>
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Router>
        <Footer />
      </>
    );
  }
}

export default App;
