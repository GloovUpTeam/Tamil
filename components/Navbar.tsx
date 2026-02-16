import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, ShoppingBag, Heart, User, Menu, X } from 'lucide-react';
import { useAppContext } from '../context/AppContext';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { cart, wishlist, setCartOpen } = useAppContext();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Shop', path: '/shop' },
    { name: 'Men', path: '/shop?category=Men' },
    { name: 'Women', path: '/shop?category=Women' },
    { name: 'Kids', path: '/shop?category=Kids' },
  ];

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 px-3 md:px-8 pt-2 md:pt-4 pb-1 md:pb-2`}>
        <div className={`max-w-7xl mx-auto flex items-center justify-between transition-all duration-500 rounded-full px-4 md:px-10 py-2 md:py-4 ${isScrolled ? 'bg-white/90 backdrop-blur-xl shadow-[0_4px_20px_rgb(0,0,0,0.1)] border border-white/60' : 'bg-white/40 backdrop-blur-md border border-white/40'}`}>
          {/* Logo Left */}
          <Link to="/" className="flex flex-col items-center flex-shrink-0">
            <span className="text-lg md:text-2xl font-black tracking-tighter text-slate-900">CRT TRENDZ</span>
            <span className="text-[6px] md:text-[7px] tracking-[0.4em] text-pink-500 uppercase font-black leading-none">Style India</span>
          </Link>

          {/* Center Menu (Desktop) */}
          <div className="hidden lg:flex items-center gap-1 absolute left-1/2 transform -translate-x-1/2">
            {navLinks.map(link => (
              <Link
                key={link.name}
                to={link.path}
                className={`px-4 py-2 text-[11px] font-black tracking-widest uppercase transition-all rounded-full ${location.pathname === link.path ? 'bg-pink-500 text-white shadow-md' : 'text-slate-600 hover:text-pink-600 hover:bg-pink-50'}`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Icons Right */}
          <div className="flex items-center gap-0 md:gap-3">
            <button className="p-1.5 md:p-2 text-slate-700 hover:text-pink-600 rounded-full transition-all">
              <Search size={18} />
            </button>
            <Link to="/wishlist" className="relative p-1.5 md:p-2 text-slate-700 hover:text-pink-600 rounded-full transition-all">
              <Heart size={18} />
              {wishlist.length > 0 && (
                <span className="absolute top-0 right-0 md:top-1 md:right-1 bg-pink-500 text-white text-[7px] md:text-[8px] w-3.5 h-3.5 md:w-4 md:h-4 rounded-full flex items-center justify-center font-bold shadow-sm">{wishlist.length}</span>
              )}
            </Link>
            <button onClick={() => setCartOpen(true)} className="relative p-1.5 md:p-2 text-slate-700 hover:text-teal-600 rounded-full transition-all">
              <ShoppingBag size={18} />
              {cart.length > 0 && (
                <span className="absolute top-0 right-0 md:top-1 md:right-1 bg-teal-500 text-white text-[7px] md:text-[8px] w-3.5 h-3.5 md:w-4 md:h-4 rounded-full flex items-center justify-center font-bold shadow-sm">{cart.reduce((a, b) => a + b.quantity, 0)}</span>
              )}
            </button>
            <Link to="/login" className="hidden sm:block p-2 text-slate-700 hover:text-pink-600 rounded-full transition-all">
              <User size={18} />
            </Link>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-1.5 md:p-2 text-slate-900"
            >
              {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Sticky Bottom Cart Button (Mobile) */}
      <div className="lg:hidden fixed bottom-4 right-4 z-50">
        <button 
           onClick={() => setCartOpen(true)}
           className="w-14 h-14 bg-pink-500 text-white rounded-full flex items-center justify-center shadow-[0_10px_20px_rgba(236,72,153,0.3)] relative active:scale-90 transition-transform"
        >
          <ShoppingBag size={24} />
          {cart.length > 0 && (
            <span className="absolute -top-1 -right-1 bg-teal-500 text-white text-[9px] w-5 h-5 rounded-full flex items-center justify-center font-black border-2 border-white shadow-md">
              {cart.reduce((a, b) => a + b.quantity, 0)}
            </span>
          )}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 25 }}
            className="fixed inset-0 z-[60] bg-white flex flex-col p-8 lg:hidden"
          >
            <div className="flex justify-between items-center mb-10">
               <Link to="/" className="flex flex-col items-center">
                <span className="text-xl font-black tracking-tighter text-slate-900">CRT TRENDZ</span>
              </Link>
              <button onClick={() => setIsMobileMenuOpen(false)} className="p-2 bg-slate-100 rounded-full"><X size={20} /></button>
            </div>
            <div className="flex flex-col gap-5">
              {navLinks.map((link, idx) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.05 }}
                >
                  <Link
                    to={link.path}
                    className={`text-4xl font-black uppercase tracking-tighter ${location.pathname === link.path ? 'text-pink-600' : 'text-slate-800'}`}
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
              <div className="h-px bg-slate-100 my-6" />
              <Link to="/login" className="text-xl font-bold text-slate-500">My Account</Link>
              <Link to="/wishlist" className="text-xl font-bold text-slate-500">Saved Looks</Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;