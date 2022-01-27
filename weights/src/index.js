import React from 'react';
import ReactDOM from 'react-dom';
import './styles.css'
import Button from './components/Button';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import {
  Navigation,
  Footer,
  Home,
  About,
  Contact,
} from "./components";

ReactDOM.render(
  <Router>
    <Navigation />
    <Button />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
    <Footer />
  </Router>,
  document.getElementById('root')
);