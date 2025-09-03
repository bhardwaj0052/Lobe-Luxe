import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Star, Heart, Share2, Plus, Minus } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import './ProductDetail.css';

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);

  useEffect(() => {
    const sampleProduct = {
      id: id,
      name: 'Diamond Stud Earrings',
      price: 299,
      category: 'earrings',
      material: 'gold',
      images: [
        'https://images.pexels.com/photos/1454171/pexels-photo-1454171.jpeg?auto=compress&cs=tinysrgb&w=800',
        'https://images.pexels.com/photos/1453771/pexels-photo-1453771.jpeg?auto=compress&cs=tinysrgb&w=800',
        'https://images.pexels.com/photos/1191531/pexels-photo-1191531.jpeg?auto=compress&cs=tinysrgb&w=800',
        'https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg?auto=compress&cs=tinysrgb&w=800'
      ],
      rating: 4.8,
      reviews: 124,
      description: 'Exquisite diamond stud earrings crafted in 14k gold. These timeless pieces feature brilliant-cut diamonds that catch the light beautifully. Perfect for everyday elegance or special occasions. Each earring is meticulously handcrafted by our master jewelers to ensure exceptional quality and lasting beauty.',
      features: [
        '14k Gold Setting',
        'Brilliant Cut Diamonds',
        'Secure Push-Back Clasps',
        'Conflict-Free Diamonds',
        'Lifetime Warranty'
      ]
    };

    setProduct(sampleProduct);
  }, [id]);

  const handleAddToCart = () => {
    if (product) {
      addToCart({
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.images[0],
        quantity: quantity
      });
    }
  };

  const adjustQuantity = (delta) => {
    setQuantity(prev => Math.max(1, prev + delta));
  };

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div className="page-container">
      <div className="container">
        <button className="back-button" onClick={() => navigate(-1)}>
          <ArrowLeft size={16} />
          Back to Products
        </button>

        <div className="product-container">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="image-gallery">
              <div
                className="main-image"
                style={{ backgroundImage: `url(${product.images[selectedImage]})` }}
              />
              <div className="thumbnail-grid">
                {product.images.map((image, index) => (
                  <div
                    key={index}
                    className={`thumbnail ${index === selectedImage ? 'active' : ''}`}
                    style={{ backgroundImage: `url(${image})` }}
                    onClick={() => setSelectedImage(index)}
                  />
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="product-info">
              <div className="rating">
                <div className="stars">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={16}
                      fill={i < Math.floor(product.rating) ? '#D4AF37' : 'none'}
                      color="#D4AF37"
                    />
                  ))}
                </div>
                <span className="reviews">({product.reviews} reviews)</span>
              </div>

              <h1>{product.name}</h1>
              <div className="price">${product.price}</div>
              <p className="description">{product.description}</p>

              <div className="product-actions">
                <div className="quantity-selector">
                  <label>Quantity:</label>
                  <div className="quantity-controls">
                    <button onClick={() => adjustQuantity(-1)} disabled={quantity <= 1}>
                      <Minus size={16} />
                    </button>
                    <input
                      type="number"
                      value={quantity}
                      onChange={(e) =>
                        setQuantity(Math.max(1, parseInt(e.target.value) || 1))
                      }
                      min="1"
                    />
                    <button onClick={() => adjustQuantity(1)}>
                      <Plus size={16} />
                    </button>
                  </div>
                </div>

                <div className="action-buttons">
                  <button className="add-to-cart-button" onClick={handleAddToCart}>
                    Add to Cart
                  </button>
                  <button className="wishlist-button">
                    <Heart size={20} />
                  </button>
                  <button className="share-button">
                    <Share2 size={20} />
                  </button>
                </div>
              </div>

              <div className="features">
                <h3 style={{ marginBottom: '16px' }}>Features</h3>
                <ul style={{ listStyle: 'none' }}>
                  {product.features.map((feature, index) => (
                    <li
                      key={index}
                      style={{
                        marginBottom: '8px',
                        color: '#757575',
                        position: 'relative',
                        paddingLeft: '20px'
                      }}
                    >
                      <span
                        style={{
                          position: 'absolute',
                          left: '0',
                          color: '#D4AF37'
                        }}
                      >
                        ✓
                      </span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
