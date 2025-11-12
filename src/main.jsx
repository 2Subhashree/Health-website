import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import HealthCheckup from './pages/HealthCheckup.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App/>} />
        <Route path="/health-checkup" element={<HealthCheckup/>} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
