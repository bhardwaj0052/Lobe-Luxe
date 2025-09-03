import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Plus, Edit, Trash2 } from 'lucide-react';
import './AdminDashboard.css';

const AdminDashboard = () => {
  const [products, setProducts] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [editingProduct, setEditingProduct] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    price: '',
    category: 'earrings',
    material: 'gold',
    description: '',
    image: ''
  });

  useEffect(() => {
    const sampleProducts = [
      {
        id: '1',
        name: 'Diamond Stud Earrings',
        price: 299,
        category: 'earrings',
        material: 'gold',
        image: 'https://images.pexels.com/photos/1454171/pexels-photo-1454171.jpeg?auto=compress&cs=tinysrgb&w=400',
        description: 'Elegant diamond stud earrings in 14k gold setting.'
      },
      {
        id: '2',
        name: 'Pearl Drop Earrings',
        price: 189,
        category: 'earrings',
        material: 'silver',
        image: 'https://images.pexels.com/photos/1453771/pexels-photo-1453771.jpeg?auto=compress&cs=tinysrgb&w=400',
        description: 'Classic pearl drop earrings with sterling silver setting.'
      },
      {
        id: '3',
        name: 'Gold Chain Necklace',
        price: 449,
        category: 'necklaces',
        material: 'gold',
        image: 'https://images.pexels.com/photos/1191531/pexels-photo-1191531.jpeg?auto=compress&cs=tinysrgb&w=400',
        description: 'Luxurious 18k gold chain necklace with pendant.'
      }
    ];
    setProducts(sampleProducts);
  }, []);

  const handleAddProduct = () => {
    setEditingProduct(null);
    setFormData({
      name: '',
      price: '',
      category: 'earrings',
      material: 'gold',
      description: '',
      image: ''
    });
    setShowModal(true);
  };

  const handleEditProduct = (product) => {
    setEditingProduct(product);
    setFormData(product);
    setShowModal(true);
  };

  const handleDeleteProduct = (productId) => {
    setProducts(prev => prev.filter(p => p.id !== productId));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (editingProduct) {
      setProducts(prev => prev.map(p =>
        p.id === editingProduct.id
          ? { ...formData, id: editingProduct.id, price: parseFloat(formData.price) }
          : p
      ));
    } else {
      const newProduct = {
        ...formData,
        id: Date.now().toString(),
        price: parseFloat(formData.price)
      };
      setProducts(prev => [...prev, newProduct]);
    }
    setShowModal(false);
  };

  const handleInputChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <div className="page-container">
      <div className="dashboard-header">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Admin Dashboard
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Manage your jewelry collection and inventory
        </motion.p>
      </div>

      <div className="dashboard-content">
        <div className="actions-bar">
          <h2>Products ({products.length})</h2>
          <button className="add-product-button" onClick={handleAddProduct}>
            <Plus size={16} />
            Add Product
          </button>
        </div>

        <div className="products-grid">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              className="product-card"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div
                className="product-image"
                style={{ backgroundImage: `url(${product.image})` }}
              />
              <div className="product-info">
                <h3>{product.name}</h3>
                <div className="price">${product.price}</div>
                <div className="category">{product.category}</div>
                <div className="product-actions">
                  <button onClick={() => handleEditProduct(product)}>
                    <Edit size={14} />
                  </button>
                  <button className="delete" onClick={() => handleDeleteProduct(product.id)}>
                    <Trash2 size={14} />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {showModal && (
        <motion.div
          className="modal"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={(e) => e.target === e.currentTarget && setShowModal(false)}
        >
          <div className="modal-content">
            <h2>{editingProduct ? 'Edit Product' : 'Add New Product'}</h2>
            <form className="form" onSubmit={handleFormSubmit}>
              <div className="input-group">
                <label>Product Name</label>
                <input
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <div className="input-group">
                <label>Price ($)</label>
                <input
                  name="price"
                  type="number"
                  step="0.01"
                  value={formData.price}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <div className="input-group">
                <label>Category</label>
                <select
                  name="category"
                  value={formData.category}
                  onChange={handleInputChange}
                >
                  <option value="earrings">Earrings</option>
                  <option value="necklaces">Necklaces</option>
                </select>
              </div>

              <div className="input-group">
                <label>Material</label>
                <select
                  name="material"
                  value={formData.material}
                  onChange={handleInputChange}
                >
                  <option value="gold">Gold</option>
                  <option value="silver">Silver</option>
                  <option value="rose-gold">Rose Gold</option>
                  <option value="platinum">Platinum</option>
                </select>
              </div>

              <div className="input-group">
                <label>Image URL</label>
                <input
                  name="image"
                  type="url"
                  value={formData.image}
                  onChange={handleInputChange}
                  placeholder="https://example.com/image.jpg"
                />
              </div>

              <div className="input-group">
                <label>Description</label>
                <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleInputChange}
                  placeholder="Product description..."
                />
              </div>

              <div className="form-actions">
                <button
                  type="button"
                  className="secondary"
                  onClick={() => setShowModal(false)}
                >
                  Cancel
                </button>
                <button type="submit" className="primary">
                  {editingProduct ? 'Update Product' : 'Add Product'}
                </button>
              </div>
            </form>
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default AdminDashboard;
