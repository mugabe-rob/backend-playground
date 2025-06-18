import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Header from './Header'; 
import './Purchase.css';

const API_BASE_URL = 'http://localhost:3000/api';

function Purchase() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState('');
  const [showConfirmDialog, setShowConfirmDialog] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [orderQuantity, setOrderQuantity] = useState(1);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      setLoading(true);
      const response = await axios.get(`${API_BASE_URL}/products`);
      setProducts(response.data);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching products:', error);
      setMessage('Error loading products');
      setLoading(false);
    }
  };

  const handlePurchaseClick = (product) => {
    if (product.stock <= 0) {
      setMessage('This product is out of stock!');
      return;
    }
    setSelectedProduct(product);
    setOrderQuantity(1);
    setShowConfirmDialog(true);
    setMessage('');
  };

  const handleConfirmPurchase = async () => {
    if (!selectedProduct) return;

    if (orderQuantity > selectedProduct.stock) {
      setMessage(`Only ${selectedProduct.stock} items available in stock!`);
      return;
    }

    try {
      const newStock = selectedProduct.stock - orderQuantity;
      await axios.put(`${API_BASE_URL}/products/${selectedProduct.id}`, {
        stock: newStock
      });

      setProducts(products.map(product =>
        product.id === selectedProduct.id
          ? { ...product, stock: newStock }
          : product
      ));

      setMessage(`Successfully purchased ${orderQuantity} ${selectedProduct.name}(s)!`);
      setShowConfirmDialog(false);
      setSelectedProduct(null);
      setOrderQuantity(1);

    } catch (error) {
      console.error('Error updating stock:', error);
      setMessage('Error processing purchase. Please try again.');
    }
  };

  const handleCancelPurchase = () => {
    setShowConfirmDialog(false);
    setSelectedProduct(null);
    setOrderQuantity(1);
    setMessage('');
  };

  const handleQuantityChange = (e) => {
    const quantity = parseInt(e.target.value);
    if (quantity > 0 && quantity <= selectedProduct.stock) {
      setOrderQuantity(quantity);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex flex-col bg-gray-100">
        <Header />
        <div className="flex flex-1 items-center justify-center">
          <div className="loading-spinner">
            <div className="spinner"></div>
            <p className="loading-text">Loading products...</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <div className="container mx-auto px-4 py-8">
        <div className="header-section">
          <h1 className="page-title">Available Products</h1>
          
        </div>

        {/* Success/Error Message */}
        {message && (
          <div className={`message ${message.includes('Successfully') ? 'success' : 'error'}`}>
            {message}
          </div>
        )}

        {/* Products Grid */}
        <div className="products-grid">
          {products.length === 0 ? (
            <div className="no-products">
              <p>No products available at the moment.</p>
            </div>
          ) : (
            products.map(product => (
              <div key={product.id} className="product-card">
                <div className="product-header">
                  <h3 className="product-name">{product.name}</h3>
                  <div className="product-price">${product.price}</div>
                </div>
                
                <div className="product-details">
                  <div className="stock-info">
                    <span className="stock-label">Stock:</span>
                    <span className={`stock-value ${product.stock <= 0 ? 'out-of-stock' : product.stock <= 5 ? 'low-stock' : ''}`}>
                      {product.stock <= 0 ? 'Out of Stock' : `${product.stock} available`}
                    </span>
                  </div>
                  
                  <div className="product-dates">
                    <small className="date-text">
                      Added: {new Date(product.createdAt).toLocaleDateString()}
                    </small>
                  </div>
                </div>

                <button
                  onClick={() => handlePurchaseClick(product)}
                  disabled={product.stock <= 0}
                  className={`purchase-btn ${product.stock <= 0 ? 'disabled' : ''}`}
                >
                  {product.stock <= 0 ? 'Out of Stock' : 'Purchase'}
                </button>
              </div>
            ))
          )}
        </div>

        {/* Confirmation Dialog */}
        {showConfirmDialog && selectedProduct && (
          <div className="dialog-overlay">
            <div className="dialog-content">
              <h3 className="dialog-title">Confirm Purchase</h3>
              
              <div className="dialog-product-info">
                <p><strong>Product:</strong> {selectedProduct.name}</p>
                <p><strong>Price:</strong> ${selectedProduct.price} each</p>
                <p><strong>Available Stock:</strong> {selectedProduct.stock}</p>
              </div>

              <div className="quantity-section">
                <label htmlFor="quantity" className="quantity-label">
                  Quantity:
                </label>
                <input
                  type="number"
                  id="quantity"
                  min="1"
                  max={selectedProduct.stock}
                  value={orderQuantity}
                  onChange={handleQuantityChange}
                  className="quantity-input"
                />
              </div>

              <div className="total-section">
                <p className="total-price">
                  <strong>Total: ${(selectedProduct.price * orderQuantity).toFixed(2)}</strong>
                </p>
              </div>

              <div className="dialog-actions">
                <button
                  onClick={handleCancelPurchase}
                  className="cancel-btn"
                >
                  Cancel
                </button>
                <button
                  onClick={handleConfirmPurchase}
                  className="confirm-btn"
                >
                  Confirm Purchase
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Purchase;