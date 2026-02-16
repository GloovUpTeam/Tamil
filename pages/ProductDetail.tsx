
import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Heart, Star, Truck, ShieldCheck, RefreshCcw, ShoppingBag, Plus, Minus, Share2 } from 'lucide-react';
import { PRODUCTS } from '../data/mockData';
import { useAppContext } from '../context/AppContext';
import ProductCard from '../components/ProductCard';
import Button from '../components/Button';
import { formatPrice } from '../utils/formatters';

const ProductDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const product = PRODUCTS.find(p => p.id === id);
  const { addToCart, toggleWishlist, wishlist } = useAppContext();
  
  const [activeImage, setActiveImage] = useState(0);
  const [selectedSize, setSelectedSize] = useState('');
  const [selectedColor, setSelectedColor] = useState('');
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    if (product) {
      setSelectedSize(product.sizes[0]);
      setSelectedColor(product.colors[0].name);
      window.scrollTo(0, 0);
    }
  }, [product]);

  if (!product) return <div className="pt-40 text-center">Product not found.</div>;

  const isWishlisted = wishlist.includes(product.id);

  return (
    <div className="pt-24 md:pt-40 pb-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-24">
          {/* Left: Gallery */}
          <div className="flex flex-col gap-4">
            <div className="aspect-[3/4] md:aspect-[4/5] bg-slate-50 rounded-2xl md:rounded-[3rem] overflow-hidden shadow-xl border-4 md:border-8 border-white group relative">
              <img src={product.images[activeImage]} alt={product.name} className="w-full h-full object-cover transition-transform duration-700" />
              <button className="absolute bottom-4 right-4 md:bottom-8 md:right-8 w-10 h-10 md:w-14 md:h-14 bg-white/80 backdrop-blur-md rounded-full flex items-center justify-center text-slate-800 shadow-xl"><Share2 size={16} className="md:w-5" /></button>
            </div>
            <div className="flex gap-2.5 justify-center">
              {product.images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveImage(idx)}
                  className={`w-14 h-14 md:w-20 md:h-20 rounded-xl md:rounded-[1.5rem] overflow-hidden border-2 md:border-4 transition-all ${activeImage === idx ? 'border-pink-500 scale-105' : 'border-white shadow-md'}`}
                >
                  <img src={img} className="w-full h-full object-cover" alt="thumb" />
                </button>
              ))}
            </div>
          </div>

          {/* Right: Info */}
          <div className="flex flex-col">
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <span className="bg-teal-100 text-teal-600 text-[8px] md:text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-widest">{product.category} Hot</span>
              <div className="flex items-center gap-1 bg-yellow-50 px-2 py-1 rounded-full text-yellow-600">
                <Star size={10} className="md:w-[14px]" fill="currentColor" />
                <span className="text-[10px] md:text-xs font-black">{product.rating}</span>
              </div>
            </div>

            <h1 className="text-2xl md:text-6xl font-black mb-3 md:mb-6 text-slate-900 leading-tight uppercase tracking-tighter">{product.name}</h1>
            
            <div className="flex items-center gap-3 mb-6 md:mb-10">
              <span className="text-2xl md:text-4xl font-black text-slate-900">{formatPrice(product.price)}</span>
              {product.oldPrice && <span className="text-sm md:text-xl text-slate-300 line-through font-bold">{formatPrice(product.oldPrice)}</span>}
            </div>

            <p className="text-slate-500 text-sm md:text-lg leading-relaxed mb-8 md:mb-12 font-medium">
              {product.description}
            </p>

            {/* Selectors */}
            <div className="space-y-6 md:space-y-10 mb-8 md:mb-12 bg-slate-50 p-6 md:p-8 rounded-2xl md:rounded-[2.5rem] border border-slate-100">
              <div>
                <h4 className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-4">Colors</h4>
                <div className="flex gap-3">
                  {product.colors.map(color => (
                    <button
                      key={color.name}
                      onClick={() => setSelectedColor(color.name)}
                      className={`w-10 h-10 rounded-xl border-2 transition-all flex items-center justify-center ${selectedColor === color.name ? 'border-pink-500 scale-110 shadow-lg' : 'border-white shadow-sm'}`}
                    >
                      <div className="w-7 h-7 rounded-lg" style={{ backgroundColor: color.hex }} />
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-4">Sizes</h4>
                <div className="flex flex-wrap gap-2">
                  {product.sizes.map(size => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`w-12 h-12 rounded-xl border-2 flex items-center justify-center font-black text-xs transition-all ${selectedSize === size ? 'bg-slate-900 border-slate-900 text-white' : 'bg-white border-white text-slate-400'}`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              <div className="hidden md:flex flex-col md:flex-row items-center gap-6 pt-4">
                <div className="flex items-center bg-white rounded-2xl border border-slate-200 p-1.5 shadow-sm">
                  <button onClick={() => setQuantity(q => Math.max(1, q - 1))} className="w-12 h-12 flex items-center justify-center hover:text-pink-600"><Minus size={20}/></button>
                  <span className="w-10 text-center text-xl font-black">{quantity}</span>
                  <button onClick={() => setQuantity(q => q + 1)} className="w-12 h-12 flex items-center justify-center hover:text-pink-600"><Plus size={20}/></button>
                </div>
                <div className="flex-1 w-full flex gap-3">
                  <Button
                    size="lg"
                    className="flex-1 rounded-[1.5rem] shadow-2xl"
                    onClick={() => addToCart(product, selectedSize, selectedColor)}
                  >
                    Add to Bag <ShoppingBag size={20} />
                  </Button>
                </div>
              </div>
            </div>

            {/* Delivery Info */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8 py-6 border-t border-slate-100">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-teal-50 flex items-center justify-center text-teal-600"><Truck size={20} /></div>
                <p className="font-black text-[10px] uppercase tracking-widest">Free Delivery</p>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-pink-50 flex items-center justify-center text-pink-600"><ShieldCheck size={20} /></div>
                <p className="font-black text-[10px] uppercase tracking-widest">Original Quality</p>
              </div>
            </div>
          </div>
        </div>

        <section className="mt-20 md:mt-40">
          <h2 className="text-xl md:text-4xl font-black mb-8 uppercase tracking-tighter">You May Like</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-8">
            {PRODUCTS.filter(p => p.id !== id).slice(0, 4).map(p => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </section>
      </div>

      {/* Sticky Mobile Add To Bag */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-white border-t border-slate-100 p-3 px-4 flex items-center gap-4">
        <div className="flex flex-col">
          <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Price</span>
          <span className="text-xl font-black text-slate-900">{formatPrice(product.price)}</span>
        </div>
        <Button 
          size="sm" 
          className="flex-1 py-3.5 rounded-2xl shadow-lg text-[10px] uppercase tracking-widest font-black"
          onClick={() => addToCart(product, selectedSize, selectedColor)}
        >
          Add to Bag
        </Button>
      </div>
    </div>
  );
};

export default ProductDetail;
