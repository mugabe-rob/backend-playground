import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ShoppingBag, 
  Mail, 
  Phone, 
  MapPin, 
  Facebook, 
  Twitter, 
  Instagram, 
  Linkedin,
  ArrowUp,
  Send
} from 'lucide-react';
import './Footer.css';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="footer-container">
      {/* Floating Background Elements */}
      <div className="footer-bg-elements">
        <div className="bg-element bg-element-1"></div>
        <div className="bg-element bg-element-2"></div>
        <div className="bg-element bg-element-3"></div>
      </div>

      {/* Newsletter Section */}
      <div className="newsletter-section">
        <div className="container">
          <div className="newsletter-content">
            <div className="newsletter-text">
              <h3>Stay Updated with ShopSphere</h3>
              <p>Get exclusive deals, new arrivals, and insider updates delivered to your inbox.</p>
            </div>
            <div className="newsletter-form">
              <div className="input-group">
                <input 
                  type="email" 
                  placeholder="Enter your email address"
                  className="newsletter-input"
                />
                <button className="newsletter-btn">
                  <Send className="w-5 h-5" />
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="footer-main">
        <div className="container">
          <div className="footer-grid">
            {/* Company Info */}
            <div className="footer-column">
              <div className="footer-logo">
                <div className="logo-icon">
                  <ShoppingBag className="w-8 h-8" />
                </div>
                <span className="logo-text">ShopSphere</span>
              </div>
              <p className="footer-description">
                Your premier destination for quality products, unbeatable prices, and exceptional shopping experiences. Discover the future of e-commerce with ShopSphere.
              </p>
              <div className="social-links">
                <a href="https://www.facebook.com/mugabe.roberto.52/" className="social-link" target="_blank" rel="noopener noreferrer">
                  <Facebook className="w-5 h-5" />
                </a>
                <a href="https://x.com/mugaberobertson" className="social-link" target="_blank" rel="noopener noreferrer">
                  <Twitter className="w-5 h-5" />
                </a>
                <a href="https://www.instagram.com/mugaberobertson/" className="social-link" target="_blank" rel="noopener noreferrer">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href="https://www.linkedin.com/in/robert-mugabe/" className="social-link" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div className="footer-column">
              <h4 className="footer-title">Quick Links</h4>
              <ul className="footer-links">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/purchase">Products</Link></li>
                <li><Link to="/purchase">Shop Now</Link></li>
                <li><Link to="/report">Reports</Link></li>
                <li><Link to="/login">My Account</Link></li>
              </ul>
            </div>

            {/* Customer Service */}
            <div className="footer-column">
              <h4 className="footer-title">Customer Service</h4>
              <ul className="footer-links">
                <li><button type="button" className="footer-link-btn">Help Center</button></li>
                <li><button type="button" className="footer-link-btn">Shipping Info</button></li>
                <li><button type="button" className="footer-link-btn">Returns & Exchanges</button></li>
                <li><button type="button" className="footer-link-btn">Size Guide</button></li>
                <li><button type="button" className="footer-link-btn">Track Your Order</button></li>
              </ul>
            </div>

            {/* Contact Info */}
            <div className="footer-column">
              <h4 className="footer-title">Get in Touch</h4>
              <div className="contact-info">
                <div className="contact-item">
                  <MapPin className="w-5 h-5" />
                  <span>KN 5 Rd, Remera, Kigali, Rwanda</span>
                </div>
                <div className="contact-item">
                  <Phone className="w-5 h-5" />
                  <span>+250 (788) - (432) - (134)</span>
                </div>
                <div className="contact-item">
                  <Mail className="w-5 h-5" />
                  <span>shopsphere.rw@yahoo.com</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <button className="scroll-to-top" onClick={scrollToTop} aria-label="Scroll to top">
        <ArrowUp className="w-5 h-5" />
      </button>
    </footer>
  );
};

export default Footer;