
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { CheckCircle, ShoppingBag, Truck, Gift } from 'lucide-react';
import Button from '../components/Button';

const Success: React.FC = () => {
  return (
    <div className="pt-48 pb-20 min-h-screen flex flex-col items-center justify-center text-center px-6 bg-slate-50">
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: 'spring', damping: 15 }}
        className="flex flex-col items-center"
      >
        <div className="w-32 h-32 rounded-[3rem] bg-teal-100 flex items-center justify-center text-teal-500 shadow-xl mb-10 relative">
          <CheckCircle size={80} />
          <motion.div 
            animate={{ scale: [1, 1.2, 1] }} 
            transition={{ duration: 2, repeat: Infinity }}
            className="absolute -top-2 -right-2 w-10 h-10 bg-pink-500 rounded-2xl flex items-center justify-center text-white shadow-lg"
          >
            <Gift size={20} />
          </motion.div>
        </div>
        <h1 className="text-6xl md:text-8xl font-black mb-6 uppercase tracking-tighter text-slate-900 leading-tight">YAY! ORDER<br />PLACED.</h1>
        <p className="text-xl text-slate-500 font-medium max-w-lg mb-12">
          Awesome! Your package is being curated and will reach your doorstep soon. Order ID: <span className="text-pink-600 font-black tracking-widest">#CRT-7721</span>
        </p>
        
        <div className="flex flex-wrap gap-4 justify-center">
          <Link to="/shop">
            <Button size="lg" className="px-16 shadow-2xl">
              More Fresh Picks <ShoppingBag size={20} />
            </Button>
          </Link>
          <Link to="/">
            <Button variant="outline" size="lg">Go Home</Button>
          </Link>
        </div>
      </motion.div>

      <div className="mt-24 p-12 bg-white rounded-[3rem] border border-slate-100 max-w-2xl w-full text-left shadow-xl flex flex-col md:flex-row gap-8 items-center">
        <div className="w-20 h-20 bg-pink-50 rounded-3xl flex items-center justify-center text-pink-500 flex-shrink-0">
          <Truck size={40} />
        </div>
        <div>
          <h3 className="text-2xl font-black mb-2 uppercase tracking-tighter text-slate-900">On its way!</h3>
          <p className="text-slate-500 font-medium">You will get a WhatsApp notification with tracking details in the next 4 hours. Keep a look out!</p>
        </div>
      </div>
    </div>
  );
};

export default Success;
