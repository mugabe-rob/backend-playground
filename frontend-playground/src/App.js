import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Login from './Login';
import Register from './Register';
import Report from './Report';
import Purchase from './Purchase';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/purchase" element= {<Purchase/>}/>
        <Route path="/register" element={<Register />} />
        <Route path="/report" element={<Report />} />
    
        <Route path="*" element={<Home />} /> 
      </Routes>
    </Router>
  );
}

export default App;