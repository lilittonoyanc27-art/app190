import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  X, 
  Trophy, 
  Zap,
  HelpCircle,
  Users,
  ChevronRight,
  Sparkles,
  Info
} from 'lucide-react';
import { MILLIONAIRE_QUESTIONS } from './verbData';

interface GameSessionProps {
  onClose: () => void;
}

export default function GameSession({ onClose }: GameSessionProps) {
  const [currentQuestionIdx, setCurrentQuestionIdx] = useState(0);
  const [turn, setTurn] = useState<'gor' | 'gayane'>('gor');
  const [scores, setScores] = useState({ gor: 0, gayane: 0 });
  const [feedback, setFeedback] = useState<'correct' | 'wrong' | null>(null);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [lifelines, setLifelines] = useState({
    gor: { fiftyFifty: true },
    gayane: { fiftyFifty: true }
  });
  const [hiddenOptions, setHiddenOptions] = useState<string[]>([]);
  const [isGameOver, setIsGameOver] = useState(false);

  const currentQuestion = MILLIONAIRE_QUESTIONS[currentQuestionIdx];

  const handleAnswer = (option: string) => {
    if (feedback) return;
    setSelectedOption(option);
    
    setTimeout(() => {
      if (option === currentQuestion.answer) {
        setFeedback('correct');
        setScores(prev => ({ ...prev, [turn]: prev[turn] + 1 }));
      } else {
        setFeedback('wrong');
      }
    }, 1000);
  };

  const nextQuestion = () => {
    if (currentQuestionIdx + 1 < MILLIONAIRE_QUESTIONS.length) {
      setCurrentQuestionIdx(prev => prev + 1);
      setTurn(prev => prev === 'gor' ? 'gayane' : 'gor');
      setFeedback(null);
      setSelectedOption(null);
      setHiddenOptions([]);
    } else {
      setIsGameOver(true);
    }
  };

  const useFiftyFifty = () => {
    if (!lifelines[turn].fiftyFifty || feedback || selectedOption) return;
    
    // Choose 2 random incorrect options to hide, leaving 1 correct and 1 incorrect
    const incorrectOptions = currentQuestion.options.filter(opt => opt !== currentQuestion.answer);
    const toHide = [...incorrectOptions].sort(() => Math.random() - 0.5).slice(0, 2);
    
    setHiddenOptions(toHide);
    setLifelines(prev => ({
      ...prev,
      [turn]: { ...prev[turn], fiftyFifty: false }
    }));
  };

  if (isGameOver) {
    const winner = scores.gor > scores.gayane ? 'ԳՈՌ' : scores.gayane > scores.gor ? 'ԳԱՅԱՆԵ' : 'ՈՉ-ՈՔ';
    return (
      <div className="fixed inset-0 bg-[#020617] z-[200] flex flex-col items-center justify-center p-6 text-center">
        <motion.div 
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="bg-slate-900 border-4 border-blue-500 p-10 rounded-[3rem] shadow-[0_0_50px_rgba(59,130,246,0.5)] max-w-sm w-full"
        >
          <Trophy size={80} className="mx-auto text-yellow-400 mb-6 drop-shadow-lg" />
          <h2 className="text-4xl font-black italic mb-2 tracking-tighter">ԽԱՂՆ ԱՎԱՐՏՎԵՑ</h2>
          <p className="text-blue-400 font-bold mb-8 uppercase tracking-widest">
            {winner === 'ՈՉ-ՈՔ' ? 'Ոչ-ոք չհաղթեց!' : `ՀԱՂԹՈՂ՝ ${winner}!`}
          </p>
          
          <div className="grid grid-cols-2 gap-4 mb-10">
             <div className="bg-emerald-950/30 p-4 rounded-2xl border border-emerald-500/30">
                <p className="text-xs font-bold text-emerald-400 opacity-60">ԳՈՌ</p>
                <p className="text-3xl font-black italic">{scores.gor}</p>
             </div>
             <div className="bg-pink-950/30 p-4 rounded-2xl border border-pink-500/30">
                <p className="text-xs font-bold text-pink-400 opacity-60">ԳԱՅԱՆԵ</p>
                <p className="text-3xl font-black italic">{scores.gayane}</p>
             </div>
          </div>

          <button 
            onClick={onClose}
            className="w-full py-5 bg-blue-600 rounded-2xl font-black italic tracking-widest text-xl hover:bg-blue-500 transition-colors"
          >
            ՎԵՐԱԴԱՌՆԱԼ
          </button>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 bg-[#020617] z-[150] flex flex-col font-sans overflow-hidden">
      {/* Millionaire Header */}
      <div className="flex items-center justify-between p-4 bg-slate-950/50 border-b border-blue-500/20 backdrop-blur-md">
        <button onClick={onClose} className="p-2 hover:bg-white/10 rounded-full transition-colors">
          <X className="text-white/60" />
        </button>
        
        <div className="flex items-center gap-3 sm:gap-6">
           <div className={`flex items-center gap-2 sm:gap-3 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full border-2 transition-all ${
             turn === 'gor' ? 'bg-emerald-950 border-emerald-500 shadow-[0_0_15px_rgba(16,185,129,0.3)]' : 'bg-emerald-900/20 border-transparent opacity-40'
           }`}>
              <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full overflow-hidden bg-emerald-800">
                 <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Gor&topType=shortHair&hairColor=2c1b18&clothingType=overall&clothingColor=064e3b" alt="Gor" />
              </div>
              <span className="font-black italic text-xs sm:text-sm">ԳՈՌ: {scores.gor}</span>
           </div>

           <div className={`flex items-center gap-2 sm:gap-3 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full border-2 transition-all ${
             turn === 'gayane' ? 'bg-pink-950 border-pink-500 shadow-[0_0_15px_rgba(236,72,153,0.3)]' : 'bg-pink-900/20 border-transparent opacity-40'
           }`}>
              <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full overflow-hidden bg-pink-800">
                 <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Gayane&topType=longHair&hairColor=77311d&clothingType=overall&clothingColor=881337" alt="Gayane" />
              </div>
              <span className="font-black italic text-xs sm:text-sm">ԳԱՅԱՆԵ: {scores.gayane}</span>
           </div>
        </div>

        <div className="flex gap-2">
           <button 
             onClick={useFiftyFifty}
             disabled={!lifelines[turn].fiftyFifty || !!feedback}
             className={`w-12 h-10 rounded-lg border-2 flex items-center justify-center transition-all ${
               lifelines[turn].fiftyFifty 
                 ? 'border-blue-500 text-blue-400 hover:bg-blue-500/20' 
                 : 'border-white/10 text-white/10'
             }`}
           >
              <span className="font-black italic text-xs">50/50</span>
           </button>
        </div>
      </div>

      {/* Main Millionaire UI */}
      <div className="flex-1 flex flex-col items-center justify-between p-6 pb-12 relative">
         {/* Background Decor */}
         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] opacity-10 pointer-events-none">
            <div className="w-full h-full border-[100px] border-blue-500/20 rounded-full" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[2px] bg-blue-500/40 rotate-45" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[2px] bg-blue-500/40 -rotate-45" />
         </div>

         {/* Question Section */}
         <div className="w-full max-w-2xl mt-4 sm:mt-12 relative z-10 px-2">
            <div className="text-center mb-4">
               <span className="text-blue-400 font-bold bg-blue-900/30 px-4 py-1 rounded-full text-[10px] sm:text-xs uppercase tracking-widest border border-blue-500/30">
                 ՀԱՐՑ {currentQuestionIdx + 1} / 15
               </span>
            </div>
            
            <div className="relative group">
               <div className="absolute inset-0 bg-blue-600/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
               <div className="relative bg-black/60 backdrop-blur-xl border-x-4 border-y border-blue-500 p-6 sm:p-10 rounded-2xl shadow-2xl overflow-hidden min-h-[140px] sm:min-h-[160px] flex flex-col items-center justify-center">
                  <div className="absolute left-0 top-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-[1px] bg-blue-500" />
                  <div className="absolute right-0 top-1/2 translate-x-1/2 -translate-y-1/2 w-4 h-[1px] bg-blue-500" />
                  
                  <h3 className="text-xl sm:text-3xl font-black text-center text-white italic tracking-tighter leading-relaxed">
                    {currentQuestion.question}
                  </h3>
                  <p className="text-blue-400/60 font-bold italic text-xs sm:text-sm mt-3 sm:mt-4 text-center">
                    {currentQuestion.translation}
                  </p>
               </div>
            </div>
         </div>

         {/* Options Grid */}
         <div className="w-full max-w-3xl grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-x-12 sm:gap-y-6 relative z-10 px-2 mt-4">
            {currentQuestion.options.map((opt, i) => {
              const letter = ['A', 'B', 'C', 'D'][i];
              const isHidden = hiddenOptions.includes(opt);
              const isSelected = selectedOption === opt;
              
              let variantClass = 'border-blue-500/40 hover:border-blue-400 hover:bg-blue-900/20';
              if (isSelected) {
                if (feedback === 'correct') variantClass = 'border-emerald-500 bg-emerald-500/20 text-emerald-400';
                else if (feedback === 'wrong') variantClass = 'border-red-500 bg-red-500/20 text-red-400';
                else variantClass = 'border-yellow-500 bg-yellow-500/20 text-yellow-400 animate-pulse';
              } else if (feedback === 'wrong' && opt === currentQuestion.answer) {
                variantClass = 'border-emerald-500 bg-emerald-500/20 text-emerald-400';
              }

              if (isHidden) return <div key={i} className="h-14 sm:h-16 hidden sm:block" />;

              return (
                <button
                  key={i}
                  disabled={!!feedback}
                  onClick={() => handleAnswer(opt)}
                  className={`group relative h-14 sm:h-16 transition-all flex items-center px-6 sm:px-8 border-x-4 border-y rounded-full ${variantClass}`}
                >
                   <div className="absolute left-0 top-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-[1px] bg-blue-500/40" />
                   <div className="absolute right-0 top-1/2 translate-x-1/2 -translate-y-1/2 w-3 h-[1px] bg-blue-500/40" />
                   
                   <span className="text-yellow-500 font-black italic mr-3 sm:mr-4">{letter}:</span>
                   <span className="text-sm sm:text-lg font-black italic tracking-tight">{opt}</span>
                </button>
              );
            })}
         </div>

         {/* Feedback Area */}
         <AnimatePresence>
            {feedback && (
               <motion.div 
                 initial={{ opacity: 0, y: 20 }}
                 animate={{ opacity: 1, y: 0 }}
                 className="fixed bottom-12 inset-x-0 flex flex-col items-center gap-4 z-50 px-6"
               >
                  <div className={`p-6 rounded-[2rem] border-2 backdrop-blur-2xl shadow-2xl max-w-md w-full flex items-center gap-6 ${
                    feedback === 'correct' ? 'bg-emerald-950/80 border-emerald-500' : 'bg-red-950/80 border-red-500'
                  }`}>
                     <div className={`w-14 h-14 rounded-2xl flex items-center justify-center shrink-0 ${
                       feedback === 'correct' ? 'bg-emerald-500/20 text-emerald-400' : 'bg-red-500/20 text-red-400'
                     }`}>
                        {feedback === 'correct' ? <Sparkles size={32} /> : <Info size={32} />}
                     </div>
                     <div className="flex-1">
                        <p className="text-xs font-black uppercase tracking-[0.2em] mb-1 opacity-60">
                           {feedback === 'correct' ? 'ՓԱՌԱՀԵՂ ՊԱՏԱՍԽԱՆ!' : 'ԱՓՍՈՍ, ՍԽԱԼ Է!'}
                        </p>
                        <p className="font-bold leading-tight italic">
                           {currentQuestion.explanation}
                        </p>
                     </div>
                  </div>
                  
                  <button 
                    onClick={nextQuestion}
                    className="group relative px-10 py-4 bg-white text-blue-900 rounded-full font-black italic tracking-widest transition-all hover:scale-105 active:scale-95 shadow-2xl flex items-center gap-3"
                  >
                    ՇԱՐՈՒՆԱԿԵԼ <ChevronRight />
                  </button>
               </motion.div>
            )}
         </AnimatePresence>
      </div>
    </div>
  );
}
