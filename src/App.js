import React from 'react';
import Header from './Components/header';
import Footer from './Components/footer';
import AnimatedRoute from './Components/AnimatedRoute';
import {
  BrowserRouter as Router,
} from "react-router-dom";

function App() {
    return (
      <>
        <Header />
        <Router>
          <AnimatedRoute /> 
        </Router>
        <Footer />
      </>
    );
  };
export default App;
