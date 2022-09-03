import React from 'react';
import './App.css';
import About from './pages/About';
import Blog from './pages/Blog';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home';


function App() {
  return (
    <div className="App" style={{ backgroundColor: '#f9f9f9' }}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="home" element={<Home />} />
            <Route path="blog" element={<Blog />} />
            <Route path="about" element={<About />} />
            <Route path="*" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
