import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import Sesction1 from './Sesction1'
import Sesction2 from './Sesction2'
import Footer1 from './Footer1'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <Sesction1/>
    <Sesction2/>
    <Footer1/>
  </React.StrictMode>,
)
