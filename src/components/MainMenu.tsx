import React from 'react';
import { Play, Calendar, HelpCircle, Settings, ShoppingBag, Trophy, Coins } from 'lucide-react';
import { TeacherCharacter } from './TeacherCharacter';
import { StudentCharacter } from './StudentCharacter';
import { useGameStore } from '../store/useGameStore';
import { sound } from '../utils/audio';

interface Props {
  onPlay: () => void;
  onOpenDaily: () => void;
  onOpenHowToPlay: () => void;
  onOpenSettings: () => void;
  onOpenShop: () => void;
  onOpenLeaderboard: () => void;
}

export const MainMenu: React.FC<Props> = ({
  onPlay,
  onOpenDaily,
  onOpenHowToPlay,
  onOpenSettings,
  onOpenShop,
  onOpenLeaderboard
}) => {
  const {
    highScore,
    coins,
    equippedStudentOutfit,
    equippedTeacherOutfit,
    dailyChallengeLastDate
  } = useGameStore();

  const todayKey = new Date().toISOString().split('T')[0];
  const isDailyDone = dailyChallengeLastDate === todayKey;

  return (
    <div className="relative min-h-screen w-full flex flex-col justify-between p-4 max-w-md mx-auto select-none z-10">
      {/* Top Bar with Coins & High Score */}
      <div className="flex items-center justify-between pt-2">
        {/* High Score Pill */}
        <div className="bg-amber-100/95 border-2 border-amber-300 rounded-2xl px-3 py-1.5 flex items-center gap-1.5 shadow-sm">
          <Trophy size={16} className="text-amber-700" />
          <span className="text-[11px] font-black text-amber-800 uppercase">Best</span>
          <span className="text-base font-black text-amber-950 font-mono">{highScore}</span>
        </div>

        {/* Coins & Settings */}
        <div className="flex items-center gap-2">
          <div className="bg-yellow-100/95 border-2 border-yellow-300 rounded-2xl px-3 py-1.5 flex items-center gap-1.5 shadow-sm">
            <Coins size={16} className="text-yellow-600" />
            <span className="text-base font-black text-yellow-950 font-mono">{coins}</span>
          </div>

          <button
            id="menu-settings-btn"
            onClick={() => {
              sound.playClick();
              onOpenSettings();
            }}
            className="w-10 h-10 rounded-2xl bg-white/95 border-2 border-slate-300 hover:bg-slate-100 text-slate-700 flex items-center justify-center shadow-sm active:scale-90 transition"
            title="Settings"
          >
            <Settings size={20} />
          </button>
        </div>
      </div>

      {/* Main Logo & Cartoon Header */}
      <div className="text-center my-auto py-2">
        {/* Playful Floating Badge */}
        <div className="inline-block bg-yellow-400 text-amber-950 font-black text-xs px-3.5 py-1 rounded-full border-2 border-amber-600 shadow-md transform -rotate-2 mb-2 animate-bounce">
          ⚡ FUNNY CARTOON QUIZ ⚡
        </div>

        {/* Big Game Title */}
        <h1 className="text-4xl sm:text-5xl font-black tracking-tight text-slate-900 drop-shadow-sm font-sans uppercase">
          <span className="text-amber-500">QUIZZY</span>{' '}
          <span className="text-rose-500">CLASS</span>
        </h1>

        {/* Cartoon Characters Face-off Showcase */}
        <div className="flex items-center justify-center -space-x-4 my-3">
          <div className="w-28 sm:w-32 h-28 sm:h-32">
            <TeacherCharacter expression="celebrating" outfitId={equippedTeacherOutfit} />
          </div>
          <div className="w-24 sm:w-28 h-24 sm:h-28">
            <StudentCharacter expression="cool" outfitId={equippedStudentOutfit} />
          </div>
        </div>
      </div>

      {/* Main Action Buttons */}
      <div className="space-y-2.5 pb-4">
        {/* BIG PLAY BUTTON */}
        <button
          id="main-play-btn"
          onClick={() => {
            sound.playClick();
            onPlay();
          }}
          className="w-full py-4 rounded-2xl bg-emerald-500 hover:bg-emerald-600 active:bg-emerald-700 border-b-6 border-emerald-700 text-white font-black text-xl tracking-wider flex items-center justify-center gap-3 shadow-xl transition-all active:translate-y-1.5 active:border-b-0 hover:scale-[1.02]"
        >
          <Play size={26} fill="white" />
          <span>START PLAYING</span>
        </button>

        {/* DAILY CHALLENGE BUTTON */}
        <button
          id="main-daily-btn"
          onClick={() => {
            sound.playClick();
            onOpenDaily();
          }}
          className="w-full py-3 rounded-2xl bg-purple-500 hover:bg-purple-600 active:bg-purple-700 border-b-4 border-purple-700 text-white font-black text-sm flex items-center justify-center gap-2 shadow-md transition active:translate-y-1 active:border-b-0"
        >
          <Calendar size={18} />
          <span>DAILY CHALLENGE</span>
          {isDailyDone ? (
            <span className="bg-purple-800 text-purple-200 text-[10px] font-bold px-2 py-0.5 rounded-full">
              Done ✓
            </span>
          ) : (
            <span className="bg-yellow-300 text-yellow-900 text-[10px] font-black px-2 py-0.5 rounded-full animate-pulse">
              +300 🪙
            </span>
          )}
        </button>

        {/* Secondary 3-Button Row: Shop, Records, How To Play */}
        <div className="grid grid-cols-3 gap-2">
          <button
            id="main-shop-btn"
            onClick={() => {
              sound.playClick();
              onOpenShop();
            }}
            className="py-2.5 px-2 rounded-xl bg-amber-500 hover:bg-amber-600 active:bg-amber-700 border-b-4 border-amber-700 text-white font-bold text-xs flex flex-col items-center justify-center gap-1 shadow transition active:translate-y-1 active:border-b-0"
          >
            <ShoppingBag size={18} />
            <span>CLOSET</span>
          </button>

          <button
            id="main-records-btn"
            onClick={() => {
              sound.playClick();
              onOpenLeaderboard();
            }}
            className="py-2.5 px-2 rounded-xl bg-sky-500 hover:bg-sky-600 active:bg-sky-700 border-b-4 border-sky-700 text-white font-bold text-xs flex flex-col items-center justify-center gap-1 shadow transition active:translate-y-1 active:border-b-0"
          >
            <Trophy size={18} />
            <span>RECORDS</span>
          </button>

          <button
            id="main-rules-btn"
            onClick={() => {
              sound.playClick();
              onOpenHowToPlay();
            }}
            className="py-2.5 px-2 rounded-xl bg-indigo-500 hover:bg-indigo-600 active:bg-indigo-700 border-b-4 border-indigo-700 text-white font-bold text-xs flex flex-col items-center justify-center gap-1 shadow transition active:translate-y-1 active:border-b-0"
          >
            <HelpCircle size={18} />
            <span>RULES</span>
          </button>
        </div>
      </div>
    </div>
  );
};
