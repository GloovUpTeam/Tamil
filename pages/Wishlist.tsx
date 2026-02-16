import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, ShoppingBag, Sparkles } from 'lucide-react';
import { PRODUCTS } from '../data/mockData';
import { useAppContext } from '../context/AppContext';
import ProductCard from '../components/ProductCard';
import Button from '../components/Button';

const Wishlist: React.FC = () => {
  const { wishlist } = useAppContext();
  const wishlistedProducts = PRODUCTS.filter(p => wishlist.includes(p.id));

  return (
    <div className="pt-24 md:pt-40 pb-20 min-h-screen bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <header className="mb-10 md:mb-16 text-center">
          <div className="w-12 h-12 md:w-16 md:h-16 rounded-2xl md:rounded-[1.5rem] bg-pink-100 flex items-center justify-center text-pink-500 mx-auto mb-4 md:mb-6 shadow-md">
            <Heart size={24} className="md:w-8" fill="currentColor" />
          </div>
          <h1 className="text-3xl md:text-5xl font-black mb-2 md:mb-4 uppercase tracking-tighter text-slate-900">Saved Trends</h1>
          <p className="text-slate-400 font-bold uppercase tracking-widest text-[8px] md:text-xs">Your personal vault</p>
        </header>

        {wishlistedProducts.length === 0 ? (
          <div className="py-16 md:py-24 bg-white rounded-3xl md:rounded-[4rem] flex flex-col items-center justify-center text-center gap-6 md:gap-8 shadow-sm border border-slate-100 max-w-2xl mx-auto px-6 md:px-10">
            <div className="w-16 h-16 md:w-24 md:h-24 rounded-full bg-slate-50 flex items-center justify-center text-slate-200">
              <Sparkles size={32} className="md:w-12" />
            </div>
            <div>
              <h2 className="text-xl md:text-3xl font-black text-slate-800 tracking-tighter uppercase mb-2">Feeling Lonely?</h2>
              <p className="text-slate-400 text-xs md:text-base font-medium">Your wishlist is empty. Start adding your favorite styles.</p>
            </div>
            <Link to="/shop">
              <Button size="sm" className="md:hidden rounded-full px-10 py-3 text-[10px] uppercase tracking-widest shadow-xl">Shop Now</Button>
              <Button size="lg" className="hidden md:flex px-16 shadow-2xl">Start Curating Now</Button>
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-10">
            {wishlistedProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Wishlist;