
import React, { useState } from 'react';
import axios from 'axios';


const API_BASE_URL = 'http://localhost:3000/api/auth';

function App() {
  const [page, setPage] = useState('login');
  const [formData, setFormData] = useState({ username: '', password: '' });
  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(`${API_BASE_URL}/login`, formData);
      if (res.data.token) {
        setMessage('Login successful');
        setPage('register');
      }
    } catch (err) {
      setMessage('Invalid username or password');
    }
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`${API_BASE_URL}/register`, formData);
      setMessage('Registration successful!');
      setPage('login');
    } catch (err) {
      setMessage('Error during registration');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-96">
        <h1 className="text-2xl font-bold mb-4 text-center">
          {page === 'login' ? 'Login' : 'Register'}
        </h1>
        <form onSubmit={page === 'login' ? handleLogin : handleRegister}>
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
          <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded">
            {page === 'login' ? 'Login' : 'Register'}
          </button>
        </form>
        {message && <p className="text-red-500 mt-4 text-center">{message}</p>}
        <p className="mt-4 text-center">
          {page === 'login' ? (
            <span>
              Don’t have an account?{' '}
              <button
                className="text-blue-600 underline"
                onClick={() => setPage('register')}
              >
                Register here
              </button>
            </span>
          ) : (
            <span>
              Already have an account?{' '}
              <button
                className="text-blue-600 underline"
                onClick={() => setPage('login')}
              >
                Login here
              </button>
            </span>
          )}
        </p>
      </div>
    </div>
  );
}

export default App;
