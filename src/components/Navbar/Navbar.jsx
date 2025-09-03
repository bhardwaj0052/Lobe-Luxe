import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ShoppingBag, User, Search, Menu, X } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import { useAuth } from '../../context/AuthContext';
import './Navbar.css';
const Navbar = () => {
  const { cartItems } = useCart();
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const cartItemCount = cartItems.reduce((total, item) => total + item.quantity, 0);

  const handleAuthClick = () => {
    if (user) {
      logout();
    } else {
      navigate('/auth');
    }
  };

  return (
    <nav className="nav-container">
      <div className="nav-content">
        <Link to="/" className="logo">Lobe Luxe</Link>

        <div className="nav-links">
          <Link to="/products/earrings" className="nav-link">Earrings</Link>
          <Link to="/products/necklaces" className="nav-link">Necklaces</Link>
          <Link to="/products" className="nav-link">All Products</Link>
        </div>

        <div className="nav-actions">
          <button className="icon-button">
            <Search size={20} />
          </button>

          <button className="icon-button" onClick={handleAuthClick}>
            <User size={20} />
          </button>

          <button className="icon-button" onClick={() => navigate('/cart')}>
            <ShoppingBag size={20} />
            {cartItemCount > 0 && <span className="cart-badge">{cartItemCount}</span>}
          </button>

          <button className="mobile-menu-button" onClick={() => setMobileMenuOpen(true)}>
            <Menu size={24} />
          </button>
        </div>
      </div>

      <AnimatePresence className="mobile-view">
        {mobileMenuOpen && (
          <motion.div
            className="mobile-menu"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <button
              className="icon-button"
              style={{ position: 'absolute', top: '20px', right: '20px' }}
              onClick={() => setMobileMenuOpen(false)}
            >
              <X size={24} />
            </button>

            <Link to="/" className="mobile-nav-link" onClick={() => setMobileMenuOpen(false)}>
              Home
            </Link>
            <Link to="/products/earrings" className="mobile-nav-link" onClick={() => setMobileMenuOpen(false)}>
              Earrings
            </Link>
            <Link to="/products/necklaces" className="mobile-nav-link" onClick={() => setMobileMenuOpen(false)}>
              Necklaces
            </Link>
            <Link to="/products" className="mobile-nav-link" onClick={() => setMobileMenuOpen(false)}>
              All Products
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
