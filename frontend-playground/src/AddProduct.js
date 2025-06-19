import React, { useState } from 'react';
import axios from 'axios';
import Header from './Header';
import { useNavigate } from 'react-router-dom';

const API_BASE_URL = 'http://localhost:3000/api/products';

function AddProduct() {
  const [formData, setFormData] = useState({ name: '', price: '', stock: '' });
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleAddProduct = async (e) => {
    e.preventDefault();
    try {
      await axios.post(API_BASE_URL, {
        name: formData.name,
        price: parseFloat(formData.price),
        stock: parseInt(formData.stock, 10),
      });
      setMessage('Product added successfully!');
      setFormData({ name: '', price: '', stock: '' });
      // Optionally redirect after a delay:
      // setTimeout(() => navigate('/report'), 1500);
    } catch (err) {
      setMessage('Error adding product');
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <div className="flex items-center justify-center min-h-[80vh]">
        <div className="bg-white p-8 rounded shadow-md w-96">
          <h1 className="text-2xl font-bold mb-4 text-center">Add Product</h1>
          <form onSubmit={handleAddProduct}>
            <input
              type="text"
              name="name"
              placeholder="Product Name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-2 mb-4 border rounded"
              required
            />
            <input
              type="number"
              name="price"
              placeholder="Price"
              value={formData.price}
              onChange={handleChange}
              className="w-full p-2 mb-4 border rounded"
              min="0"
              step="0.01"
              required
            />
            <input
              type="number"
              name="stock"
              placeholder="Stock"
              value={formData.stock}
              onChange={handleChange}
              className="w-full p-2 mb-4 border rounded"
              min="0"
              required
            />
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white p-2 rounded-lg font-semibold shadow-md hover:from-blue-600 hover:to-purple-700 hover:scale-105 transition-all duration-200"
            >
              Add Product
            </button>
          </form>
          {message && <p className="text-green-600 mt-4 text-center">{message}</p>}
        </div>
      </div>
    </div>
  );
}

export default AddProduct;