import React, { useEffect, useState } from 'react';

export const ProgressBar: React.FC = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const calculateProgress = () => {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollTop = window.scrollY;
      
      const maxScroll = documentHeight - windowHeight;
      
      if (maxScroll <= 0) {
        setProgress(100);
        return;
      }

      const currentProgress = (scrollTop / maxScroll) * 100;
      setProgress(Math.min(100, Math.max(0, currentProgress)));
    };

    window.addEventListener('scroll', calculateProgress);
    calculateProgress();

    return () => window.removeEventListener('scroll', calculateProgress);
  }, []);

  return (
    <div className="fixed left-6 md:left-8 top-1/2 -translate-y-1/2 z-40 hidden md:flex flex-col items-center gap-6">
       {/* Top Label */}
       <div className="text-[10px] font-bold text-slate-400 mix-blend-difference -rotate-90 tracking-[0.2em] whitespace-nowrap">
          SCROLL
       </div>

       {/* Track */}
       <div className="w-1 h-32 md:h-48 bg-slate-400/30 rounded-full relative overflow-hidden backdrop-blur-sm">
          {/* Indicator */}
          <div 
            className="absolute top-0 left-0 w-full bg-primary-600 transition-all duration-150 ease-out shadow-[0_0_10px_rgba(37,99,235,0.5)]"
            style={{ height: `${progress}%` }} 
          />
       </div>
       
       {/* Bottom Label/Number */}
       <div className="text-[10px] font-bold text-slate-900 mix-blend-difference rotate-90 tracking-widest tabular-nums w-4 h-4 flex items-center justify-center">
          {Math.round(progress).toString().padStart(2, '0')}%
       </div>
    </div>
  );
};