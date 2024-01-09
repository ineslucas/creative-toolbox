import React, { StrictMode } from 'react';
import './style.css';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Analytics } from '@vercel/analytics/react';
import Index from './index.jsx';
import Overlay from './layout/Overlay.js';
import MemoryLab from './pages/MemoryLab.js';
import AboutMe from './pages/AboutMe.js';
import ClassRanking from './pages/ClassRanking.js';
import SurfTheJob from './pages/SurfTheJob.js';
import GatherGo from './pages/GatherGo.js';
// import AboutHover from './layout/AboutHover.js';

// console.log("Creating root element");
const root = ReactDOM.createRoot(document.querySelector('#root'))

const App = () => (
  <Router>
    <Analytics />
    {/* <AboutHover /> */}
    <Overlay/> {/* The Overlay component is rendered outside of the Routes but inside the Router, meaning it will be displayed on all routes. Displays error without zIndex property*/}
    <Routes>
      <Route exact path="/" element={<Index />} />
      <Route path="/memory-lab" element={<MemoryLab />} />
      <Route path="/about" element={<AboutMe />} />
      <Route path="/class-ranking" element={<ClassRanking />} />
      <Route path="/surf-the-job" element={<SurfTheJob />} />
      <Route path="/gathergo" element={<GatherGo />} />
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
