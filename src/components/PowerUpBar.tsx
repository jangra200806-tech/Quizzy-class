import React from 'react';
import { Lightbulb, Clock, FastForward } from 'lucide-react';
import { sound } from '../utils/audio';

interface Props {
  hintsLeft: number;
  extraTimeLeft: number;
  skipsLeft: number;
  disabled: boolean;
  onUseHint: () => void;
  onUseExtraTime: () => void;
  onUseSkip: () => void;
}

export const PowerUpBar: React.FC<Props> = ({
  hintsLeft,
  extraTimeLeft,
  skipsLeft,
  disabled,
  onUseHint,
  onUseExtraTime,
  onUseSkip
}) => {
  return (
    <div className="w-full max-w-md mx-auto px-4 py-1.5 flex items-center justify-center gap-3 select-none z-10">
      {/* 1. HINT POWER-UP */}
      <button
        id="powerup-hint-btn"
        disabled={disabled || hintsLeft <= 0}
        onClick={() => {
          sound.playPowerUp();
          onUseHint();
        }}
        className={`
          flex-1 py-1.5 px-2 rounded-xl border-b-2 font-bold text-xs flex items-center justify-center gap-1.5 shadow-sm transition active:scale-95
          ${
            hintsLeft > 0 && !disabled
              ? 'bg-amber-100 hover:bg-amber-200 text-amber-900 border-amber-300'
              : 'bg-slate-100 text-slate-400 border-slate-200 opacity-50 cursor-not-allowed'
          }
        `}
        title="50:50 Hint: Removes 2 wrong answers"
      >
        <Lightbulb size={16} className={hintsLeft > 0 ? 'text-amber-600' : 'text-slate-400'} />
        <span className="hidden xs:inline">Hint</span>
        <span className="bg-amber-600 text-white text-[10px] font-black px-1.5 py-0.2 rounded-full">
          {hintsLeft}
        </span>
      </button>

      {/* 2. EXTRA TIME (+5s) POWER-UP */}
      <button
        id="powerup-time-btn"
        disabled={disabled || extraTimeLeft <= 0}
        onClick={() => {
          sound.playPowerUp();
          onUseExtraTime();
        }}
        className={`
          flex-1 py-1.5 px-2 rounded-xl border-b-2 font-bold text-xs flex items-center justify-center gap-1.5 shadow-sm transition active:scale-95
          ${
            extraTimeLeft > 0 && !disabled
              ? 'bg-cyan-100 hover:bg-cyan-200 text-cyan-900 border-cyan-300'
              : 'bg-slate-100 text-slate-400 border-slate-200 opacity-50 cursor-not-allowed'
          }
        `}
        title="+5 Seconds Extra Time"
      >
        <Clock size={16} className={extraTimeLeft > 0 ? 'text-cyan-600' : 'text-slate-400'} />
        <span>+5s</span>
        <span className="bg-cyan-600 text-white text-[10px] font-black px-1.5 py-0.2 rounded-full">
          {extraTimeLeft}
        </span>
      </button>

      {/* 3. SKIP POWER-UP */}
      <button
        id="powerup-skip-btn"
        disabled={disabled || skipsLeft <= 0}
        onClick={() => {
          sound.playPowerUp();
          onUseSkip();
        }}
        className={`
          flex-1 py-1.5 px-2 rounded-xl border-b-2 font-bold text-xs flex items-center justify-center gap-1.5 shadow-sm transition active:scale-95
          ${
            skipsLeft > 0 && !disabled
              ? 'bg-purple-100 hover:bg-purple-200 text-purple-900 border-purple-300'
              : 'bg-slate-100 text-slate-400 border-slate-200 opacity-50 cursor-not-allowed'
          }
        `}
        title="Skip Question without penalty"
      >
        <FastForward size={16} className={skipsLeft > 0 ? 'text-purple-600' : 'text-slate-400'} />
        <span className="hidden xs:inline">Skip</span>
        <span className="bg-purple-600 text-white text-[10px] font-black px-1.5 py-0.2 rounded-full">
          {skipsLeft}
        </span>
      </button>
    </div>
  );
};
