import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import './FilterSidebar.css'; 

const FilterSidebar = ({ filters, setFilters, showMobile, onCloseMobile }) => {
  const materials = [
    { id: 'gold', label: 'Gold' },
    { id: 'silver', label: 'Silver' },
    { id: 'rose-gold', label: 'Rose Gold' },
    { id: 'platinum', label: 'Platinum' }
  ];

  const handlePriceChange = (index, value) => {
    const newRange = [...filters.priceRange];
    newRange[index] = parseInt(value) || 0;
    setFilters(prev => ({ ...prev, priceRange: newRange }));
  };

  const handleMaterialChange = (materialId, checked) => {
    setFilters(prev => ({
      ...prev,
      materials: checked
        ? [...prev.materials, materialId]
        : prev.materials.filter(m => m !== materialId)
    }));
  };

  const SidebarContentComponent = () => (
    <div className="sidebar-content">
      <div className="sidebar-header">
        <h3>Filters</h3>
        {showMobile && (
          <button className="close-button" onClick={onCloseMobile}>
            <X size={20} />
          </button>
        )}
      </div>

      <div className="filter-section">
        <h4>Sort By</h4>
        <select
          className="sort-select"
          value={filters.sortBy}
          onChange={(e) => setFilters(prev => ({ ...prev, sortBy: e.target.value }))}
        >
          <option value="featured">Featured</option>
          <option value="price-low">Price: Low to High</option>
          <option value="price-high">Price: High to Low</option>
          <option value="rating">Highest Rated</option>
        </select>
      </div>

      <div className="filter-section">
        <h4>Price Range</h4>
        <div className="price-range">
          <div className="range-inputs">
            <input
              type="number"
              placeholder="Min"
              value={filters.priceRange[0]}
              onChange={(e) => handlePriceChange(0, e.target.value)}
            />
            <input
              type="number"
              placeholder="Max"
              value={filters.priceRange[1]}
              onChange={(e) => handlePriceChange(1, e.target.value)}
            />
          </div>
        </div>
      </div>

      <div className="filter-section">
        <h4>Material</h4>
        <div className="checkbox-group">
          {materials.map(material => (
            <label key={material.id} className="checkbox-item">
              <input
                type="checkbox"
                checked={filters.materials.includes(material.id)}
                onChange={(e) => handleMaterialChange(material.id, e.target.checked)}
              />
              <span>{material.label}</span>
            </label>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <>
      <div className="sidebar-container">
        <SidebarContentComponent />
      </div>

      <AnimatePresence>
        {showMobile && (
          <motion.div
            className="mobile-sidebar"
            initial={{ x: '-100%' }}
            animate={{ x: 0 }}
            exit={{ x: '-100%' }}
            transition={{ duration: 0.3 }}
          >
            <SidebarContentComponent />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default FilterSidebar;