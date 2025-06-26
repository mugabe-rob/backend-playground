import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ShoppingBag, User, Menu, X, ArrowRight, Star, Zap, Shield } from 'lucide-react';

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLoginClick = () => {
    navigate('/login');
  };

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Navigation Bar */}
      <nav className="relative z-50 bg-white border-b border-gray-200 shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-orange-500 to-yellow-600 rounded-lg flex items-center justify-center">
                <ShoppingBag className="w-5 h-5 text-black" />
              </div>
              <span className="text-xl font-bold text-black">ShopSphere</span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <Link to="/" className="nav-link text-black hover:text-blue-300 transition-colors duration-300 font-medium">
                Home
              </Link>
              <Link to="/login" className="nav-link text-black hover:text-blue-300 transition-colors duration-300 font-medium">
                Products
              </Link>
              <Link to="/purchase" className="nav-link text-black hover:text-blue-300 transition-colors duration-300 font-medium">
                Purchase
              </Link>
              <button
                onClick={handleLoginClick}
                className="flex items-center space-x-1 px-5 py-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold shadow hover:from-blue-600 hover:to-purple-700 transition-all duration-200 focus:outline-none"
              >
                <User className="w-4 h-4" />
                <span>Login</span>
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMenu}
              className="md:hidden text-black hover:text-blue-300 transition-colors duration-300"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        <div className={`md:hidden absolute top-16 left-0 right-0 bg-white/10 backdrop-blur-md border-b border-white/20 transition-all duration-300 ${isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
          <div className="px-4 py-4 space-y-3">
            <Link to="/" className="block text-black hover:text-blue-300 transition-colors duration-300 font-medium py-2">
              Home
            </Link>
            <Link to="/report" className="block text-black hover:text-blue-300 transition-colors duration-300 font-medium py-2">
              Products
            </Link>
            <Link to="/buy" className="block text-black hover:text-blue-300 transition-colors duration-300 font-medium py-2">
              Purchase
            </Link>
            <button
              onClick={handleLoginClick}
              className="flex items-center space-x-2 w-full justify-center py-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold shadow hover:from-blue-600 hover:to-purple-700 transition-all duration-200 focus:outline-none"
            >
              <User className="w-4 h-4" />
              <span>Login</span>
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="relative z-10 flex items-center justify-center min-h-screen px-4 sm:px-6 lg:px-8">
        <div className={`text-center max-w-4xl mx-auto transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          {/* Welcome Badge */}
          <div
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-green-400/80 to-blue-600/80 shadow-lg border border-white/40 rounded-full text-base md:text-lg font-semibold text-white mb-10 animate-pulse"
            style={{
              backdropFilter: 'blur(8px)',
              letterSpacing: '0.03em',
              boxShadow: '0 4px 24px 0 rgba(34,197,94,0.10), 0 1.5px 8px 0 rgba(59,130,246,0.10)'
            }}
          >
            <span className="flex items-center justify-center w-8 h-8 rounded-full bg-white/20 mr-3 shadow">
              <Zap className="w-5 h-5 text-yellow-300" />
            </span>
            <span className="drop-shadow-lg">Welcome to the Future of Shopping</span>
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

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              to="/purchase"
              className="newsletter-btn no-underline"
              style={{
                padding: '1rem 2rem',
                background: 'linear-gradient(135deg, #ff6b6b 0%, #ff8e53 100%)',
                border: 'none',
                borderRadius: '8px',
                color: 'white',
                fontWeight: 600,
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                transition: 'all 0.3s ease',
                boxShadow: '0 4px 15px rgba(255, 107, 107, 0.3)'
              }}
            >
              <span>Start Shopping</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              to="/purchase"
              className="px-8 py-4 bg-white/90 backdrop-blur-sm text-gray-700 font-semibold rounded-lg border border-gray-200 hover:bg-white hover:shadow-md transition-all duration-300 no-underline"
            >
              Browse Products
            </Link>
          </div>

          <style jsx>{`
            .newsletter-btn:hover {
              transform: translateY(-2px);
              box-shadow: 0 8px 25px rgba(255, 107, 107, 0.4);
            }
          `}</style>

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
          background: linear-gradient(to right, #3b82f6,rgb(71, 154, 248));
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