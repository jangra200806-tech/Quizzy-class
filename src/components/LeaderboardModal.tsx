import React from 'react';
import { X, Trophy, Flame, Award, Gamepad2, Coins } from 'lucide-react';
import { useGameStore } from '../store/useGameStore';
import { sound } from '../utils/audio';

interface Props {
  onClose: () => void;
}

export const LeaderboardModal: React.FC<Props> = ({ onClose }) => {
  const {
    highScore,
    bestCombo,
    totalAnswered,
    correctAnswered,
    gamesPlayed,
    coins
  } = useGameStore();

  const accuracy = totalAnswered > 0 ? Math.round((correctAnswered / totalAnswered) * 100) : 0;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/80 backdrop-blur-sm select-none animate-fade-in">
      <div className="relative w-full max-w-sm bg-white rounded-3xl border-4 border-slate-900 shadow-2xl p-5 overflow-hidden">
        {/* Close button */}
        <button
          id="close-leaderboard-btn"
          onClick={() => {
            sound.playClick();
            onClose();
          }}
          className="absolute top-4 right-4 w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 flex items-center justify-center border border-slate-300 active:scale-90"
        >
          <X size={18} />
        </button>

        {/* Title */}
        <div className="text-center mb-4">
          <div className="text-xs font-black text-amber-700 uppercase tracking-wider">Hall of Fame</div>
          <h3 className="text-xl font-black text-slate-900">Your Records 🏆</h3>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 gap-2.5">
          {/* High Score */}
          <div className="bg-amber-50 border-2 border-amber-300 rounded-2xl p-3 flex flex-col items-center justify-center text-center">
            <div className="w-10 h-10 rounded-xl bg-amber-400 text-amber-950 flex items-center justify-center mb-1 shadow-sm">
              <Trophy size={20} />
            </div>
            <div className="text-[10px] font-bold text-amber-800 uppercase">Best Score</div>
            <div className="text-xl font-black text-amber-950 font-mono leading-tight">
              {highScore}
            </div>
          </div>

          {/* Best Combo */}
          <div className="bg-orange-50 border-2 border-orange-300 rounded-2xl p-3 flex flex-col items-center justify-center text-center">
            <div className="w-10 h-10 rounded-xl bg-orange-400 text-orange-950 flex items-center justify-center mb-1 shadow-sm">
              <Flame size={20} />
            </div>
            <div className="text-[10px] font-bold text-orange-800 uppercase">Best Combo</div>
            <div className="text-xl font-black text-orange-950 font-mono leading-tight">
              {bestCombo}x
            </div>
          </div>

          {/* Total Answered */}
          <div className="bg-emerald-50 border-2 border-emerald-300 rounded-2xl p-3 flex flex-col items-center justify-center text-center">
            <div className="w-10 h-10 rounded-xl bg-emerald-400 text-emerald-950 flex items-center justify-center mb-1 shadow-sm">
              <Award size={20} />
            </div>
            <div className="text-[10px] font-bold text-emerald-800 uppercase">Questions Solved</div>
            <div className="text-xl font-black text-emerald-950 font-mono leading-tight">
              {correctAnswered}
            </div>
          </div>

          {/* Accuracy */}
          <div className="bg-cyan-50 border-2 border-cyan-300 rounded-2xl p-3 flex flex-col items-center justify-center text-center">
            <div className="w-10 h-10 rounded-xl bg-cyan-400 text-cyan-950 flex items-center justify-center mb-1 shadow-sm">
              <span className="text-base font-black">🎯</span>
            </div>
            <div className="text-[10px] font-bold text-cyan-800 uppercase">Accuracy</div>
            <div className="text-xl font-black text-cyan-950 font-mono leading-tight">
              {accuracy}%
            </div>
          </div>
        </div>

        {/* Additional Lifetime Stats */}
        <div className="mt-3 bg-slate-50 border border-slate-200 rounded-2xl p-3 flex justify-around text-center">
          <div>
            <div className="text-[10px] font-bold text-slate-500 uppercase flex items-center justify-center gap-1">
              <Gamepad2 size={12} />
              <span>Rounds Played</span>
            </div>
            <div className="text-base font-black text-slate-800 font-mono">{gamesPlayed}</div>
          </div>
          <div className="w-[1px] bg-slate-200" />
          <div>
            <div className="text-[10px] font-bold text-slate-500 uppercase flex items-center justify-center gap-1">
              <Coins size={12} />
              <span>Total Coins</span>
            </div>
            <div className="text-base font-black text-yellow-600 font-mono">{coins}</div>
          </div>
        </div>

        {/* Close Button */}
        <button
          id="close-records-bottom-btn"
          onClick={() => {
            sound.playClick();
            onClose();
          }}
          className="w-full mt-4 py-3 rounded-2xl bg-amber-500 hover:bg-amber-600 active:bg-amber-700 border-b-4 border-amber-700 text-white font-black text-sm shadow transition active:translate-y-1 active:border-b-0"
        >
          BACK TO CLASS 🎒
        </button>
      </div>
    </div>
  );
};
