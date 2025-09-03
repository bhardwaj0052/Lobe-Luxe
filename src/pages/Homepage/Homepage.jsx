import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, Shield, Truck, Award } from 'lucide-react';
import './Homepage.css';

const Homepage = () => {
  const features = [
    {
      icon: <Award size={24} />,
      title: "Premium Quality",
      description: "Handcrafted jewelry made with the finest materials and attention to detail."
    },
    {
      icon: <Shield size={24} />,
      title: "Lifetime Warranty",
      description: "Every piece comes with our comprehensive lifetime warranty for peace of mind."
    },
    {
      icon: <Truck size={24} />,
      title: "Free Shipping",
      description: "Complimentary shipping on all orders with secure, insured delivery."
    },
    {
      icon: <Star size={24} />,
      title: "Expert Curation",
      description: "Each piece is carefully selected by our team of jewelry experts."
    }
  ];

  const collections = [
    {
      title: "Elegant Earrings",
      description: "Discover our stunning collection of earrings, from delicate studs to statement pieces.",
      image: "https://images.pexels.com/photos/1453771/pexels-photo-1453771.jpeg?auto=compress&cs=tinysrgb&w=600",
      link: "/products/earrings"
    },
    {
      title: "Luxury Necklaces",
      description: "Explore our exquisite necklaces that add sophistication to any ensemble.",
      image: "https://images.pexels.com/photos/1191531/pexels-photo-1191531.jpeg?auto=compress&cs=tinysrgb&w=600",
      link: "/products/necklaces"
    }
  ];

  return (
    <>
      <section className="hero-section">
        <div className="hero-content">
          <div className="hero-text">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Luxury Redefined
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Discover our carefully curated collection of exquisite earrings and necklaces. 
              Each piece tells a story of elegance, craftsmanship, and timeless beauty.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <Link to="/products" className="cta-button">
                Explore Collection
                <ArrowRight size={20} />
              </Link>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            <div className="hero-image" />
          </motion.div>
        </div>
      </section>

      <section className="features-section">
        <div className="features-grid">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="feature-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="icon">{feature.icon}</div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="collection-preview">
        <h2 className="section-title">Featured Collections</h2>
        <div className="collection-grid">
          {collections.map((collection, index) => (
            <motion.div
              key={index}
              className="collection-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <div
                className="collection-image"
                style={{ backgroundImage: `url(${collection.image})` }}
              />
              <div className="collection-content">
                <h3>{collection.title}</h3>
                <p>{collection.description}</p>
                <Link to={collection.link} className="view-collection-button">
                  View Collection
                  <ArrowRight size={16} />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Homepage;