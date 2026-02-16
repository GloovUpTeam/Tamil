import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Play, Star, Zap, Sparkles, Smile, ChevronLeft, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { CATEGORIES, PRODUCTS, TESTIMONIALS } from '../data/mockData';
import ProductCard from '../components/ProductCard';
import Button from '../components/Button';

const HERO_SLIDES = [
  {
    image: 'https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&q=80&w=1920',
    title: 'LOOK FRESH,\nFEEL TRENDY.',
    subtitle: 'Join 1M+ Indians styling their daily lives with CRT Trendz.',
    badge: 'Hot Collection'
  },
  {
    image: 'https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&q=80&w=1920',
    title: 'UNBEATABLE\nDESIGNS.',
    subtitle: 'Exclusive custom embroidery and premium fabrics for you.',
    badge: 'Limited Edition'
  },
  {
    image: 'https://images.unsplash.com/photo-1523381210434-271e8be1f52b?auto=format&fit=crop&q=80&w=1920',
    title: 'STREET STYLE\nDEFINED.',
    subtitle: 'Bringing high-end fashion to every doorstep across India.',
    badge: 'New Arrivals'
  }
];

const Home: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + HERO_SLIDES.length) % HERO_SLIDES.length);

  return (
    <div className="flex flex-col w-full bg-slate-50">
      {/* Hero Section - Multi-Slide Banner */}
      <section className="relative h-[420px] md:h-[650px] w-full overflow-hidden flex items-center mt-16 md:mt-4 px-2 md:px-8">
        <div className="relative w-full h-full rounded-[1.5rem] md:rounded-[3rem] overflow-hidden soft-3d border border-white">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.8 }}
              className="absolute inset-0 z-0"
            >
              <img
                src={HERO_SLIDES[currentSlide].image}
                className="w-full h-full object-cover"
                alt="Hero"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/50 to-transparent z-10" />
            </motion.div>
          </AnimatePresence>

          <div className="absolute inset-0 flex items-center z-20 px-6 md:px-20">
            <div className="max-w-md md:max-w-2xl">
              <motion.div
                key={`content-${currentSlide}`}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                <div className="flex items-center gap-2 mb-3">
                  <span className="bg-pink-100 text-pink-600 text-[8px] md:text-[10px] font-black px-3 py-1 md:px-4 md:py-2 rounded-full uppercase tracking-widest shadow-sm border border-pink-200">
                    {HERO_SLIDES[currentSlide].badge}
                  </span>
                  <div className="w-6 h-6 md:w-8 md:h-8 rounded-full bg-yellow-100 flex items-center justify-center text-yellow-600 animate-pulse"><Sparkles size={12} className="md:w-[14px]" /></div>
                </div>
                <h1 className="text-3xl md:text-7xl font-black mb-3 md:mb-6 leading-tight md:leading-[1] text-slate-900 uppercase tracking-tighter whitespace-pre-line">
                  {HERO_SLIDES[currentSlide].title.split('\n').map((line, idx) => (
                    <span key={idx} className="block">
                       {line.split(' ').map((word, i) => (
                         <span key={i} className={word === 'FRESH' || word === 'TRENDY' || word === 'UNBEATABLE' || word === 'STREET' ? 'text-pink-500' : ''}>{word} </span>
                       ))}
                    </span>
                  ))}
                </h1>
                <p className="text-xs md:text-lg text-slate-500 mb-6 md:mb-8 max-w-[240px] md:max-w-md font-medium">
                  {HERO_SLIDES[currentSlide].subtitle}
                </p>
                <div className="flex flex-wrap gap-3">
                  <Link to="/shop">
                    <Button size="sm" className="md:hidden shadow-lg text-[10px] px-6 py-2.5">
                      Shop Now <ArrowRight size={14} className="ml-1" />
                    </Button>
                    <Button size="lg" className="hidden md:flex group shadow-xl">
                      Shop Now <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Slider Controls */}
          <div className="absolute bottom-4 right-4 md:bottom-10 md:right-10 flex items-center gap-2 md:gap-4 z-30">
            <button onClick={prevSlide} className="w-8 h-8 md:w-12 md:h-12 rounded-full bg-white/80 backdrop-blur-md flex items-center justify-center text-slate-900 shadow-lg border border-white">
              <ChevronLeft size={18} className="md:w-6" />
            </button>
            <button onClick={nextSlide} className="w-8 h-8 md:w-12 md:h-12 rounded-full bg-white/80 backdrop-blur-md flex items-center justify-center text-slate-900 shadow-lg border border-white">
              <ChevronRight size={18} className="md:w-6" />
            </button>
          </div>
        </div>
      </section>

      {/* Shop by Category - Fixed Mobile Grid Layout */}
      <section className="py-10 md:py-24 bg-white/40 px-4 md:px-0">
        <div className="max-w-7xl mx-auto md:px-6">
          <div className="flex flex-col mb-8 md:mb-16">
            <h2 className="text-2xl md:text-5xl font-black text-slate-900 tracking-tighter uppercase mb-1">Categories</h2>
            <div className="h-1 w-12 bg-pink-500 rounded-full mb-2" />
          </div>

          {/* Mobile Categories Grid (2+3 Layout) */}
          <div className="md:hidden space-y-3">
            {/* Row 1: Men & Women (2 Columns) */}
            <div className="grid grid-cols-2 gap-3">
              {CATEGORIES.slice(0, 2).map((cat) => (
                <motion.div
                  key={cat.id}
                  whileHover={{ scale: 1.02 }}
                  className="relative aspect-[4/5] rounded-xl overflow-hidden bg-slate-50 group border border-white shadow-[0_6px_20px_rgba(0,0,0,0.08)]"
                >
                  <img src={cat.image} className="absolute inset-0 w-full h-full object-cover opacity-80" alt={cat.title} />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 via-transparent to-transparent flex flex-col justify-end p-3">
                    <h3 className="text-sm font-black text-white uppercase tracking-tighter leading-tight">{cat.title}</h3>
                    <Link to={`/shop?category=${cat.title}`} className="text-white/80 text-[8px] font-black uppercase tracking-widest flex items-center gap-1 mt-0.5">
                      Explore <ArrowRight size={8} />
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
            {/* Row 2: Kids, Daily Wear, Custom (3 Columns) */}
            <div className="grid grid-cols-3 gap-3">
              {CATEGORIES.slice(2, 5).map((cat) => (
                <motion.div
                  key={cat.id}
                  whileHover={{ scale: 1.02 }}
                  className="relative aspect-[4/5] rounded-xl overflow-hidden bg-slate-50 group border border-white shadow-[0_6px_20px_rgba(0,0,0,0.08)]"
                >
                  <img src={cat.image} className="absolute inset-0 w-full h-full object-cover opacity-80" alt={cat.title} />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 via-transparent to-transparent flex flex-col justify-end p-3">
                    <h3 className="text-sm font-black text-white uppercase tracking-tighter leading-tight">{cat.title}</h3>
                    <Link to={`/shop?category=${cat.title}`} className="text-white/80 text-[8px] font-black uppercase tracking-widest flex items-center gap-1 mt-0.5">
                      Explore <ArrowRight size={8} />
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Desktop Layout - Remains Original (6 Columns) */}
          <div className="hidden md:grid md:grid-cols-6 gap-4">
            {CATEGORIES.map((cat, idx) => (
              <motion.div
                key={cat.id}
                whileHover={{ y: -5 }}
                className={`h-80 relative overflow-hidden rounded-[2.5rem] bg-slate-50 group border border-white soft-3d ${idx < 2 ? 'md:col-span-3' : 'md:col-span-2'}`}
              >
                <img src={cat.image} className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:scale-110 transition-transform duration-1000" alt="cat" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent flex flex-col justify-end p-6">
                  <h3 className="text-2xl font-black text-white uppercase tracking-tighter">{cat.title}</h3>
                  <Link to={`/shop?category=${cat.title}`} className="text-white/80 text-[10px] font-black uppercase tracking-widest flex items-center gap-2 mt-2 group-hover:text-pink-400 transition-colors">
                    Explore <ArrowRight size={12} />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Trending Now - 2 Columns on Mobile */}
      <section className="py-10 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-between items-end mb-8 md:mb-16">
            <div>
              <div className="flex items-center gap-1.5 mb-1">
                <Zap size={14} className="text-orange-500" fill="currentColor" />
                <span className="text-orange-500 font-black text-[8px] md:text-[10px] uppercase tracking-widest">Trending</span>
              </div>
              <h2 className="text-2xl md:text-5xl font-black text-slate-900 tracking-tighter uppercase">Hot Picks</h2>
            </div>
            <Link to="/shop" className="text-[10px] md:text-xs font-black uppercase tracking-widest text-pink-500">View All</Link>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-8">
            {PRODUCTS.filter(p => p.isTrending).slice(0, 4).map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* OUR COLLECTION - Compact Grid on Mobile */}
      <section className="py-10 md:py-24 bg-slate-50/50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col items-center text-center mb-8 md:mb-16">
            <h2 className="text-2xl md:text-5xl font-black text-slate-900 tracking-tighter uppercase mb-2">Our Collection</h2>
            <p className="text-slate-500 text-[10px] md:text-sm font-medium">Explore over 500+ fresh styles.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-8">
            {PRODUCTS.slice(0, 4).map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          <div className="mt-8 md:mt-16 text-center">
            <Link to="/shop">
              <Button size="sm" className="md:hidden rounded-full px-8 py-3 text-[10px] uppercase tracking-widest shadow-xl">Browse All</Button>
              <Button size="lg" className="hidden md:flex rounded-full shadow-2xl px-12 mx-auto">View Full Collection</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* STYLE REELS - Horizontal Scroll on Mobile */}
      <section className="py-10 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col items-center mb-8 md:mb-16 text-center">
            <h2 className="text-2xl md:text-5xl font-black text-slate-900 tracking-tighter uppercase mb-1">Style Reels 🎬</h2>
            <p className="text-slate-400 font-bold uppercase tracking-widest text-[8px] md:text-xs">Latest looks in motion</p>
          </div>
          <div className="flex md:grid md:grid-cols-3 gap-4 md:gap-8 overflow-x-auto no-scrollbar pb-4 -mx-6 px-6">
            {[1, 2, 3].map(i => (
              <motion.div 
                key={i}
                whileHover={{ y: -5 }}
                className="flex-shrink-0 w-[240px] md:w-auto aspect-[9/16] relative overflow-hidden rounded-2xl md:rounded-[2.5rem] bg-slate-100 shadow-lg border border-slate-100 cursor-pointer"
              >
                <img src={`https://images.unsplash.com/photo-${i === 1 ? '1515886657613-9f3515b0c78f' : i === 2 ? '1539109136881-3be0616acf4b' : '1558769132-cb1aea458c5e'}?auto=format&fit=crop&q=80&w=800`} className="w-full h-full object-cover opacity-90" alt="Reel" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent flex items-center justify-center">
                  <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white border border-white/40 shadow-xl">
                    <Play size={20} className="md:w-7 md:h-7" fill="white" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials - Horizontal Scroll on Mobile */}
      <section className="py-10 md:py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col items-center mb-10 md:mb-20 text-center">
            <h2 className="text-2xl md:text-5xl font-black text-slate-900 tracking-tighter mb-4 uppercase">Customer Love</h2>
            <div className="flex items-center gap-1 text-yellow-400 mb-4 md:mb-6">
               {[...Array(5)].map((_,i) => <Star key={i} size={14} className="md:w-5" fill="currentColor" />)}
            </div>
          </div>
          <div className="flex md:grid md:grid-cols-3 gap-4 md:gap-10 overflow-x-auto no-scrollbar pb-6 -mx-6 px-6">
            {TESTIMONIALS.map((t, idx) => (
              <motion.div 
                key={t.id} 
                className="flex-shrink-0 w-[280px] md:w-auto bg-white p-6 md:p-10 rounded-2xl md:rounded-[3rem] border border-white flex flex-col justify-between hover:shadow-xl transition-all soft-3d"
              >
                <div>
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl md:rounded-2xl bg-pink-100 flex items-center justify-center text-pink-600 mb-6 shadow-sm">
                    <Smile size={20} className="md:w-6" />
                  </div>
                  <p className="text-slate-700 font-bold italic mb-6 md:mb-10 text-sm md:text-xl leading-snug">"{t.text}"</p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="relative">
                    <img src={t.avatar} className="w-10 h-10 md:w-14 md:h-14 rounded-xl object-cover shadow-md border-2 border-white" alt={t.name} />
                  </div>
                  <div>
                    <span className="font-black text-slate-900 uppercase tracking-widest text-[8px] md:text-[10px]">{t.name}</span>
                    <p className="text-[7px] md:text-[9px] text-slate-400 font-bold uppercase">Verified Buyer</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;