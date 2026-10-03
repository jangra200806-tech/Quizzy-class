import React from 'react';
import { X, Brain, Clock, Zap } from 'lucide-react';
import { sound } from '../utils/audio';

interface Props {
  onClose: () => void;
}

export const HowToPlayModal: React.FC<Props> = ({ onClose }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/80 backdrop-blur-sm select-none animate-fade-in">
      <div className="relative w-full max-w-sm bg-white rounded-3xl border-4 border-slate-900 shadow-2xl p-5 overflow-hidden">
        {/* Close button */}
        <button
          id="close-howtoplay-btn"
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
          <div className="text-xs font-black text-amber-700 uppercase tracking-wider">Quizzy Class Rules</div>
          <h3 className="text-xl font-black text-slate-900">How to Play 🎓</h3>
        </div>

        {/* 3 Simple Steps */}
        <div className="space-y-3">
          {/* Step 1 */}
          <div className="bg-amber-50 border-2 border-amber-200 rounded-2xl p-3 flex items-start gap-3">
            <div className="w-10 h-10 rounded-xl bg-amber-400 text-amber-950 flex items-center justify-center font-black text-lg shrink-0 shadow-sm">
              <Brain size={20} />
            </div>
            <div>
              <div className="text-xs font-black text-amber-900 uppercase">Step 1: Outsmart the Teacher</div>
              <p className="text-xs text-slate-700 mt-0.5">
                Read carefully! Some questions are real school trivia, but many are <b>hilarious trick questions</b>. Look for the witty answer!
              </p>
            </div>
          </div>

          {/* Step 2 */}
          <div className="bg-cyan-50 border-2 border-cyan-200 rounded-2xl p-3 flex items-start gap-3">
            <div className="w-10 h-10 rounded-xl bg-cyan-400 text-cyan-950 flex items-center justify-center font-black text-lg shrink-0 shadow-sm">
              <Clock size={20} />
            </div>
            <div>
              <div className="text-xs font-black text-cyan-900 uppercase">Step 2: Beat the 20-Second Clock</div>
              <p className="text-xs text-slate-700 mt-0.5">
                Answer before time runs out! Faster answers give bonus points, and consecutive streaks trigger <b>x2, x3, and x5 Combos</b>!
              </p>
            </div>
          </div>

          {/* Step 3 */}
          <div className="bg-purple-50 border-2 border-purple-200 rounded-2xl p-3 flex items-start gap-3">
            <div className="w-10 h-10 rounded-xl bg-purple-400 text-purple-950 flex items-center justify-center font-black text-lg shrink-0 shadow-sm">
              <Zap size={20} />
            </div>
            <div>
              <div className="text-xs font-black text-purple-900 uppercase">Step 3: Deploy Power-Ups</div>
              <p className="text-xs text-slate-700 mt-0.5">
                Stuck on a tricky dilemma? Use <b>Hint (50:50)</b>, <b>Extra Time (+5s)</b>, or <b>Skip</b> to protect your 3 hearts!
              </p>
            </div>
          </div>
        </div>

        {/* Got it button */}
        <button
          id="howtoplay-confirm-btn"
          onClick={() => {
            sound.playClick();
            onClose();
          }}
          className="w-full mt-4 py-3 rounded-2xl bg-amber-500 hover:bg-amber-600 active:bg-amber-700 border-b-4 border-amber-700 text-white font-black text-sm shadow-md transition active:translate-y-1 active:border-b-0"
        >
          I'M READY TO PLAY! 🚀
        </button>
      </div>
    </div>
  );
};
