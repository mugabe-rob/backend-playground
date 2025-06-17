import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag } from 'lucide-react';

function Header() {
  return (
    <header className="w-full bg-white border-b border-gray-200 shadow mb-6">
      <div className="max-w-7xl mx-auto flex items-center h-16 px-4">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
            <ShoppingBag className="w-5 h-5 text-white" />
          </div>
          <span className="text-xl font-bold text-gray-900">ShopSphere</span>
        </div>
        <nav className="ml-auto flex space-x-6">
          <Link to="/" className="text-black hover:text-blue-600 font-medium">Home</Link>
          <Link to="/login" className="text-black hover:text-blue-600 font-medium">Products</Link>
          <Link to="/purchase" className="text-black hover:text-blue-600 font-medium">Purchase</Link>
          <Link to="/login" className="text-black hover:text-blue-600 font-medium">Login</Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;