import React from 'react';
import { CheckCircle2, XCircle } from 'lucide-react';

interface Props {
  options: [string, string, string, string];
  selectedIndex: number | null;
  correctIndex: number;
  eliminatedIndices: number[]; // From Hint power-up
  isAnswered: boolean;
  onSelectOption: (index: number) => void;
}

export const AnswerGrid: React.FC<Props> = ({
  options,
  selectedIndex,
  correctIndex,
  eliminatedIndices,
  isAnswered,
  onSelectOption
}) => {
  const letters = ['A', 'B', 'C', 'D'];

  const buttonBaseColors = [
    // A: Coral
    {
      bg: 'bg-rose-500 hover:bg-rose-600 active:bg-rose-700',
      border: 'border-rose-700',
      badge: 'bg-rose-700 text-white'
    },
    // B: Sky Blue
    {
      bg: 'bg-sky-500 hover:bg-sky-600 active:bg-sky-700',
      border: 'border-sky-700',
      badge: 'bg-sky-700 text-white'
    },
    // C: Amber
    {
      bg: 'bg-amber-500 hover:bg-amber-600 active:bg-amber-700',
      border: 'border-amber-700',
      badge: 'bg-amber-700 text-white'
    },
    // D: Emerald
    {
      bg: 'bg-emerald-500 hover:bg-emerald-600 active:bg-emerald-700',
      border: 'border-emerald-700',
      badge: 'bg-emerald-700 text-white'
    }
  ];

  return (
    <div className="w-full max-w-md mx-auto px-4 py-2 select-none z-10">
      <div className="grid grid-cols-2 gap-2.5 sm:gap-3">
        {options.map((optionText, idx) => {
          const isEliminated = eliminatedIndices.includes(idx);
          const isSelected = selectedIndex === idx;
          const isCorrect = idx === correctIndex;

          let colorClasses = `${buttonBaseColors[idx].bg} ${buttonBaseColors[idx].border} text-white`;
          let badgeColor = buttonBaseColors[idx].badge;

          if (isAnswered) {
            if (isCorrect) {
              colorClasses = 'bg-emerald-600 border-emerald-800 text-white shadow-lg ring-4 ring-emerald-300 scale-[1.02]';
              badgeColor = 'bg-emerald-800 text-white';
            } else if (isSelected && !isCorrect) {
              colorClasses = 'bg-red-600 border-red-800 text-white animate-shake ring-4 ring-red-300';
              badgeColor = 'bg-red-800 text-white';
            } else {
              colorClasses = 'bg-slate-300 border-slate-400 text-slate-500 opacity-40';
              badgeColor = 'bg-slate-400 text-slate-200';
            }
          } else if (isEliminated) {
            colorClasses = 'bg-slate-200 border-slate-300 text-slate-400 opacity-25 cursor-not-allowed';
            badgeColor = 'bg-slate-300 text-slate-500';
          }

          return (
            <button
              id={`answer-btn-${idx}`}
              key={idx}
              disabled={isAnswered || isEliminated}
              onClick={() => onSelectOption(idx)}
              className={`
                relative min-h-[64px] sm:min-h-[72px] px-3 py-2 rounded-2xl border-b-4 
                font-bold text-sm sm:text-base flex items-center justify-start gap-2.5 text-left
                shadow-md transition-all active:translate-y-1 active:border-b-0
                touch-manipulation focus:outline-none
                ${colorClasses}
              `}
            >
              {/* Option Letter Badge (A, B, C, D) */}
              <span className={`w-7 h-7 sm:w-8 sm:h-8 rounded-xl flex items-center justify-center font-black text-xs sm:text-sm shrink-0 shadow-sm ${badgeColor}`}>
                {letters[idx]}
              </span>

              {/* Option Label */}
              <span className="flex-1 leading-tight line-clamp-3 font-sans">
                {optionText}
              </span>

              {/* Status Icons on Answer Result */}
              {isAnswered && isCorrect && (
                <CheckCircle2 size={20} className="text-white shrink-0 animate-bounce" />
              )}
              {isAnswered && isSelected && !isCorrect && (
                <XCircle size={20} className="text-white shrink-0 animate-pulse" />
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
};
