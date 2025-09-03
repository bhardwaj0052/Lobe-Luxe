import React from 'react';
import { Instagram, Facebook, Twitter } from 'lucide-react';
import './Footer.css'; // ✅ Import external CSS

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        <div className="footer-section">
          <h3>Lobe Luxe</h3>
          <p>Exquisite jewelry crafted with passion and precision. Discover our collection of handpicked earrings and necklaces that define elegance.</p>
          <div className="social-links">
            <a href="#" className="social-icon" aria-label="Instagram">
              <Instagram size={20} />
            </a>
            <a href="#" className="social-icon" aria-label="Facebook">
              <Facebook size={20} />
            </a>
            <a href="#" className="social-icon" aria-label="Twitter">
              <Twitter size={20} />
            </a>
          </div>
        </div>

        <div className="footer-section">
          <h3>Quick Links</h3>
          <a href="/products/earrings">Earrings</a>
          <a href="/products/necklaces">Necklaces</a>
          <a href="/products">All Products</a>
          <a href="/auth">My Account</a>
        </div>

        <div className="footer-section">
          <h3>Customer Care</h3>
          <a href="/contact">Contact Us</a>
          <a href="/shipping">Shipping Info</a>
          <a href="/returns">Returns</a>
          <a href="/size-guide">Size Guide</a>
        </div>

        <div className="footer-section">
          <h3>Contact</h3>
          <p>Email: hello@lobeluxe.com</p>
          <p>Phone: +91 **********</p>
          <p>Hours: Mon-Fri 9AM-6PM EST</p>
        </div>
      </div>

      <div className="footer-copyright">
        <p>&copy; 2025 Lobe Luxe. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
