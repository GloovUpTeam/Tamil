
import React from 'react';
import { motion } from 'framer-motion';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'gold';
  size?: 'sm' | 'md' | 'lg' | 'full';
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ variant = 'primary', size = 'md', children, className = '', ...props }) => {
  const variants = {
    primary: 'bg-gradient-to-r from-pink-500 to-pink-600 text-white shadow-[0_4px_15px_rgba(236,72,153,0.3)] hover:shadow-[0_8px_20px_rgba(236,72,153,0.4)]',
    secondary: 'bg-gradient-to-r from-teal-500 to-teal-600 text-white shadow-[0_4px_15px_rgba(20,184,166,0.3)] hover:shadow-[0_8px_20px_rgba(20,184,166,0.4)]',
    outline: 'border-2 border-slate-200 text-slate-700 hover:bg-slate-50 hover:border-pink-200',
    ghost: 'text-slate-500 hover:text-pink-600 hover:bg-pink-50',
    gold: 'bg-gradient-to-r from-amber-400 to-amber-500 text-slate-900 font-bold shadow-[0_4px_15px_rgba(245,158,11,0.3)] hover:shadow-[0_8px_20px_rgba(245,158,11,0.4)]'
  };

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-8 py-3.5 font-semibold',
    lg: 'px-10 py-4 text-lg font-bold',
    full: 'w-full py-4 text-lg font-bold'
  };

  return (
    <motion.button
      whileTap={{ scale: 0.96, y: 1 }}
      className={`rounded-full transition-all flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </motion.button>
  );
};

export default Button;
