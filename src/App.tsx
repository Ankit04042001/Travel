import React from 'react';
import {Routes, Route} from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import About from './pages/About';
import Destination from './pages/Destination';
import Contact from './pages/Contact';
import { DestinationDesc } from './pages/DestinationDesc';

function App() {
  return (
    <div className="App">
      <div className='main-container'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/destination' element={<Destination />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/destinationDesc/:id' element={<DestinationDesc />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
