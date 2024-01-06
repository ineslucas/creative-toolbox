import React, { StrictMode } from 'react';
import './style.css';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Index from './index.jsx';
import Overlay from './layout/Overlay.js';
import MemoryLab from './pages/MemoryLab.js';
// import AboutHover from './layout/AboutHover.js';

console.log("Creating root element");
const root = ReactDOM.createRoot(document.querySelector('#root'))

const App = () => (
  <Router>
    {/* <AboutHover /> */}
    <Overlay/> {/* The Overlay component is rendered outside of the Routes but inside the Router, meaning it will be displayed on all routes. Displays error without zIndex property*/}
    <Routes>
      <Route exact path="/" element={<Index />} />
      <Route path="/memory-lab" element={<MemoryLab />} />
    </Routes>
  </Router>
);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
)

const resetScrollPosition = () => {
  // console.log("Resetting scroll position"); // to be used with ScrollTrigger
  window.scrollTo(0, 0);
};

window.addEventListener('load', resetScrollPosition);

{/* R3F and styled-components.js can't be used in the same page, Text is not allowed in the R3F tree*/}
