
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { LoadingScreen } from './components/LoadingScreen';
import { LoginForm } from './components/LoginForm';
import { Dashboard } from './components/Dashboard';
import { CharacterIllustration } from './components/CharacterIllustration';
import { AppState } from './types';

const App: React.FC = () => {
  const [appState, setAppState] = useState<AppState>('LOADING');

  useEffect(() => {
    // Initial loading simulation
    const timer = setTimeout(() => {
      setAppState('LOGIN');
    }, 2500);
    return () => clearTimeout(timer);
  }, []);

  const handleLogin = () => {
    setAppState('DASHBOARD');
  };

  return (
    <div className="h-screen w-screen overflow-hidden bg-gray-100 selection:bg-[#4e1be6]/30">
      <AnimatePresence mode="wait">
        {appState === 'LOADING' && (
          <LoadingScreen key="loading" />
        )}

        {appState === 'LOGIN' && (
          <motion.div 
            key="login"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="flex items-center justify-center min-h-screen p-6"
          >
            <div className="bg-white w-full max-w-6xl h-[720px] rounded-[40px] shadow-2xl flex overflow-hidden">
              {/* Left Side: Illustration Area */}
              <div className="w-[45%] bg-[#e5e7eb] relative flex flex-col items-center overflow-hidden">
                {/* Diagonal cut from design */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-white -translate-y-16 translate-x-16 rotate-45" />
                
                {/* Logo area in the video */}
                <div className="mt-16 w-12 h-12 relative flex items-center justify-center rotate-45 bg-[#1a1a1a] rounded-lg">
                   <div className="absolute w-2 h-2 bg-white rounded-full translate-x-1 translate-y-1" />
                   <div className="absolute w-2 h-2 bg-white rounded-full -translate-x-1 -translate-y-1" />
                </div>

                <CharacterIllustration />
              </div>

              {/* Right Side: Form Area */}
              <div className="flex-1 flex items-center justify-center">
                <LoginForm onLogin={handleLogin} />
              </div>
            </div>
          </motion.div>
        )}

        {appState === 'DASHBOARD' && (
          <Dashboard key="dashboard" />
        )}
      </AnimatePresence>
    </div>
  );
};

export default App;
