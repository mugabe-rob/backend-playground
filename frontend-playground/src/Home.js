import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag, User, Menu, X, ArrowRight, Star, Zap, Shield } from 'lucide-react';

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80)'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/50 to-transparent"></div>
      </div>

      {/* Navigation Bar */}
      <nav className="relative z-50 bg-white/10 backdrop-blur-md border-b border-white/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                <ShoppingBag className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-white">ShopSphere</span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <Link to="/" className="nav-link text-white hover:text-blue-300 transition-colors duration-300 font-medium">
                Home
              </Link>
              <Link to="/report" className="nav-link text-white hover:text-blue-300 transition-colors duration-300 font-medium">
                Products
              </Link>
              <Link to="/buy" className="nav-link text-white hover:text-blue-300 transition-colors duration-300 font-medium">
                Purchase
              </Link>
              <Link to="/login" className="nav-link text-white hover:text-blue-300 transition-colors duration-300 font-medium flex items-center space-x-1">
                <User className="w-4 h-4" />
                <span>Login</span>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMenu}
              className="md:hidden text-white hover:text-blue-300 transition-colors duration-300"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        <div className={`md:hidden absolute top-16 left-0 right-0 bg-white/10 backdrop-blur-md border-b border-white/20 transition-all duration-300 ${isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
          <div className="px-4 py-4 space-y-3">
            <Link to="/" className="block text-white hover:text-blue-300 transition-colors duration-300 font-medium py-2">
              Home
            </Link>
            <Link to="/report" className="block text-white hover:text-blue-300 transition-colors duration-300 font-medium py-2">
              Products
            </Link>
            <Link to="/buy" className="block text-white hover:text-blue-300 transition-colors duration-300 font-medium py-2">
              Purchase
            </Link>
            <Link to="/login" className="block text-white hover:text-blue-300 transition-colors duration-300 font-medium py-2 flex items-center space-x-2">
              <User className="w-4 h-4" />
              <span>Login</span>
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="relative z-10 flex items-center justify-center min-h-screen px-4 sm:px-6 lg:px-8">
        <div className={`text-center max-w-4xl mx-auto transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          {/* Welcome Badge */}
          <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-500/20 to-purple-600/20 backdrop-blur-sm border border-white/30 rounded-full text-sm font-medium text-white mb-8 animate-pulse">
            <Zap className="w-4 h-4 mr-2" />
            Welcome to the Future of Shopping
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight">
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              ShopSphere
            </span>
            <br />
            <span className="text-gray-800">E-Commerce</span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-gray-800 mb-8 max-w-2xl mx-auto leading-relaxed font-medium">
            Discover amazing products, unbeatable prices, and seamless shopping experiences. 
            Your digital marketplace awaits.
          </p>

          {/* Feature Pills */}
          <div className="flex flex-wrap justify-center gap-4 mb-10">
            <div className="flex items-center px-4 py-2 bg-white/90 backdrop-blur-sm rounded-full text-gray-700 border border-gray-200 shadow-sm">
              <Star className="w-4 h-4 mr-2 text-yellow-500" />
              Premium Quality
            </div>
            <div className="flex items-center px-4 py-2 bg-white/90 backdrop-blur-sm rounded-full text-gray-700 border border-gray-200 shadow-sm">
              <Shield className="w-4 h-4 mr-2 text-green-500" />
              Secure Shopping
            </div>
            <div className="flex items-center px-4 py-2 bg-white/90 backdrop-blur-sm rounded-full text-gray-700 border border-gray-200 shadow-sm">
              <Zap className="w-4 h-4 mr-2 text-blue-500" />
              Fast Delivery
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link 
              to="/report" 
              className="group relative px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center space-x-2 no-underline"
            >
              <span>Start Shopping</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
            <Link 
              to="/report" 
              className="px-8 py-4 bg-white/90 backdrop-blur-sm text-gray-700 font-semibold rounded-lg border border-gray-200 hover:bg-white hover:shadow-md transition-all duration-300 no-underline"
            >
              Browse Products
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 pt-8 border-t border-gray-300">
            <div className="text-center">
              <div className="text-3xl font-bold text-gray-800 mb-2">10K+</div>
              <div className="text-gray-600 text-sm font-medium">Products</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-gray-800 mb-2">50K+</div>
              <div className="text-gray-600 text-sm font-medium">Customers</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-gray-800 mb-2">99.9%</div>
              <div className="text-gray-600 text-sm font-medium">Uptime</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-gray-800 mb-2">24/7</div>
              <div className="text-gray-600 text-sm font-medium">Support</div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-gradient-to-r from-blue-500/20 to-purple-600/20 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-gradient-to-r from-pink-500/20 to-orange-500/20 rounded-full blur-xl animate-pulse delay-1000"></div>
      <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-gradient-to-r from-green-500/20 to-blue-500/20 rounded-full blur-xl animate-pulse delay-500"></div>

      <style jsx>{`
        .nav-link {
          position: relative;
        }
        .nav-link::after {
          content: '';
          position: absolute;
          width: 0;
          height: 2px;
          bottom: -4px;
          left: 50%;
          background: linear-gradient(to right, #3b82f6, #8b5cf6);
          transition: all 0.3s ease;
          transform: translateX(-50%);
        }
        .nav-link:hover::after {
          width: 100%;
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}