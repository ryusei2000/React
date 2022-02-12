import React from 'react';
import ReactDOM from 'react-dom';
import './styles.css'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import {
  Navigation,
  Footer,
  Home,
  Diet,
  About,
} from "./components";
// https://stock.adobe.com/search/images?filters%5Bcontent_type%3Azip_vector%5D=1&hide_panel=true&k=weights&search_type=usertyped
ReactDOM.render(
  <Router>
    <Navigation />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<Diet />} />
      <Route path="/info" element={<About />} />
    </Routes>
    <Footer />
  </Router>,
  document.getElementById('root')
);

// <Route path="/contact" element={<Contact />} /> removed from above
