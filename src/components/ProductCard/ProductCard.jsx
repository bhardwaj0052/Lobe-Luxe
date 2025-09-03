import React from 'react';
import { Link } from 'react-router-dom';
import { Star, Heart, ShoppingBag } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import './ProductCard.css';

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();

  const handleAddToCart = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image || product.images?.[0],
      quantity: 1
    });
  };

  const handleWishlist = (e) => {
    e.preventDefault();
    e.stopPropagation();
    // Implement wishlist functionality
  };

  return (
    <div className="card">
      <div className="image-container">
        <div
          className="product-image"
          style={{ backgroundImage: `url(${product.image || product.images?.[0]})` }}
        />
        <div className="quick-actions">
          <button className="action-button" onClick={handleWishlist}>
            <Heart size={16} />
          </button>
          <button className="action-button" onClick={handleAddToCart}>
            <ShoppingBag size={16} />
          </button>
        </div>
        <div className="add-to-cart-overlay" onClick={handleAddToCart}>
          Add to Cart
        </div>
      </div>

      <div className="product-info">
        <div className="product-rating">
          <div className="stars">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                size={14}
                fill={i < Math.floor(product.rating || 4.5) ? '#D4AF37' : 'none'}
                color="#D4AF37"
              />
            ))}
          </div>
          <span className="rating-text">
            {product.rating || 4.5} ({product.reviews || 0} reviews)
          </span>
        </div>

        <Link to={`/product/${product.id}`} className="product-name">
          {product.name}
        </Link>

        <div className="product-price">${product.price}</div>

        <span className="product-material">{product.material}</span>
      </div>
    </div>
  );
};

export default ProductCard;
