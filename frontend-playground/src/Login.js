import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';
import Header from './Header'; // <-- Import the Header component

const API_BASE_URL = 'http://localhost:3000/api/auth';

function Login() {
  const [formData, setFormData] = useState({ username: '', password: '' });
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(`${API_BASE_URL}/login`, formData);
      if (res.data.token) {
        setMessage('Login successful');
        localStorage.setItem('isLoggedIn', 'true');
        // Set timeout for 5 minutes (300000 ms)
        setTimeout(() => {
          localStorage.removeItem('isLoggedIn');
          alert('Session expired. Please login again.');
          navigate('/login');
        }, 300000);
        navigate('/report');
      }
    } catch (err) {
      setMessage('Invalid username or password');
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <div className="flex items-center justify-center min-h-[80vh]">
        <div className="bg-white p-8 rounded shadow-md w-96">
          <h1 className="text-2xl font-bold mb-4 text-center">LOGIN</h1>
          <form onSubmit={handleLogin}>
            <input
              type="text"
              name="username"
              placeholder="Username"
              value={formData.username}
              onChange={handleChange}
              className="w-full p-2 mb-4 border rounded"
              required
            />
            <br /> <br />
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              className="w-full p-2 mb-4 border rounded"
              required
            />
            <br /> <br />
            <button type="submit" className="w-full bg-gradient-to-r from-yellow-500 to-yellow-600 text-black p-2 rounded-lg font-semibold shadow-md hover:from-black-600 hover:to-blue-700 hover:scale-105 transition-all duration-200">
              LOGIN
            </button>
          </form>
          {message && <p className="text-red-500 mt-4 text-center">{message}</p>}
          <p className="mt-4 text-center">
            Don’t have an account?{' '}
            <Link to="/register" className="text-blue-600 underline">
              Register here
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;