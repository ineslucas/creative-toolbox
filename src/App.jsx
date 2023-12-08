import './style.css'
import ReactDOM from 'react-dom/client'
import Index from './index.jsx'
import Overlay from './layout/Overlay.js'

const root = ReactDOM.createRoot(document.querySelector('#root'))

root.render(
  <>
    <Index />
    <Overlay />
  </>
)
