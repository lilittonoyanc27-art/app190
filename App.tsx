import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Trophy, 
  Play
} from 'lucide-react';
import GameSession from './GameSession';

type Screen = 'dashboard' | 'game';

export default function App() {
  const [screen, setScreen] = useState<Screen>('dashboard');

  return (
    <div className="min-h-screen bg-[#020617] font-sans text-slate-100 overflow-hidden relative">
      {/* Millionaire Background Decor */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-900/20 rounded-full blur-[120px]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#020617_70%)]" />
      </div>

      <AnimatePresence mode="wait">
        {screen === 'dashboard' && (
          <motion.div 
            key="dashboard"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="flex flex-col items-center justify-center min-h-screen p-6 relative z-10"
          >
            <div className="text-center mb-12 relative">
               <motion.div
                 animate={{ rotate: 360 }}
                 transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 border-4 border-blue-500/20 rounded-full border-t-blue-500"
               />
               <div className="relative bg-black/40 p-10 rounded-full border-4 border-blue-500 shadow-[0_0_50px_rgba(59,130,246,0.3)]">
                  <Trophy size={64} className="text-yellow-400 drop-shadow-lg" />
               </div>
               <h1 className="text-4xl sm:text-6xl font-black italic tracking-tighter text-white mt-8 mb-2 drop-shadow-2xl">
                 MILLIONAIRE
               </h1>
               <p className="text-blue-400 font-bold tracking-[0.3em] uppercase text-sm">Pretérito Perfecto</p>
            </div>

            <div className="grid grid-cols-2 gap-4 sm:gap-8 w-full max-w-md mb-8 sm:mb-12">
               <div className="flex flex-col items-center gap-3">
                  <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full border-4 border-emerald-500/50 bg-emerald-950/50 overflow-hidden relative">
                    <img 
                      src="https://api.dicebear.com/7.x/avataaars/svg?seed=Gor&topType=shortHair&hairColor=2c1b18&clothingType=overall&clothingColor=064e3b" 
                      alt="Gor"
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <span className="text-lg sm:text-xl font-black italic">ԳՈՌ</span>
               </div>
               <div className="flex flex-col items-center gap-3">
                  <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full border-4 border-pink-500/50 bg-pink-950/50 overflow-hidden relative">
                    <img 
                      src="https://api.dicebear.com/7.x/avataaars/svg?seed=Gayane&topType=longHair&hairColor=77311d&clothingType=overall&clothingColor=881337" 
                      alt="Gayane"
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <span className="text-lg sm:text-xl font-black italic">ԳԱՅԱՆԵ</span>
               </div>
            </div>

            <button 
              onClick={() => setScreen('game')}
              className="group relative px-12 py-5 bg-gradient-to-r from-blue-600 to-indigo-700 rounded-full font-black text-xl italic tracking-widest shadow-[0_0_30px_rgba(37,99,235,0.4)] transition-all hover:scale-105 active:scale-95 flex items-center gap-3 overflow-hidden"
            >
              <div className="absolute inset-0 bg-white/10 translate-x-full group-hover:translate-x-0 transition-transform duration-500" />
              <Play fill="currentColor" /> ՍԿՍԵԼ ԽԱՂԸ
            </button>
          </motion.div>
        )}

        {screen === 'game' && (
          <GameSession 
            key="millionaire-game"
            onClose={() => setScreen('dashboard')} 
          />
        )}
      </AnimatePresence>
    </div>
  );
}
