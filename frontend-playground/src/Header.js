import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ShoppingBag } from 'lucide-react';

function Header() {
  const navigate = useNavigate();

  const handleProductsClick = (e) => {
    e.preventDefault();
    if (localStorage.getItem('isLoggedIn')) {
      navigate('/report');
    } else {
      localStorage.setItem('redirectAfterLogin', '/report');
      navigate('/login');
    }
  };

  return (
    <header className="fixed top-0 left-0 w-full bg-white border-b border-gray-200 shadow z-50">
      <div className="max-w-7xl mx-auto flex items-center h-16 px-4">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
            <ShoppingBag className="w-5 h-5 text-white" />
          </div>
          <span className="text-xl font-bold text-gray-900">ShopSphere</span>
        </div>
        <nav className="ml-auto flex space-x-6">
          <Link to="/" className="text-black hover:text-blue-600 font-medium">Home</Link>
          <button
            onClick={handleProductsClick}
            className="text-black hover:text-blue-600 font-medium bg-transparent border-none outline-none cursor-pointer"
            style={{ background: 'none' }}
          >
            Products
          </button>
          <Link to="/purchase" className="text-black hover:text-blue-600 font-medium">Purchase</Link>
          <Link to="/add-product" className="text-black hover:text-blue-600 font-medium">Add Product</Link>
          <Link to="/login" className="text-black hover:text-blue-600 font-medium">Login</Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;