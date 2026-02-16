import React, { useState, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Filter, ChevronDown, SlidersHorizontal, X, ArrowUpDown } from 'lucide-react';
import { PRODUCTS, CATEGORIES } from '../data/mockData';
import ProductCard from '../components/ProductCard';
import { motion, AnimatePresence } from 'framer-motion';

const Shop: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  
  const categoryFilter = searchParams.get('category') || 'All';
  const sortFilter = searchParams.get('sort') || 'newest';

  const filteredProducts = useMemo(() => {
    let result = [...PRODUCTS];
    if (categoryFilter !== 'All') {
      result = result.filter(p => p.category === categoryFilter);
    }
    if (sortFilter === 'price-low') result.sort((a, b) => a.price - b.price);
    if (sortFilter === 'price-high') result.sort((a, b) => b.price - a.price);
    return result;
  }, [categoryFilter, sortFilter]);

  const setCategory = (cat: string) => {
    if (cat === 'All') searchParams.delete('category');
    else searchParams.set('category', cat);
    setSearchParams(searchParams);
  };

  return (
    <div className="pt-24 md:pt-40 pb-20 min-h-screen bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <header className="mb-8 md:mb-16 text-center max-w-2xl mx-auto">
          <span className="text-pink-600 font-black text-[8px] md:text-[10px] uppercase tracking-[0.4em] mb-2 block">New Season</span>
          <h1 className="text-3xl md:text-6xl font-black mb-4 uppercase tracking-tighter text-slate-900">Collection</h1>
          <p className="text-slate-500 text-xs md:text-base font-medium">Over 500+ fresh styles designed for you.</p>
        </header>

        {/* Filters Toolbar - Glassmorphism */}
        <div className="flex flex-wrap items-center justify-between gap-3 mb-8 p-3 md:p-6 bg-white/70 backdrop-blur-xl rounded-2xl md:rounded-[2rem] border border-white/50 sticky top-16 md:top-24 z-30 shadow-sm">
          <button 
            onClick={() => setIsFilterOpen(!isFilterOpen)}
            className="flex items-center gap-1.5 bg-slate-900 text-white px-5 py-2.5 md:px-8 md:py-3.5 rounded-xl md:rounded-2xl hover:bg-pink-600 transition-all shadow-lg font-bold text-[10px] md:text-sm uppercase tracking-widest"
          >
            <SlidersHorizontal size={14} className="md:w-[18px]" />
            <span>Filters</span>
          </button>

          <div className="flex items-center gap-2 px-3 py-2 bg-slate-100 rounded-xl">
            <ArrowUpDown size={12} className="text-slate-400" />
            <select
              value={sortFilter}
              onChange={(e) => {
                searchParams.set('sort', e.target.value);
                setSearchParams(searchParams);
              }}
              className="bg-transparent text-slate-900 text-[9px] md:text-xs font-black uppercase outline-none cursor-pointer tracking-widest"
            >
              <option value="newest">Latest</option>
              <option value="price-low">Low Price</option>
              <option value="price-high">High Price</option>
            </select>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-3 md:gap-8">
          {filteredProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="py-24 text-center flex flex-col items-center">
            <h3 className="text-xl font-black text-slate-800 uppercase">No Styles Found</h3>
          </div>
        )}
      </div>

      {/* Filter Sidebar Modern Drawer */}
      <AnimatePresence>
        {isFilterOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsFilterOpen(false)}
              className="fixed inset-0 bg-slate-900/40 z-[60] backdrop-blur-sm"
            />
            <motion.div
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              className="fixed top-0 left-0 h-full w-full max-w-xs bg-white z-[70] p-8 overflow-y-auto rounded-r-3xl shadow-2xl"
            >
              <div className="flex items-center justify-between mb-10">
                <h2 className="text-2xl font-black uppercase tracking-tighter">Filters</h2>
                <button onClick={() => setIsFilterOpen(false)} className="p-2 bg-slate-100 rounded-full"><X size={18} /></button>
              </div>

              <div className="space-y-10">
                <div>
                  <h4 className="text-[10px] font-black uppercase tracking-widest text-pink-600 mb-5">Categories</h4>
                  <div className="flex flex-col gap-4">
                    {['All', 'Men', 'Women', 'Kids', 'Daily'].map(cat => (
                      <label key={cat} className="flex items-center justify-between cursor-pointer">
                        <span className={`text-xs font-bold ${categoryFilter === cat ? 'text-slate-900' : 'text-slate-400'}`}>{cat}</span>
                        <input
                          type="radio"
                          name="category"
                          checked={categoryFilter === cat}
                          onChange={() => setCategory(cat)}
                          className="w-4 h-4 accent-pink-600"
                        />
                      </label>
                    ))}
                  </div>
                </div>
              </div>

              <button 
                onClick={() => setIsFilterOpen(false)}
                className="w-full bg-slate-900 text-white py-4 rounded-2xl font-black uppercase tracking-widest mt-12 shadow-xl"
              >
                Apply
              </button>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Shop;