
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronLeft, CreditCard, Banknote, Shield, CheckCircle2 } from 'lucide-react';
import { useAppContext } from '../context/AppContext';
import Button from '../components/Button';
import { formatPrice } from '../utils/formatters';

const Checkout: React.FC = () => {
  const navigate = useNavigate();
  const { cart, cartTotal, clearCart } = useAppContext();
  const [paymentMethod, setPaymentMethod] = useState<'razorpay' | 'cod'>('razorpay');

  const handleCheckout = (e: React.FormEvent) => {
    e.preventDefault();
    clearCart();
    navigate('/success');
  };

  if (cart.length === 0) {
    return (
      <div className="pt-48 text-center min-h-screen bg-slate-50">
        <h2 className="text-3xl font-black mb-6 uppercase tracking-tight">Your Bag is empty</h2>
        <Button onClick={() => navigate('/shop')}>Start Shopping</Button>
      </div>
    );
  }

  return (
    <div className="pt-40 pb-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-12">
          <button onClick={() => navigate(-1)} className="flex items-center gap-2 text-slate-400 hover:text-pink-600 font-black text-xs uppercase tracking-widest transition-all mb-8">
            <ChevronLeft size={16} /> Back to Bag
          </button>
          <h1 className="text-5xl font-black uppercase tracking-tighter text-slate-900">Secure Checkout</h1>
        </div>

        <form onSubmit={handleCheckout} className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Form Side */}
          <div className="lg:col-span-2 space-y-10">
            {/* Address */}
            <section className="bg-white p-10 rounded-[2.5rem] border border-slate-100 shadow-sm">
              <h3 className="text-xl font-black mb-8 flex items-center gap-4 text-slate-900 uppercase">
                <span className="w-10 h-10 rounded-2xl bg-pink-500 text-white flex items-center justify-center text-sm shadow-lg">1</span>
                Shipping Details
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input required placeholder="Full Name" className="md:col-span-2 bg-slate-50 border-2 border-slate-50 rounded-2xl p-4 focus:border-pink-300 outline-none font-medium transition-all" />
                <input required placeholder="Email Address" type="email" className="md:col-span-2 bg-slate-50 border-2 border-slate-50 rounded-2xl p-4 focus:border-pink-300 outline-none font-medium transition-all" />
                <input required placeholder="Phone Number" className="md:col-span-2 bg-slate-50 border-2 border-slate-50 rounded-2xl p-4 focus:border-pink-300 outline-none font-medium transition-all" />
                <input required placeholder="House No / Street" className="md:col-span-2 bg-slate-50 border-2 border-slate-50 rounded-2xl p-4 focus:border-pink-300 outline-none font-medium transition-all" />
                <input required placeholder="City" className="bg-slate-50 border-2 border-slate-50 rounded-2xl p-4 focus:border-pink-300 outline-none font-medium transition-all" />
                <input required placeholder="Pincode" className="bg-slate-50 border-2 border-slate-50 rounded-2xl p-4 focus:border-pink-300 outline-none font-medium transition-all" />
              </div>
            </section>

            {/* Payment */}
            <section className="bg-white p-10 rounded-[2.5rem] border border-slate-100 shadow-sm">
              <h3 className="text-xl font-black mb-8 flex items-center gap-4 text-slate-900 uppercase">
                <span className="w-10 h-10 rounded-2xl bg-teal-500 text-white flex items-center justify-center text-sm shadow-lg">2</span>
                Select Payment Method
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                {/* Razorpay */}
                <div 
                  onClick={() => setPaymentMethod('razorpay')}
                  className={`relative p-8 rounded-3xl border-2 transition-all cursor-pointer flex items-center gap-4 ${
                    paymentMethod === 'razorpay' 
                    ? 'border-pink-500 bg-pink-50/30 shadow-md' 
                    : 'border-slate-50 bg-slate-50 hover:border-slate-200'
                  }`}
                >
                  <div className="w-12 h-12 bg-indigo-100 rounded-2xl flex items-center justify-center overflow-hidden">
                    <img src="https://razorpay.com/favicon.png" className="w-8 h-8 object-contain" alt="Razorpay" />
                  </div>
                  <div>
                    <span className="text-xs font-black uppercase tracking-widest text-slate-900">Razorpay</span>
                    <p className="text-[9px] text-slate-400 font-bold uppercase mt-1">Cards, UPI, NetBanking</p>
                  </div>
                  {paymentMethod === 'razorpay' && <CheckCircle2 className="absolute top-4 right-4 text-pink-500" size={20} />}
                </div>

                {/* COD */}
                <div 
                  onClick={() => setPaymentMethod('cod')}
                  className={`relative p-8 rounded-3xl border-2 transition-all cursor-pointer flex items-center gap-4 ${
                    paymentMethod === 'cod' 
                    ? 'border-pink-500 bg-pink-50/30 shadow-md' 
                    : 'border-slate-50 bg-slate-50 hover:border-slate-200'
                  }`}
                >
                  <div className="w-12 h-12 bg-teal-100 rounded-2xl flex items-center justify-center text-teal-600">
                    <Banknote size={24} />
                  </div>
                  <div>
                    <span className="text-xs font-black uppercase tracking-widest text-slate-900">Cash On Delivery</span>
                    <p className="text-[9px] text-slate-400 font-bold uppercase mt-1">Pay at your doorstep</p>
                  </div>
                  {paymentMethod === 'cod' && <CheckCircle2 className="absolute top-4 right-4 text-pink-500" size={20} />}
                </div>
              </div>
              
              {paymentMethod === 'razorpay' && (
                <div className="bg-slate-50 p-6 rounded-3xl border border-slate-100 animate-pulse text-center">
                  <p className="text-[10px] font-black uppercase text-slate-400 tracking-widest">
                    You will be redirected to Razorpay secure gateway
                  </p>
                </div>
              )}
            </section>
          </div>

          {/* Summary Side */}
          <div className="lg:col-span-1">
            <div className="bg-white p-10 rounded-[3rem] border border-slate-100 sticky top-32 shadow-2xl">
              <h3 className="text-xl font-black mb-8 uppercase tracking-tighter text-slate-900">Review Order</h3>
              <div className="space-y-6 mb-10 max-h-60 overflow-y-auto pr-2 custom-scroll">
                {cart.map(item => (
                  <div key={`${item.id}-${item.selectedSize}`} className="flex gap-4 p-3 bg-slate-50 rounded-2xl border border-slate-100">
                    <div className="w-14 h-18 bg-white rounded-xl overflow-hidden flex-shrink-0 shadow-sm">
                      <img src={item.images[0]} className="w-full h-full object-cover" alt={item.name} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-xs font-black text-slate-900 truncate uppercase">{item.name}</p>
                      <p className="text-[9px] text-slate-400 font-bold uppercase mt-1">{item.selectedSize} | Qty: {item.quantity}</p>
                      <p className="text-sm font-black text-teal-600 mt-1">{formatPrice(item.price * item.quantity)}</p>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="space-y-4 border-t border-slate-100 pt-8 mb-10">
                <div className="flex justify-between text-slate-500 font-bold text-sm">
                  <span>Subtotal</span>
                  <span className="text-slate-900 font-black">{formatPrice(cartTotal)}</span>
                </div>
                <div className="flex justify-between text-slate-500 font-bold text-sm">
                  <span>GST (Tax)</span>
                  <span className="text-slate-900 font-black">₹0</span>
                </div>
                <div className="flex justify-between text-slate-500 font-bold text-sm">
                  <span>Delivery</span>
                  <span className="text-teal-500 font-black uppercase tracking-widest text-xs">Free</span>
                </div>
                <div className="h-px bg-slate-100 my-4" />
                <div className="flex justify-between items-end">
                  <span className="text-xs font-black uppercase tracking-widest text-slate-400">Total Pay</span>
                  <span className="text-4xl font-black text-slate-900">{formatPrice(cartTotal)}</span>
                </div>
              </div>

              <Button type="submit" size="full" className="rounded-[1.5rem] shadow-2xl py-6">
                {paymentMethod === 'razorpay' ? 'Proceed to Razorpay' : 'Place COD Order'}
              </Button>
              <div className="mt-6 flex items-center justify-center gap-2 text-slate-400 font-bold text-[10px] uppercase">
                <Shield size={14} className="text-teal-500" /> Secure SSL Connection
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Checkout;
