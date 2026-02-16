
import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, MessageCircle, MapPin, Phone, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white pt-24 pb-12 border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        {/* Brand */}
        <div className="flex flex-col gap-6">
          <Link to="/" className="flex flex-col">
            <span className="text-3xl font-black tracking-tighter text-slate-900">CRT TRENDZ</span>
            <span className="text-[10px] tracking-[0.4em] text-pink-500 uppercase font-black">Modern Indian Fashion</span>
          </Link>
          <p className="text-slate-500 leading-relaxed text-sm">
            Trendy, affordable, and high-quality fashion for everyone. Express your style with CRT Trendz.
          </p>
          <div className="flex gap-3">
            <a href="#" className="w-10 h-10 rounded-full bg-pink-50 flex items-center justify-center text-pink-500 hover:bg-pink-500 hover:text-white transition-all shadow-sm"><Facebook size={18} /></a>
            <a href="#" className="w-10 h-10 rounded-full bg-pink-50 flex items-center justify-center text-pink-500 hover:bg-pink-500 hover:text-white transition-all shadow-sm"><Instagram size={18} /></a>
            <a href="#" className="w-10 h-10 rounded-full bg-pink-50 flex items-center justify-center text-pink-500 hover:bg-pink-500 hover:text-white transition-all shadow-sm"><Twitter size={18} /></a>
          </div>
        </div>

        {/* Links */}
        <div>
          <h4 className="text-sm font-black mb-8 uppercase tracking-widest text-slate-900">Collections</h4>
          <ul className="flex flex-col gap-4">
            <li><Link to="/shop?category=Men" className="text-slate-500 hover:text-pink-600 font-medium transition-colors">Men's Trends</Link></li>
            <li><Link to="/shop?category=Women" className="text-slate-500 hover:text-pink-600 font-medium transition-colors">Women's Fashion</Link></li>
            <li><Link to="/shop?category=Kids" className="text-slate-500 hover:text-pink-600 font-medium transition-colors">Junior Collection</Link></li>
            <li><Link to="/shop?category=Daily" className="text-slate-500 hover:text-pink-600 font-medium transition-colors">Daily Picks</Link></li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h4 className="text-sm font-black mb-8 uppercase tracking-widest text-slate-900">Help & Support</h4>
          <ul className="flex flex-col gap-4">
            <li><Link to="/faq" className="text-slate-500 hover:text-pink-600 font-medium transition-colors">Track Your Order</Link></li>
            <li><Link to="/shipping" className="text-slate-500 hover:text-pink-600 font-medium transition-colors">Shipping & Returns</Link></li>
            <li><Link to="/privacy" className="text-slate-500 hover:text-pink-600 font-medium transition-colors">Terms of Use</Link></li>
            <li><Link to="/contact" className="text-slate-500 hover:text-pink-600 font-medium transition-colors">Contact Support</Link></li>
          </ul>
        </div>

        {/* Contact */}
        <div className="bg-slate-50 p-8 rounded-[2rem] border border-slate-100">
          <h4 className="text-sm font-black mb-6 uppercase tracking-widest text-slate-900">Get in Touch</h4>
          <ul className="flex flex-col gap-5">
            <li className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-teal-50 flex items-center justify-center text-teal-600 flex-shrink-0"><Phone size={14} /></div>
              <span className="text-slate-600 text-sm font-bold">+91 98765 43210</span>
            </li>
            <li className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-teal-50 flex items-center justify-center text-teal-600 flex-shrink-0"><Mail size={14} /></div>
              <span className="text-slate-600 text-sm font-bold">help@crttrendz.in</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom */}
      <div className="max-w-7xl mx-auto px-6 mt-20 pt-10 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-6">
        <p className="text-slate-400 text-xs font-bold">© 2024 CRT TRENDZ INDIA PVT LTD.</p>
        <div className="flex gap-6 items-center">
          <img src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg" className="h-6 opacity-30" alt="Pay" />
          <img src="https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg" className="h-3 opacity-30" alt="Pay" />
          <img src="https://upload.wikimedia.org/wikipedia/commons/1/14/UPI-Logo.png" className="h-4 opacity-50 grayscale" alt="UPI" />
        </div>
      </div>

      {/* Floating WhatsApp - Bright Pulse */}
      <a
        href="https://wa.me/1234567890"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-40 bg-green-500 text-white p-4 rounded-full shadow-[0_10px_25px_rgba(34,197,94,0.4)] hover:scale-110 active:scale-95 transition-transform animate-bounce hover:animate-none"
      >
        <MessageCircle size={32} />
      </a>
    </footer>
  );
};

export default Footer;
