import './style.css'
import ReactDOM from 'react-dom/client'
import Index from './index.jsx'
import Overlay from './layout/Overlay.js'
import { StrictMode } from "react";

const root = ReactDOM.createRoot(document.querySelector('#root'))

{/* R3F and styled-components.js can't be used in the same page,
Text is not allowed in the R3F tree*/}

root.render(
  <StrictMode>
    <Index />
    <Overlay />
  </StrictMode>
)
