import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './Report.css';

function Report() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [editingProduct, setEditingProduct] = useState(null); // For modal
  const [editForm, setEditForm] = useState({ name: '', stock: '', price: '' });
  const [modalOpen, setModalOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();

  // Protected my page and auto-logout after 5 minutes
   useEffect(() => {
    if (!localStorage.getItem('isLoggedIn')) {
      navigate('/login');
    }
    const timeout = setTimeout(() => {
      localStorage.removeItem('isLoggedIn');
      alert('Session expired. Please login again.');
      navigate('/login');
    }, 300000); // 5 minutes
    return () => clearTimeout(timeout);
  }, [navigate]);

  useEffect(() => {
    axios.get('http://localhost:3000/api/products')
      .then(res => {
        setProducts(res.data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  // Delete handler
  const handleDelete = async (id) => {
    if (!window.confirm('Are you sure you want to delete this product?')) return;
    try {
      await axios.delete(`http://localhost:3000/api/products/${id}`);
      setProducts(products.filter(product => product.id !== id));
    } catch (err) {
      alert('Failed to delete product.');
    }
  };

  // Open edit modal
  const handleEditClick = (product) => {
    setEditingProduct(product);
    setEditForm({
      name: product.name,
      stock: product.stock,
      price: product.price,
    });
    setModalOpen(true);
  };

  // Handle form change
  const handleEditChange = (e) => {
    setEditForm({ ...editForm, [e.target.name]: e.target.value });
  };

  // Submit edit
  const handleEditSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const res = await axios.put(`http://localhost:3000/api/products/${editingProduct.id}`, editForm);
      setProducts(products.map(p => p.id === editingProduct.id ? res.data : p));
      setModalOpen(false);
      setEditingProduct(null);
    } catch (err) {
      alert('Failed to update product.');
    } finally {
      setIsSubmitting(false);
    }
  };

  // Close modal
  const handleCloseModal = () => {
    setModalOpen(false);
    setEditingProduct(null);
  };

  return (
    <div style={{ minHeight: '100vh', background: '#f3f4f6', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <div style={{ background: '#fff', padding: '2rem', borderRadius: '8px', boxShadow: '0 2px 8px rgba(0,0,0,0.05)', width: '100%', maxWidth: '900px' }}>
        <h1 style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '1rem', textAlign: 'center' }}>Report for Products</h1>
        {loading ? (
          <p style={{ textAlign: 'center' }}>Loading...</p>
        ) : (
          <div className="report-table-container">
            <table className="report-table">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Name</th>
                  <th>Stock</th>
                  <th>Price (USD)</th>
                  <th>Created At</th>
                  <th>Updated At</th>
                  <th>ACTIONS</th>
                </tr>
              </thead>
              <tbody>
                {products.map(product => (
                  <tr key={product.id}>
                    <td>{product.id}</td>
                    <td>{product.name}</td>
                    <td>{product.stock}</td>
                    <td>{product.price}</td>
                    <td>{product.createdAt}</td>
                    <td>{product.updatedAt}</td>
                    <td style={{
                      display: 'flex',
                      gap: '8px',
                      justifyContent: 'center',
                      alignItems: 'center',
                      minHeight: '40px'
                    }}>
                      {/* Edit Icon */}
                      <span
                        style={{ cursor: 'pointer' }}
                        title="Edit"
                        onClick={() => handleEditClick(product)}
                      >
                        <svg width="26" height="26" fill="none" stroke="blue" strokeWidth="2" viewBox="0 0 24 24">
                          <path d="M15.232 5.232l3.536 3.536M9 13l6.586-6.586a2 2 0 112.828 2.828L11.828 15.828a2 2 0 01-2.828 0L9 13z"/>
                          <path d="M16 21H4a1 1 0 01-1-1V7a1 1 0 011-1h7"/>
                        </svg>
                      </span>
                      {/* Divider */}
                      <span style={{
                        borderLeft: '1px solid black',
                        height: '34px',
                        margin: '0 4px'
                      }}></span>
                      {/* Delete Icon */}
                      <span
                        style={{ cursor: 'pointer' }}
                        title="Delete"
                        onClick={() => handleDelete(product.id)}
                      >
                        <svg width="26" height="26" fill="none" stroke="red" strokeWidth="2" viewBox="0 0 24 24">
                          <line x1="18" y1="6" x2="6" y2="18"/>
                          <line x1="6" y1="6" x2="18" y2="18"/>
                        </svg>
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

       
        {modalOpen && (
          <div className="modal-overlay">
            <div className="modal-container">
              <button className="close-button" onClick={handleCloseModal} type="button">×</button>
              
              <div className="modal-header">
                <h2 className="modal-title">Edit Product</h2>
                <p className="modal-subtitle">Update product information</p>
              </div>

              <form onSubmit={handleEditSubmit}>
                <div className="form-group">
                  <label className="form-label" htmlFor="name">Product Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="form-input"
                    value={editForm.name}
                    onChange={handleEditChange}
                    placeholder="Enter product name"
                    required
                  />
                  <span className="input-icon">📦</span>
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="stock">Stock Quantity</label>
                  <input
                    type="number"
                    id="stock"
                    name="stock"
                    className="form-input"
                    value={editForm.stock}
                    onChange={handleEditChange}
                    placeholder="0"
                    min="0"
                    required
                  />
                  <span className="input-icon">📊</span>
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="price">Price ($)</label>
                  <input
                    type="number"
                    id="price"
                    name="price"
                    className="form-input"
                    value={editForm.price}
                    onChange={handleEditChange}
                    placeholder="0.00"
                    step="0.01"
                    min="0"
                    required
                  />
                  <span className="input-icon">💰</span>
                </div>

                <div className="button-group">
                  <button type="button" className="btn btn-cancel" onClick={handleCloseModal}>
                    Cancel
                  </button>
                  <button 
                    type="submit" 
                    className={`btn btn-save ${isSubmitting ? 'loading' : ''}`}
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Saving...' : 'Save Changes'}
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}

export default Report;