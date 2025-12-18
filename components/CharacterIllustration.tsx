
import React, { useState, useEffect, useRef } from 'react';
import { motion, useSpring, useTransform, AnimatePresence } from 'framer-motion';

const Eye = ({ x, y, size = 12 }: { x: any; y: any; size?: number }) => {
  const [isBlinking, setIsBlinking] = useState(false);

  useEffect(() => {
    const blinkInterval = setInterval(() => {
      if (Math.random() > 0.7) {
        setIsBlinking(true);
        setTimeout(() => setIsBlinking(false), 150);
      }
    }, 3000);
    return () => clearInterval(blinkInterval);
  }, []);

  return (
    <div
      className="relative bg-white rounded-full flex items-center justify-center overflow-hidden transition-all duration-150"
      style={{ 
        width: size, 
        height: isBlinking ? size * 0.1 : size,
        marginTop: isBlinking ? size * 0.45 : 0 
      }}
    >
      {!isBlinking && (
        <motion.div
          className="bg-black rounded-full"
          style={{
            width: size * 0.45,
            height: size * 0.45,
            x,
            y,
          }}
        />
      )}
    </div>
  );
};

export const CharacterIllustration: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      setMousePos({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Smooth springs for eye movement
  const springConfig = { damping: 25, stiffness: 250 };
  const eyeX = useSpring(useTransform(() => mousePos.x * 6), springConfig);
  const eyeY = useSpring(useTransform(() => mousePos.y * 6), springConfig);

  // Body lean transformation
  const leanX = useTransform(() => mousePos.x * 10);
  const leanY = useTransform(() => mousePos.y * 5);

  return (
    <div ref={containerRef} className="relative w-full h-full flex items-end justify-center pb-12 overflow-visible">
      <div className="relative w-[340px] h-[260px]">
        {/* Purple tall blob (Back Left) */}
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ 
            y: [0, -10, 0],
            rotate: [0, -1, 0, 1, 0],
            opacity: 1 
          }}
          style={{ x: useTransform(() => mousePos.x * 5) }}
          transition={{ 
            // Fixed: Moved initial duration to top-level as 'initial' is not a valid property in Transition
            duration: 0.6,
            y: { duration: 4, repeat: Infinity, ease: "easeInOut" },
            rotate: { duration: 6, repeat: Infinity, ease: "easeInOut" },
            delay: 0.3 
          }}
          className="absolute bottom-12 left-12 w-16 h-44 bg-[#6d5ae6] rounded-t-3xl flex flex-col items-center pt-10 space-y-1 z-0 shadow-lg"
        >
          <div className="flex space-x-2">
            <Eye x={eyeX} y={eyeY} size={11} />
            <Eye x={eyeX} y={eyeY} size={11} />
          </div>
        </motion.div>

        {/* Orange blob (Front Left) */}
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ 
            scale: 1, 
            opacity: 1,
            y: [0, -15, 0],
            scaleX: [1, 1.02, 1],
            scaleY: [1, 0.98, 1]
          }}
          style={{ x: useTransform(() => mousePos.x * 15) }}
          transition={{ 
            // Fixed: Moved initial duration and type to top-level
            duration: 0.5,
            type: 'spring',
            y: { duration: 3.5, repeat: Infinity, ease: "easeInOut" },
            scaleX: { duration: 3, repeat: Infinity, ease: "easeInOut" },
            scaleY: { duration: 3, repeat: Infinity, ease: "easeInOut" },
            delay: 0.2 
          }}
          className="absolute bottom-0 left-0 w-48 h-32 bg-[#f0854c] rounded-t-[120px] flex justify-center pt-8 space-x-4 z-20 shadow-xl"
        >
          <Eye x={eyeX} y={eyeY} size={14} />
          <Eye x={eyeY} y={eyeY} size={14} />
        </motion.div>

        {/* Black tall blob (Center) */}
        <motion.div
          initial={{ y: 80, opacity: 0 }}
          animate={{ 
            y: [0, -8, 0],
            scaleY: [1, 1.05, 1],
            opacity: 1 
          }}
          style={{ x: useTransform(() => mousePos.x * 8) }}
          transition={{ 
            // Fixed: Moved initial duration to top-level
            duration: 0.6,
            y: { duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 },
            scaleY: { duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 },
            delay: 0.4 
          }}
          className="absolute bottom-0 left-40 w-16 h-48 bg-[#1a1a1a] rounded-t-2xl flex flex-col items-center pt-12 space-y-2 z-10 shadow-2xl"
        >
          <div className="flex space-x-1.5">
            <Eye x={eyeX} y={eyeY} size={12} />
            <Eye x={eyeX} y={eyeY} size={12} />
          </div>
        </motion.div>

        {/* Yellow bird-like blob (Right) */}
        <motion.div
          initial={{ x: 50, opacity: 0 }}
          animate={{ 
            x: 0, 
            opacity: 1,
            y: [0, -12, 0],
            rotate: [0, 2, 0, -2, 0]
          }}
          style={{ x: useTransform(() => mousePos.x * 20) }}
          transition={{ 
            // Fixed: Moved initial duration and type to top-level
            duration: 0.6,
            type: 'spring',
            y: { duration: 4.2, repeat: Infinity, ease: "easeInOut", delay: 1 },
            rotate: { duration: 5.5, repeat: Infinity, ease: "easeInOut" },
            delay: 0.5 
          }}
          className="absolute bottom-0 left-56 w-32 h-36 bg-[#edda53] rounded-t-full flex justify-center pt-12 space-x-3 z-30 shadow-xl"
        >
          <Eye x={eyeX} y={eyeY} size={13} />
          <Eye x={eyeX} y={eyeY} size={13} />
        </motion.div>
      </div>
    </div>
  );
};
