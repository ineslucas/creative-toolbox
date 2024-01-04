import './style.css'
import ReactDOM from 'react-dom/client'
import Index from './index.jsx'
import Overlay from './layout/Overlay.js'
import { StrictMode } from "react";
import AboutHover from './layout/AboutHover.js';

const root = ReactDOM.createRoot(document.querySelector('#root'))

{/* R3F and styled-components.js can't be used in the same page,
Text is not allowed in the R3F tree*/}

const resetScrollPosition = () => {
  console.log("Resetting scroll position");
  window.scrollTo(0, 0);
};

root.render(
  <StrictMode>
    {/* <AboutHover /> */}
    <Index />
    <Overlay />
  </StrictMode>
)

// resetScrollPosition(); // Reset scroll position on page load

window.addEventListener('load', resetScrollPosition); // listen to the 'load' event to ensure the page is fully loaded
