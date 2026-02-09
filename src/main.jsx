import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import './index.css'

// Entry point: render the App component into the root div
createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
