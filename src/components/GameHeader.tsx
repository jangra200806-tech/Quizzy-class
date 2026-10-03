import React from 'react';
import { Volume2, VolumeX, Pause, Play } from 'lucide-react';
import { useGameStore } from '../store/useGameStore';
import { sound } from '../utils/audio';

interface Props {
  isPaused: boolean;
  onTogglePause: () => void;
  onOpenSettings: () => void;
}

export const GameHeader: React.FC<Props> = ({
  isPaused,
  onTogglePause,
  onOpenSettings
}) => {
  const {
    score,
    combo,
    hearts,
    coins,
    currentLevel,
    levelProgress,
    soundEnabled,
    toggleSound
  } = useGameStore();

  // Multiplier logic: 3 in a row = x2, 5 in a row = x3, 10 in a row = x5
  const multiplier = combo >= 10 ? 5 : combo >= 5 ? 3 : combo >= 3 ? 2 : 1;

  const handleSoundToggle = () => {
    sound.playClick();
    toggleSound();
  };

  return (
    <header className="w-full bg-white/95 backdrop-blur-sm border-b-2 border-amber-200 shadow-sm px-3 py-2 select-none z-20">
      {/* Top Row: Score, Multiplier, Hearts, Controls */}
      <div className="flex items-center justify-between gap-2">
        {/* Score & Coins */}
        <div className="flex items-center gap-2">
          <div className="bg-amber-100 border border-amber-300 rounded-xl px-2.5 py-1 flex items-center gap-1.5 shadow-inner">
            <span className="text-xs text-amber-700 font-bold uppercase tracking-wider">Score</span>
            <span className="text-lg font-black text-amber-950 font-mono leading-none transition-transform">
              {score}
            </span>
          </div>

          <div className="hidden sm:flex items-center gap-1 bg-yellow-100 border border-yellow-300 rounded-xl px-2 py-1 text-xs font-black text-yellow-800 shadow-inner">
            <span>🪙</span>
            <span>{coins}</span>
          </div>
        </div>

        {/* Combo Multiplier Flame */}
        <div className="flex items-center">
          {multiplier > 1 ? (
            <div className="bg-gradient-to-r from-orange-500 to-red-500 text-white font-black text-xs px-2.5 py-1 rounded-full shadow flex items-center gap-1 animate-bounce">
              <span>🔥</span>
              <span>x{multiplier} COMBO!</span>
            </div>
          ) : combo > 0 ? (
            <div className="bg-amber-100 text-amber-800 text-[11px] font-bold px-2 py-0.5 rounded-full border border-amber-300">
              Streak: {combo}
            </div>
          ) : null}
        </div>

        {/* Hearts & Actions */}
        <div className="flex items-center gap-2">
          {/* Hearts Display (3 Hearts) */}
          <div className="flex items-center gap-0.5 bg-rose-50 border border-rose-200 rounded-xl px-2 py-1">
            {[1, 2, 3].map((heartIndex) => {
              const hasHeart = hearts >= heartIndex;
              return (
                <span
                  key={heartIndex}
                  className={`text-lg transition-transform duration-300 ${
                    hasHeart
                      ? 'scale-100 drop-shadow-sm filter'
                      : 'scale-75 opacity-25 grayscale'
                  }`}
                >
                  ❤️
                </span>
              );
            })}
          </div>

          {/* Sound Toggle */}
          <button
            id="sound-toggle-btn"
            onClick={handleSoundToggle}
            className="w-8 h-8 rounded-lg bg-amber-50 hover:bg-amber-100 text-amber-800 border border-amber-300 flex items-center justify-center transition active:scale-90"
            title={soundEnabled ? 'Mute Audio' : 'Unmute Audio'}
          >
            {soundEnabled ? <Volume2 size={16} /> : <VolumeX size={16} className="text-red-500" />}
          </button>

          {/* Pause Button */}
          <button
            id="pause-toggle-btn"
            onClick={onTogglePause}
            className="w-8 h-8 rounded-lg bg-amber-50 hover:bg-amber-100 text-amber-800 border border-amber-300 flex items-center justify-center transition active:scale-90"
            title={isPaused ? 'Resume Game' : 'Pause Game'}
          >
            {isPaused ? <Play size={16} /> : <Pause size={16} />}
          </button>
        </div>
      </div>

      {/* Level Progress Bar Sub-row */}
      <div className="mt-1.5 flex items-center gap-2">
        <span className="text-[11px] font-black text-amber-800 bg-amber-200/80 px-2 py-0.5 rounded-md shrink-0">
          LVL {currentLevel}
        </span>
        <div className="w-full bg-amber-100 border border-amber-300 rounded-full h-2.5 overflow-hidden relative shadow-inner">
          <div
            className="h-full bg-gradient-to-r from-emerald-400 to-emerald-500 transition-all duration-300 rounded-full"
            style={{ width: `${(levelProgress / 5) * 100}%` }}
          />
        </div>
        <span className="text-[10px] font-bold text-amber-700 font-mono shrink-0">
          {levelProgress}/5
        </span>
      </div>
    </header>
  );
};
