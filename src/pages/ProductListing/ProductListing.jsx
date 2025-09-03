import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import ProductCard from '../../components/ProductCard/ProductCard';
import FilterSidebar from '../../components/FilterSidebar/FilterSidebar';
import { Search, Filter } from 'lucide-react';

// ✅ Import global CSS file
import './ProductListing.css';

const ProductListing = () => {
  const { category } = useParams();
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filters, setFilters] = useState({
    priceRange: [0, 1000],
    materials: [],
    sortBy: 'featured',
  });
  const [showMobileFilters, setShowMobileFilters] = useState(false);

  useEffect(() => {
    const sampleProducts = [
      {
        id: '1',
        name: 'Diamond Stud Earrings',
        price: 299,
        category: 'earrings',
        material: 'gold',
        image:
          'https://images.pexels.com/photos/1454171/pexels-photo-1454171.jpeg?auto=compress&cs=tinysrgb&w=400',
        rating: 4.8,
        reviews: 124,
      },
      {
        id: '2',
        name: 'Pearl Drop Earrings',
        price: 189,
        category: 'earrings',
        material: 'silver',
        image:
          'https://images.pexels.com/photos/1453771/pexels-photo-1453771.jpeg?auto=compress&cs=tinysrgb&w=400',
        rating: 4.6,
        reviews: 89,
      },
      {
        id: '3',
        name: 'Gold Chain Necklace',
        price: 449,
        category: 'necklaces',
        material: 'gold',
        image:
          'https://images.pexels.com/photos/1191531/pexels-photo-1191531.jpeg?auto=compress&cs=tinysrgb&w=400',
        rating: 4.9,
        reviews: 156,
      },
      {
        id: '4',
        name: 'Silver Pendant Necklace',
        price: 229,
        category: 'necklaces',
        material: 'silver',
        image:
          'https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg?auto=compress&cs=tinysrgb&w=400',
        rating: 4.7,
        reviews: 203,
      },
      {
        id: '5',
        name: 'Rose Gold Hoops',
        price: 159,
        category: 'earrings',
        material: 'rose-gold',
        image:
          'https://images.pexels.com/photos/1454171/pexels-photo-1454171.jpeg?auto=compress&cs=tinysrgb&w=400',
        rating: 4.5,
        reviews: 67,
      },
      {
        id: '6',
        name: 'Emerald Statement Necklace',
        price: 789,
        category: 'necklaces',
        material: 'gold',
        image:
          'https://images.pexels.com/photos/1191531/pexels-photo-1191531.jpeg?auto=compress&cs=tinysrgb&w=400',
        rating: 5.0,
        reviews: 45,
      },
    ];

    setProducts(sampleProducts);
  }, []);

  useEffect(() => {
    let filtered = [...products];

    if (category) {
      filtered = filtered.filter((product) => product.category === category);
    }

    if (searchTerm) {
      filtered = filtered.filter((product) =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    filtered = filtered.filter(
      (product) =>
        product.price >= filters.priceRange[0] &&
        product.price <= filters.priceRange[1]
    );

    if (filters.materials.length > 0) {
      filtered = filtered.filter((product) =>
        filters.materials.includes(product.material)
      );
    }

    switch (filters.sortBy) {
      case 'price-low':
        filtered.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        filtered.sort((a, b) => b.price - a.price);
        break;
      case 'rating':
        filtered.sort((a, b) => b.rating - a.rating);
        break;
      default:
        break;
    }

    setFilteredProducts(filtered);
  }, [products, category, searchTerm, filters]);

  const getPageTitle = () => {
    if (category === 'earrings') return 'Earrings';
    if (category === 'necklaces') return 'Necklaces';
    return 'All Products';
  };

  const getPageDescription = () => {
    if (category === 'earrings')
      return 'Discover our exquisite collection of earrings, from elegant studs to statement drops.';
    if (category === 'necklaces')
      return 'Explore our luxury necklace collection, featuring timeless classics and modern designs.';
    return 'Browse our complete collection of luxury jewelry pieces.';
  };

  return (
    <div className="pageContainer">
      <div className="container">
        <div className="pageHeader">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {getPageTitle()}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {getPageDescription()}
          </motion.p>
        </div>

        <div className="controls">
          <div className="searchBox">
            <Search className="searchIcon" size={20} />
            <input
              type="text"
              placeholder="Search jewelry..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          <button
            className="filterButton"
            onClick={() => setShowMobileFilters(!showMobileFilters)}
          >
            <Filter size={16} />
            Filters
          </button>
        </div>

        <div className="contentArea">
          <FilterSidebar
            filters={filters}
            setFilters={setFilters}
            showMobile={showMobileFilters}
            onCloseMobile={() => setShowMobileFilters(false)}
          />

          <div>
            {filteredProducts.length > 0 ? (
              <div className="productGrid">
                {filteredProducts.map((product, index) => (
                  <motion.div
                    key={product.id}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                  >
                    <ProductCard product={product} />
                  </motion.div>
                ))}
              </div>
            ) : (
              <div className="noProducts">
                <h3>No products found</h3>
                <p>Try adjusting your search or filter criteria.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductListing;
