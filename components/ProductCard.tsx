
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
// Fixed error: Added 'Plus' to imports from lucide-react
import { Heart, ShoppingBag, Star, Plus } from 'lucide-react';
import { Product } from '../types';
import { useAppContext } from '../context/AppContext';
import { formatPrice } from '../utils/formatters';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const [isHovered, setIsHovered] = useState(false);
  const { toggleWishlist, wishlist, addToCart } = useAppContext();
  const isWishlisted = wishlist.includes(product.id);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group relative flex flex-col h-full bg-white rounded-xl md:rounded-[2rem] p-2 md:p-3 soft-3d border border-slate-100"
    >
      <div className="relative aspect-[3/4] md:aspect-[4/5] overflow-hidden rounded-lg md:rounded-[1.5rem] bg-slate-50">
        <Link to={`/product/${product.id}`}>
          <motion.img
            src={isHovered && product.images[1] ? product.images[1] : product.images[0]}
            alt={product.name}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
        </Link>
        
        {/* Badges - Glassmorphism style */}
        <div className="absolute top-2 left-2 md:top-3 md:left-3 flex flex-col gap-1 md:gap-2">
          {product.isTrending && (
            <span className="bg-white/80 backdrop-blur-md text-pink-600 text-[8px] md:text-[10px] font-extrabold uppercase tracking-wider px-2 py-0.5 md:px-2.5 md:py-1 rounded-full shadow-sm border border-white">Hot</span>
          )}
          {product.oldPrice && (
            <span className="bg-teal-500 text-white text-[8px] md:text-[10px] font-extrabold uppercase tracking-wider px-2 py-0.5 md:px-2.5 md:py-1 rounded-full shadow-md">Sale</span>
          )}
        </div>

        {/* Action Buttons */}
        <div className="absolute top-2 right-2 md:top-3 md:right-3 z-10">
          <button
            onClick={() => toggleWishlist(product.id)}
            className={`p-1.5 md:p-2.5 rounded-full backdrop-blur-md transition-all ${isWishlisted ? 'bg-pink-500 text-white shadow-lg' : 'bg-white/90 text-slate-400 hover:text-pink-500 shadow-sm'}`}
          >
            <Heart size={14} className="md:w-[18px] md:h-[18px]" fill={isWishlisted ? 'currentColor' : 'none'} />
          </button>
        </div>

        {/* Quick Add Button - Floating style */}
        <div className="md:hidden absolute bottom-2 right-2 z-10">
          <button
            onClick={() => addToCart(product, product.sizes[0], product.colors[0].name)}
            className="w-8 h-8 bg-slate-900 text-white rounded-full flex items-center justify-center shadow-lg active:scale-90 transition-transform"
          >
            <Plus size={16} />
          </button>
        </div>

        <AnimatePresence>
          {isHovered && (
            <motion.button
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 20, opacity: 0 }}
              onClick={() => addToCart(product, product.sizes[0], product.colors[0].name)}
              className="hidden md:flex absolute bottom-4 left-4 right-4 bg-slate-900 text-white py-3 rounded-xl font-bold items-center justify-center gap-2 z-10 shadow-xl"
            >
              <ShoppingBag size={18} />
              Quick Add
            </motion.button>
          )}
        </AnimatePresence>
      </div>

      <div className="px-1 md:px-3 py-2 md:py-4 flex flex-col gap-1">
        <div className="flex justify-between items-center mb-0.5 md:mb-1">
          <p className="text-teal-600 text-[8px] md:text-[10px] font-bold uppercase tracking-widest">{product.category}</p>
          <div className="flex items-center gap-0.5 md:gap-1 bg-amber-50 px-1.5 py-0.5 rounded-full text-amber-600 text-[8px] md:text-[10px] font-bold">
            <Star size={8} className="md:w-[10px]" fill="currentColor" />
            <span>{product.rating}</span>
          </div>
        </div>
        <Link to={`/product/${product.id}`} className="text-xs md:text-base font-bold text-slate-800 hover:text-pink-600 transition-colors line-clamp-1">
          {product.name}
        </Link>
        <div className="flex items-center gap-1.5 mt-0.5">
          <span className="text-sm md:text-lg font-black text-slate-900">{formatPrice(product.price)}</span>
          {product.oldPrice && (
            <span className="text-[10px] md:text-xs text-slate-400 line-through font-medium">{formatPrice(product.oldPrice)}</span>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default ProductCard;
