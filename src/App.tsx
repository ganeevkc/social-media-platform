import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import React from 'react'

// import './App.css'

const App: React.FC = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage/>}/>
        </Routes>
      </Router>
    </>
  )
}

export default App
