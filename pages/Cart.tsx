
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Trash2, Minus, Plus, ShoppingBag, ArrowRight } from 'lucide-react';
import { useAppContext } from '../context/AppContext';
import Button from '../components/Button';
import { formatPrice } from '../utils/formatters';

const Cart: React.FC = () => {
  const { cart, removeFromCart, updateCartQty, cartTotal } = useAppContext();
  const navigate = useNavigate();

  if (cart.length === 0) {
    return (
      <div className="pt-48 pb-20 min-h-screen flex flex-col items-center justify-center px-6 bg-slate-50">
        <div className="w-40 h-40 rounded-[3rem] bg-white flex items-center justify-center text-slate-200 shadow-xl mb-10">
          <ShoppingBag size={80} />
        </div>
        <h1 className="text-5xl font-black mb-6 uppercase tracking-tighter">Your Bag is Empty</h1>
        <p className="text-slate-500 font-medium mb-10 max-w-sm text-center">Add some items to your bag and start your fashion journey today!</p>
        <Link to="/shop">
          <Button size="lg" className="px-16 shadow-2xl">Start Shopping Now</Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="pt-40 pb-20 min-h-screen bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <h1 className="text-6xl font-black mb-16 uppercase tracking-tighter text-slate-900">YOUR SHOPPING BAG</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-6">
            {cart.map(item => (
              <div key={`${item.id}-${item.selectedSize}-${item.selectedColor}`} className="flex flex-col sm:flex-row gap-8 p-8 bg-white rounded-[2.5rem] border border-slate-100 shadow-sm hover:shadow-xl transition-all group">
                <div className="w-full sm:w-40 aspect-[4/5] bg-slate-100 rounded-[2rem] overflow-hidden flex-shrink-0 shadow-md">
                  <img src={item.images[0]} className="w-full h-full object-cover transition-transform group-hover:scale-105" alt={item.name} />
                </div>
                <div className="flex-1 flex flex-col justify-between py-2">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-2xl font-black text-slate-900 mb-2 uppercase tracking-tight">{item.name}</h3>
                      <div className="flex flex-wrap gap-2">
                        <span className="bg-slate-100 text-slate-500 text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-widest">{item.category}</span>
                        <span className="bg-pink-50 text-pink-500 text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-widest">Size {item.selectedSize}</span>
                        <span className="bg-teal-50 text-teal-500 text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-widest">{item.selectedColor}</span>
                      </div>
                    </div>
                    <button 
                      onClick={() => removeFromCart(item.id, item.selectedSize, item.selectedColor)}
                      className="w-12 h-12 bg-slate-50 text-slate-300 hover:text-red-500 hover:bg-red-50 transition-all rounded-full flex items-center justify-center"
                    >
                      <Trash2 size={20} />
                    </button>
                  </div>

                  <div className="flex flex-wrap items-center justify-between gap-6 mt-10">
                    <div className="flex items-center bg-slate-50 rounded-2xl border border-slate-100 p-1.5">
                      <button 
                        onClick={() => updateCartQty(item.id, item.selectedSize, item.selectedColor, item.quantity - 1)}
                        className="w-10 h-10 flex items-center justify-center text-slate-400 hover:text-pink-600 hover:bg-white rounded-xl transition-all"
                      >
                        <Minus size={18} />
                      </button>
                      <span className="w-12 text-center text-xl font-black text-slate-900">{item.quantity}</span>
                      <button 
                        onClick={() => updateCartQty(item.id, item.selectedSize, item.selectedColor, item.quantity + 1)}
                        className="w-10 h-10 flex items-center justify-center text-slate-400 hover:text-pink-600 hover:bg-white rounded-xl transition-all"
                      >
                        <Plus size={18} />
                      </button>
                    </div>
                    <div className="text-right">
                      <p className="text-[10px] text-slate-400 font-black uppercase tracking-[0.2em] mb-1">Item Total</p>
                      <p className="text-3xl font-black text-teal-600">{formatPrice(item.price * item.quantity)}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Sidebar Summary - Glassmorphism */}
          <div className="lg:col-span-1">
            <div className="bg-white/80 backdrop-blur-xl p-10 rounded-[3rem] border border-white sticky top-32 shadow-2xl">
              <h2 className="text-2xl font-black mb-10 uppercase tracking-tighter text-slate-900">Summary</h2>
              <div className="space-y-6 mb-10">
                <div className="flex justify-between text-slate-500 font-bold">
                  <span className="text-sm">Bag Subtotal</span>
                  <span className="text-slate-900">{formatPrice(cartTotal)}</span>
                </div>
                <div className="flex justify-between text-slate-500 font-bold">
                  <span className="text-sm">Delivery Fee</span>
                  <span className="text-teal-500 uppercase text-xs font-black tracking-widest">FREE</span>
                </div>
                <div className="h-px bg-slate-100 my-4" />
                <div className="flex justify-between items-end">
                  <div>
                    <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">Total Amount</span>
                    <p className="text-4xl font-black text-slate-900">{formatPrice(cartTotal)}</p>
                  </div>
                </div>
              </div>
              
              <div className="mb-10">
                <Link to="/checkout">
                  <Button size="full" className="group py-6 rounded-3xl shadow-2xl">
                    Proceed to Payment <ArrowRight className="group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
                <p className="text-[10px] text-center text-slate-400 font-bold mt-4 uppercase">100% Safe & Secure Checkout</p>
              </div>

              <div className="p-6 bg-slate-50 rounded-3xl border border-slate-100">
                <p className="text-[10px] font-black uppercase text-slate-400 mb-4 tracking-widest">We Accept</p>
                <div className="flex gap-4 items-center">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/1/14/UPI-Logo.png" className="h-4 grayscale" alt="UPI" />
                  <img src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg" className="h-4 grayscale" alt="PP" />
                  <img src="https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg" className="h-2 grayscale" alt="Visa" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
