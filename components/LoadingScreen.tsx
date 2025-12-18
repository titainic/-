
import React from 'react';
import { motion } from 'framer-motion';

export const LoadingScreen: React.FC = () => {
  return (
    <motion.div 
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-[#4e1be6] flex items-center justify-center z-50"
    >
      <div className="flex flex-col items-center gap-2">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
          className="w-12 h-12 relative"
        >
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3 h-3 bg-white rounded-full" />
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3 h-3 bg-white rounded-full" />
        </motion.div>
      </div>
    </motion.div>
  );
};
