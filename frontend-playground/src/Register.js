import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';
import './Register.css'; 

const API_BASE_URL = 'http://localhost:3000/api/auth';

function Register() {
  const [formData, setFormData] = useState({ username: '', password: '', repeatPassword: '' });
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    if (formData.password !== formData.repeatPassword) {
      setMessage('Passwords do not match!');
      return;
    }
    try {
      await axios.post(`${API_BASE_URL}/register`, {
        username: formData.username,
        password: formData.password,
      });
      setMessage('Registration successful!');
      navigate('/login');
    } catch (err) {
      setMessage('Error during registration');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-96">
        <h1 className="text-2xl font-bold mb-4 text-center">Register</h1>
        <form onSubmit={handleRegister}>
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
          <input
            type="password"
            name="repeatPassword"
            placeholder="Repeat Password"
            value={formData.repeatPassword}
            onChange={handleChange}
            className="w-full p-2 mb-4 border rounded"
            required
          />

          <br /> <br />
          <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded">
            Register
          </button>
        </form>
        {message && <p className="text-red-500 mt-4 text-center">{message}</p>}
        <p className="mt-4 text-center">
          Already have an account?{' '}
          <Link to="/login" className="text-blue-600 underline">
            Login here
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Register;