
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Eye, EyeOff } from 'lucide-react';

interface LoginFormProps {
  onLogin: () => void;
}

export const LoginForm: React.FC<LoginFormProps> = ({ onLogin }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onLogin();
  };

  return (
    <motion.div 
      initial={{ x: 50, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      className="w-full max-w-md px-8 py-12"
    >
      <div className="flex justify-end mb-12">
        <div className="w-10 h-10 bg-black rounded-lg flex items-center justify-center rotate-45">
          <div className="w-6 h-1 bg-white rounded-full -rotate-45" />
          <div className="w-1 h-6 bg-white rounded-full -rotate-45 absolute" />
        </div>
      </div>

      <h1 className="text-4xl font-bold text-gray-900 mb-2">Welcome back!</h1>
      <p className="text-gray-500 mb-10 font-medium">Please enter your details</p>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">Email</label>
          <input 
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="anna@gmail.com"
            className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#4e1be6] transition-all"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">Password</label>
          <div className="relative">
            <input 
              type={showPassword ? 'text' : 'password'}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#4e1be6] transition-all"
              required
            />
            <button 
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
            >
              {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>
          </div>
        </div>

        <div className="flex items-center justify-between">
          <label className="flex items-center space-x-2 cursor-pointer group">
            <input type="checkbox" className="w-4 h-4 rounded border-gray-300 text-[#4e1be6] focus:ring-[#4e1be6]" />
            <span className="text-xs text-gray-500 group-hover:text-gray-700 transition-colors font-medium">Remember for 30 days</span>
          </label>
          <button type="button" className="text-xs font-semibold text-gray-900 hover:underline">Forgot password?</button>
        </div>

        <div className="space-y-4 pt-4">
          <motion.button 
            whileTap={{ scale: 0.98 }}
            type="submit"
            className="w-full py-3.5 bg-[#1a1a1a] text-white rounded-xl font-bold text-sm shadow-lg hover:bg-black transition-colors"
          >
            Log in
          </motion.button>

          <motion.button 
            whileTap={{ scale: 0.98 }}
            type="button"
            className="w-full py-3.5 bg-white border border-gray-200 text-gray-900 rounded-xl font-bold text-sm flex items-center justify-center space-x-3 shadow-sm hover:bg-gray-50 transition-colors"
          >
            <img src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/smartlock/google.svg" alt="Google" className="w-5 h-5" />
            <span>Log in with Google</span>
          </motion.button>
        </div>
      </form>

      <div className="mt-12 text-center">
        <p className="text-sm text-gray-500 font-medium">
          Don't have an account? <button className="text-gray-900 font-bold hover:underline">Sign Up</button>
        </p>
      </div>
    </motion.div>
  );
};
