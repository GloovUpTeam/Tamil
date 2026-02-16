
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Minus, Plus, Trash2, ShoppingBag } from 'lucide-react';
import { useAppContext } from '../context/AppContext';
import Button from './Button';
import { Link } from 'react-router-dom';
import { formatPrice } from '../utils/formatters';

const CartDrawer: React.FC = () => {
  const { cart, isCartOpen, setCartOpen, updateCartQty, removeFromCart, cartTotal } = useAppContext();

  return (
    <AnimatePresence>
      {isCartOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setCartOpen(false)}
            className="fixed inset-0 bg-slate-900/30 z-[60] backdrop-blur-sm"
          />
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed top-0 right-0 h-full w-full max-w-md bg-white z-[70] shadow-[-20px_0_50px_rgba(0,0,0,0.1)] flex flex-col rounded-l-[2.5rem]"
          >
            <div className="p-8 border-b border-slate-100 flex items-center justify-between">
              <h2 className="text-2xl font-black flex items-center gap-3 text-slate-800">
                <div className="w-10 h-10 rounded-2xl bg-pink-100 flex items-center justify-center text-pink-600">
                  <ShoppingBag size={20} />
                </div>
                Bag ({cart.length})
              </h2>
              <button onClick={() => setCartOpen(false)} className="p-2.5 hover:bg-slate-100 rounded-full transition-colors text-slate-400">
                <X size={24} />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-8 flex flex-col gap-6">
              {cart.length === 0 ? (
                <div className="flex flex-col items-center justify-center h-full text-center gap-6">
                  <div className="w-24 h-24 rounded-full bg-slate-50 flex items-center justify-center text-slate-200">
                    <ShoppingBag size={48} />
                  </div>
                  <div>
                    <p className="text-slate-900 font-bold text-lg">Your bag is empty!</p>
                    <p className="text-slate-400 text-sm mt-1">Don't miss out on the latest trends.</p>
                  </div>
                  <Button variant="outline" onClick={() => setCartOpen(false)}>Start Shopping</Button>
                </div>
              ) : (
                cart.map(item => (
                  <div key={`${item.id}-${item.selectedSize}-${item.selectedColor}`} className="flex gap-5 bg-slate-50 p-4 rounded-3xl border border-slate-100">
                    <div className="w-20 h-24 bg-white rounded-2xl overflow-hidden flex-shrink-0 shadow-sm">
                      <img src={item.images[0]} alt={item.name} className="w-full h-full object-cover" />
                    </div>
                    <div className="flex-1 flex flex-col justify-between">
                      <div>
                        <h3 className="font-bold text-slate-800 text-sm line-clamp-1">{item.name}</h3>
                        <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest mt-1">{item.selectedSize} • {item.selectedColor}</p>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center bg-white rounded-full border border-slate-200 p-1">
                          <button onClick={() => updateCartQty(item.id, item.selectedSize, item.selectedColor, item.quantity - 1)} className="w-6 h-6 flex items-center justify-center text-slate-500 hover:text-pink-600"><Minus size={12}/></button>
                          <span className="w-6 text-center text-xs font-black">{item.quantity}</span>
                          <button onClick={() => updateCartQty(item.id, item.selectedSize, item.selectedColor, item.quantity + 1)} className="w-6 h-6 flex items-center justify-center text-slate-500 hover:text-pink-600"><Plus size={12}/></button>
                        </div>
                        <div className="flex items-center gap-3">
                          <span className="font-black text-teal-600">{formatPrice(item.price * item.quantity)}</span>
                          <button onClick={() => removeFromCart(item.id, item.selectedSize, item.selectedColor)} className="p-1.5 text-slate-300 hover:text-red-500 transition-colors">
                            <Trash2 size={16} />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>

            {cart.length > 0 && (
              <div className="p-8 border-t border-slate-100 bg-white rounded-b-[2.5rem]">
                <div className="flex items-center justify-between mb-8">
                  <span className="text-slate-400 font-bold uppercase text-xs tracking-widest">Grand Total</span>
                  <span className="text-3xl font-black text-slate-900">{formatPrice(cartTotal)}</span>
                </div>
                <div className="flex flex-col gap-3">
                  <Link to="/checkout" onClick={() => setCartOpen(false)}>
                    <Button variant="primary" size="full">Secure Checkout</Button>
                  </Link>
                  <Link to="/cart" onClick={() => setCartOpen(false)}>
                    <Button variant="ghost" size="full">Edit Shopping Bag</Button>
                  </Link>
                </div>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default CartDrawer;
