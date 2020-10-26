import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route, Link} from "react-router-dom"

import Navigation from './components/Navigation/Navigation';
import Home from './components/Home/Home';
import About from './components/About/About';
import Rules from './components/Rules/Rules';
import Admin from './components/Backend/Admin';
import Members from './components/Members/Members';
import Backend from './components/Backend/Backend';

function App() {
  return (
    <BrowserRouter>
    <Navigation />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/about" element={<About />}/>
        <Route path="/rules" element={<Rules />}/>
        <Route path="/members" element={<Members />}/>
        <Route path="/login" element={< Admin/>} />
        <Route path="/backend" element={<Backend />} />
       
               
      </Routes>
    </BrowserRouter>
  );
}

export default App;
