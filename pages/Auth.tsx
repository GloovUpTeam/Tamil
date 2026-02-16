
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Eye, EyeOff, Facebook, Chrome, Mail, Lock } from 'lucide-react';
import Button from '../components/Button';

export const Login: React.FC = () => {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="pt-40 pb-20 min-h-screen bg-slate-50 flex items-center justify-center px-6">
      <div className="w-full max-w-md bg-white p-12 rounded-[3rem] border border-slate-100 shadow-[0_30px_60px_rgba(0,0,0,0.05)] relative overflow-hidden">
        {/* Abstract decorative elements */}
        <div className="absolute -top-10 -right-10 w-32 h-32 bg-pink-100 rounded-full blur-3xl opacity-50" />
        <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-teal-100 rounded-full blur-3xl opacity-50" />

        <div className="text-center mb-12 relative z-10">
          <h1 className="text-4xl font-black uppercase tracking-tighter mb-4 text-slate-900 leading-tight">WELCOME<br />BACK</h1>
          <p className="text-slate-400 font-bold uppercase tracking-widest text-[10px]">Your personal trendsetter portal</p>
        </div>

        <form className="space-y-6 relative z-10" onSubmit={(e) => { e.preventDefault(); navigate('/'); }}>
          <div className="space-y-2">
            <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-4">Email</label>
            <div className="relative">
              <Mail className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-300" size={18} />
              <input required type="email" placeholder="you@example.com" className="w-full bg-slate-50 border-2 border-slate-50 rounded-2xl p-4 pl-14 focus:border-pink-300 outline-none font-medium transition-all" />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-4">Password</label>
            <div className="relative">
              <Lock className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-300" size={18} />
              <input required type={showPassword ? 'text' : 'password'} placeholder="••••••••" className="w-full bg-slate-50 border-2 border-slate-50 rounded-2xl p-4 pl-14 focus:border-pink-300 outline-none font-medium transition-all" />
              <button 
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-5 top-1/2 -translate-y-1/2 text-slate-300 hover:text-slate-900"
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>
          </div>

          <div className="flex justify-end">
            <button type="button" className="text-[10px] font-black text-pink-500 hover:underline uppercase tracking-widest">Forgot Access?</button>
          </div>

          <Button type="submit" size="full" className="shadow-2xl py-5 rounded-[1.5rem]">Sign In Now</Button>
        </form>

        <div className="relative my-10 z-10">
          <div className="h-px bg-slate-100" />
          <span className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 bg-white px-4 text-[9px] font-black text-slate-300 uppercase tracking-widest">Quick Login</span>
        </div>

        <div className="grid grid-cols-2 gap-4 mb-10 relative z-10">
          <button className="flex items-center justify-center gap-3 p-4 bg-slate-50 border border-slate-100 rounded-2xl hover:bg-slate-100 transition-all font-bold text-xs text-slate-700">
            <Chrome size={16} /> Google
          </button>
          <button className="flex items-center justify-center gap-3 p-4 bg-slate-50 border border-slate-100 rounded-2xl hover:bg-slate-100 transition-all font-bold text-xs text-slate-700">
            <Facebook size={16} className="text-blue-600" /> Facebook
          </button>
        </div>

        <p className="text-center text-slate-400 text-xs font-bold relative z-10 uppercase tracking-tight">
          New to CRT? <Link to="/signup" className="text-pink-500 font-black">Join The Circle</Link>
        </p>
      </div>
    </div>
  );
};

export const Signup: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="pt-40 pb-20 min-h-screen bg-slate-50 flex items-center justify-center px-6">
      <div className="w-full max-w-md bg-white p-12 rounded-[3rem] border border-slate-100 shadow-2xl relative">
        <div className="text-center mb-10">
          <h1 className="text-4xl font-black uppercase tracking-tighter mb-4 text-slate-900 leading-tight">JOIN THE<br />CIRCLE</h1>
          <p className="text-slate-400 font-bold uppercase tracking-widest text-[10px]">Start your trend journey</p>
        </div>

        <form className="space-y-6" onSubmit={(e) => { e.preventDefault(); navigate('/'); }}>
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-1">
              <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-2">Name</label>
              <input required placeholder="First" className="w-full bg-slate-50 border-2 border-slate-50 rounded-2xl p-4 focus:border-pink-300 outline-none font-medium transition-all" />
            </div>
            <div className="space-y-1">
              <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-2">Sur</label>
              <input required placeholder="Last" className="w-full bg-slate-50 border-2 border-slate-50 rounded-2xl p-4 focus:border-pink-300 outline-none font-medium transition-all" />
            </div>
          </div>

          <div className="space-y-1">
            <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-2">Email Address</label>
            <input required type="email" placeholder="you@example.com" className="w-full bg-slate-50 border-2 border-slate-50 rounded-2xl p-4 focus:border-pink-300 outline-none font-medium transition-all" />
          </div>

          <div className="space-y-1">
            <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-2">Set Password</label>
            <input required type="password" placeholder="••••••••" className="w-full bg-slate-50 border-2 border-slate-50 rounded-2xl p-4 focus:border-pink-300 outline-none font-medium transition-all" />
          </div>

          <label className="flex items-center gap-4 cursor-pointer p-2 hover:bg-slate-50 rounded-xl transition-all">
            <input required type="checkbox" className="w-5 h-5 accent-pink-600 rounded-md" />
            <span className="text-[10px] text-slate-400 font-black uppercase tracking-widest leading-tight">I Agree To CRT Terms</span>
          </label>

          <Button type="submit" size="full" className="shadow-2xl py-6 rounded-[1.5rem]">Create My Account</Button>
        </form>

        <p className="text-center text-slate-400 text-xs font-bold mt-10 uppercase tracking-tight">
          Already one of us? <Link to="/login" className="text-pink-500 font-black">Login Back</Link>
        </p>
      </div>
    </div>
  );
};
