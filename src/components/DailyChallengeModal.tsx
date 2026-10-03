import React from 'react';
import { X, Calendar, Trophy, Coins, Play, CheckCircle2 } from 'lucide-react';
import { useGameStore } from '../store/useGameStore';
import { sound } from '../utils/audio';

interface Props {
  onClose: () => void;
  onStartDaily: () => void;
}

export const DailyChallengeModal: React.FC<Props> = ({ onClose, onStartDaily }) => {
  const { dailyChallengeLastDate, coins } = useGameStore();

  const todayKey = new Date().toISOString().split('T')[0];
  const isCompletedToday = dailyChallengeLastDate === todayKey;

  // Format nice human date
  const todayFormatted = new Date().toLocaleDateString('en-US', {
    weekday: 'long',
    month: 'short',
    day: 'numeric',
    year: 'numeric'
  });

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/80 backdrop-blur-sm select-none animate-fade-in">
      <div className="relative w-full max-w-sm bg-white rounded-3xl border-4 border-slate-900 shadow-2xl p-5 overflow-hidden text-center">
        {/* Close button */}
        <button
          id="close-daily-btn"
          onClick={() => {
            sound.playClick();
            onClose();
          }}
          className="absolute top-4 right-4 w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 flex items-center justify-center border border-slate-300 active:scale-90"
        >
          <X size={18} />
        </button>

        {/* Header Badge */}
        <div className="inline-flex items-center gap-1.5 bg-purple-100 text-purple-900 text-xs font-black px-3 py-1 rounded-full border border-purple-300 mb-2">
          <Calendar size={14} />
          <span>DAILY EXAM</span>
        </div>

        <h3 className="text-xl font-black text-slate-900">Today's Challenge 📅</h3>
        <p className="text-xs text-slate-500 mt-0.5">{todayFormatted}</p>

        {/* Daily Mission Card */}
        <div className="bg-purple-50 border-2 border-purple-200 rounded-2xl p-4 my-4 text-left">
          <div className="flex items-center justify-between">
            <div className="text-xs font-black text-purple-900 uppercase">Today's Assignment</div>
            <div className="flex items-center gap-1 bg-yellow-200 text-yellow-900 text-xs font-black px-2.5 py-0.5 rounded-full border border-yellow-300">
              <Coins size={14} className="text-yellow-600" />
              <span>+300 COINS</span>
            </div>
          </div>

          <p className="text-xs text-slate-700 mt-2 font-medium">
            Solve 5 specially selected trick questions in a row today without running out of time!
          </p>

          <div className="mt-3 pt-3 border-t border-purple-200/80 flex items-center justify-between text-xs">
            <span className="text-slate-600 font-bold">Status:</span>
            {isCompletedToday ? (
              <span className="text-emerald-700 font-black flex items-center gap-1">
                <CheckCircle2 size={16} />
                <span>Completed for Today!</span>
              </span>
            ) : (
              <span className="text-purple-700 font-black">Ready to take! ⏳</span>
            )}
          </div>
        </div>

        {/* Start / Replay Button */}
        {isCompletedToday ? (
          <div className="space-y-2">
            <div className="text-xs text-slate-500 font-medium italic">
              You already claimed today's +300 bonus coins! Come back tomorrow for a new quiz.
            </div>
            <button
              onClick={() => {
                sound.playClick();
                onStartDaily();
              }}
              className="w-full py-3 rounded-2xl bg-slate-800 hover:bg-slate-900 text-white font-black text-sm flex items-center justify-center gap-2 shadow transition active:scale-95"
            >
              <span>PRACTICE TODAY'S QUIZ AGAIN</span>
            </button>
          </div>
        ) : (
          <button
            id="start-daily-challenge-btn"
            onClick={() => {
              sound.playClick();
              onStartDaily();
            }}
            className="w-full py-3.5 rounded-2xl bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 border-b-4 border-indigo-900 text-white font-black text-base flex items-center justify-center gap-2 shadow-lg transition active:translate-y-1 active:border-b-0"
          >
            <Play size={18} fill="white" />
            <span>START DAILY CHALLENGE!</span>
          </button>
        )}
      </div>
    </div>
  );
};
