import React from 'react';
import ReactDOM from 'react-dom';
import './styles.css'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import {
  Navigation,
  Footer,
  Home,
  About,
  //Contact,
} from "./components";

ReactDOM.render(
  <Router>
    <Navigation />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
    </Routes>
    <Footer />
  </Router>,
  document.getElementById('root')
);

// <Route path="/contact" element={<Contact />} /> removed from above
