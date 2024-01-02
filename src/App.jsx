import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import './styles/style.css';

import Home from './pages/Home/'
import Fiche from './pages/Fiche/'
import About from './pages/About/'
import Error from './pages/Error/'


function App() {
  return (
    <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/fiche/:idLogement" element={<Fiche />} />
        <Route path="*" element={<Error />} /> 
      </Routes>
    </Router>
  </React.StrictMode>
  );
}

export default App;
