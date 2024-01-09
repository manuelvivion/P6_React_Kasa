import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { Provider } from 'react-redux'
import { store } from './store/store.js';

//import the only one global CSS file
import './styles/style.css';

// import created components (full pages) :
import Home from './pages/Home/'
import Fiche from './pages/Fiche/'
import About from './pages/About/'
import Error from './pages/Error/'


function App() {
  return (
    <React.StrictMode>
    <Provider store={store}>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/fiche/:idLogement" element={<Fiche />} />
        <Route path="*" element={<Error />} /> 
      </Routes>
    </Router>
    </Provider>
  </React.StrictMode>
  );
}

export default App;
