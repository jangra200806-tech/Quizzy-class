import React, { useEffect, useRef } from 'react';
import { Clock } from 'lucide-react';
import { sound } from '../utils/audio';

interface Props {
  timeLeft: number; // 0 to 20
  maxTime?: number; // default 20
  isPaused: boolean;
  onTickSound?: boolean;
}

export const TimerBar: React.FC<Props> = ({
  timeLeft,
  maxTime = 20,
  isPaused,
  onTickSound = true
}) => {
  const percentage = Math.max(0, Math.min(100, (timeLeft / maxTime) * 100));
  const isUrgent = timeLeft <= 3.0;
  const isWarning = timeLeft <= 5.5 && !isUrgent;

  // Sound ticking during last 3 seconds
  const lastSecRef = useRef<number>(Math.ceil(timeLeft));

  useEffect(() => {
    const currentSec = Math.ceil(timeLeft);
    if (isUrgent && currentSec !== lastSecRef.current && currentSec > 0 && !isPaused && onTickSound) {
      sound.playTick();
    }
    lastSecRef.current = currentSec;
  }, [timeLeft, isUrgent, isPaused, onTickSound]);

  // Color transition
  const getTimerColor = () => {
    if (isUrgent) return 'from-rose-500 to-red-600';
    if (isWarning) return 'from-amber-400 to-orange-500';
    return 'from-emerald-400 to-teal-500';
  };

  return (
    <div className="w-full px-4 py-1 select-none z-10">
      <div className="flex items-center justify-between text-xs font-black mb-1">
        <div className={`flex items-center gap-1 ${isUrgent ? 'text-red-600 animate-pulse' : 'text-slate-700'}`}>
          <Clock size={14} className={isUrgent ? 'animate-spin' : ''} style={{ animationDuration: '3s' }} />
          <span>TIME</span>
        </div>
        <div 
          className={`font-mono text-sm px-2 py-0.5 rounded-md font-black shadow-sm ${
            isUrgent 
              ? 'bg-red-500 text-white animate-bounce' 
              : isWarning 
                ? 'bg-amber-100 text-amber-800' 
                : 'bg-emerald-100 text-emerald-800'
          }`}
        >
          {timeLeft.toFixed(1)}s
        </div>
      </div>

      <div className="w-full h-3.5 bg-slate-200/90 rounded-full border-2 border-slate-300 overflow-hidden shadow-inner p-0.5">
        <div
          className={`h-full rounded-full bg-gradient-to-r ${getTimerColor()} transition-all duration-100 ${
            isUrgent ? 'animate-pulse' : ''
          }`}
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );
};
