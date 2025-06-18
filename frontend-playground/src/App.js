import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Login from './Login';
import Register from './Register';
import Report from './Report';
import Purchase from './Purchase';
import Footer from './Footer'; // Add this import

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/purchase" element={<Purchase/>}/>
            <Route path="/register" element={<Register />} />
            <Route path="/report" element={<Report />} />
            <Route path="*" element={<Home />} /> 
          </Routes>
        </div>
        <Footer /> {/* Footer appears on all pages */}
      </div>
    </Router>
  );
}

export default App;