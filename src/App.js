import React from 'react';
import Intro from './intro';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import './Styles/App.css';
import Header from './Components/header';
import Footer from './Components/footer';
import About from './about';
import Skills from './skills';

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
        </Router>
        <Footer />
      </>
    );
  }
}

export default App;
