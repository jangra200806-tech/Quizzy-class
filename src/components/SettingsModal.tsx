import React, { useState } from 'react';
import { X, Volume2, VolumeX, RotateCcw, ShieldAlert, Check } from 'lucide-react';
import { useGameStore } from '../store/useGameStore';
import { sound } from '../utils/audio';

interface Props {
  onClose: () => void;
}

export const SettingsModal: React.FC<Props> = ({ onClose }) => {
  const {
    soundEnabled,
    musicEnabled,
    toggleSound,
    resetAllProgress
  } = useGameStore();

  const [confirmReset, setConfirmReset] = useState(false);
  const [resetSuccess, setResetSuccess] = useState(false);

  const handleReset = () => {
    sound.playClick();
    resetAllProgress();
    setResetSuccess(true);
    setTimeout(() => {
      setConfirmReset(false);
      setResetSuccess(false);
    }, 1500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/80 backdrop-blur-sm select-none animate-fade-in">
      <div className="relative w-full max-w-sm bg-white rounded-3xl border-4 border-slate-900 shadow-2xl p-5 overflow-hidden">
        {/* Close button */}
        <button
          id="close-settings-btn"
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
          <div className="text-xs font-black text-amber-700 uppercase tracking-wider">Preferences</div>
          <h3 className="text-xl font-black text-slate-900">Settings ⚙️</h3>
        </div>

        {/* Settings Options */}
        <div className="space-y-3">
          {/* Sound Effects Toggle */}
          <div className="bg-slate-50 border border-slate-200 rounded-2xl p-3 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-amber-100 text-amber-800 flex items-center justify-center">
                {soundEnabled ? <Volume2 size={18} /> : <VolumeX size={18} className="text-red-500" />}
              </div>
              <div>
                <div className="text-xs font-black text-slate-800">Sound Effects & SFX</div>
                <div className="text-[11px] text-slate-500">Pops, buzzes, and game chimes</div>
              </div>
            </div>
            <button
              id="settings-sound-btn"
              onClick={() => {
                sound.playClick();
                toggleSound();
              }}
              className={`w-12 h-6 rounded-full p-0.5 transition-colors duration-200 flex items-center ${
                soundEnabled ? 'bg-emerald-500 justify-end' : 'bg-slate-300 justify-start'
              }`}
            >
              <div className="w-5 h-5 rounded-full bg-white shadow-md" />
            </button>
          </div>

          {/* Audio Ticking & Music Toggle */}
          <div className="bg-slate-50 border border-slate-200 rounded-2xl p-3 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-cyan-100 text-cyan-800 flex items-center justify-center">
                <span className="text-base">⏱️</span>
              </div>
              <div>
                <div className="text-xs font-black text-slate-800">Timer Warning Clicks</div>
                <div className="text-[11px] text-slate-500">Subtle urgency ticks under 3s</div>
              </div>
            </div>
            <button
              id="settings-music-btn"
              onClick={() => {
                sound.playClick();
                toggleSound();
              }}
              className={`w-12 h-6 rounded-full p-0.5 transition-colors duration-200 flex items-center ${
                musicEnabled ? 'bg-cyan-500 justify-end' : 'bg-slate-300 justify-start'
              }`}
            >
              <div className="w-5 h-5 rounded-full bg-white shadow-md" />
            </button>
          </div>

          {/* Reset Progress */}
          <div className="pt-2 border-t border-slate-200">
            {!confirmReset ? (
              <button
                id="request-reset-btn"
                onClick={() => {
                  sound.playClick();
                  setConfirmReset(true);
                }}
                className="w-full py-2.5 px-3 rounded-xl border border-rose-200 bg-rose-50 hover:bg-rose-100 text-rose-700 font-bold text-xs flex items-center justify-center gap-2 transition"
              >
                <RotateCcw size={15} />
                <span>Reset All Progress & High Scores</span>
              </button>
            ) : (
              <div className="bg-rose-50 border-2 border-rose-300 rounded-2xl p-3 text-center">
                {resetSuccess ? (
                  <div className="flex items-center justify-center gap-1.5 text-emerald-700 font-bold text-xs py-1">
                    <Check size={16} />
                    <span>Progress has been reset!</span>
                  </div>
                ) : (
                  <>
                    <div className="flex items-center justify-center gap-1 text-rose-800 font-black text-xs">
                      <ShieldAlert size={16} />
                      <span>Are you absolutely sure?</span>
                    </div>
                    <p className="text-[11px] text-rose-600 mt-0.5">
                      This will erase your coins, high score, and outfit unlocks!
                    </p>
                    <div className="flex gap-2 mt-2.5">
                      <button
                        id="confirm-reset-btn"
                        onClick={handleReset}
                        className="flex-1 py-1.5 rounded-lg bg-rose-600 hover:bg-rose-700 text-white font-black text-xs shadow transition"
                      >
                        Yes, Reset Everything
                      </button>
                      <button
                        id="cancel-reset-btn"
                        onClick={() => setConfirmReset(false)}
                        className="flex-1 py-1.5 rounded-lg bg-slate-200 hover:bg-slate-300 text-slate-700 font-bold text-xs transition"
                      >
                        Cancel
                      </button>
                    </div>
                  </>
                )}
              </div>
            )}
          </div>
        </div>

        {/* Back button */}
        <button
          id="close-settings-bottom-btn"
          onClick={() => {
            sound.playClick();
            onClose();
          }}
          className="w-full mt-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-900 text-white font-bold text-xs transition"
        >
          DONE
        </button>
      </div>
    </div>
  );
};
