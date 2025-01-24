import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import Home1 from './pages/Home1.jsx'
import App from './App.jsx'
// import Navbar from './components/Navbar.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    
   <App/>
  </StrictMode>,
)
