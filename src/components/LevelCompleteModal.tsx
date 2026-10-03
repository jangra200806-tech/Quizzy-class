import React, { useEffect } from 'react';
import confetti from 'canvas-confetti';
import { ArrowRight, Sparkles, Coins } from 'lucide-react';
import { TeacherCharacter } from './TeacherCharacter';
import { StudentCharacter } from './StudentCharacter';
import { CLASSROOM_THEMES } from '../data/themes';
import { ClassroomThemeId } from '../types/game';
import { sound } from '../utils/audio';

interface Props {
  level: number;
  newThemeId: ClassroomThemeId;
  bonusCoins: number;
  teacherOutfitId: string;
  studentOutfitId: string;
  onNextLevel: () => void;
}

export const LevelCompleteModal: React.FC<Props> = ({
  level,
  newThemeId,
  bonusCoins,
  teacherOutfitId,
  studentOutfitId,
  onNextLevel
}) => {
  const unlockedTheme = CLASSROOM_THEMES.find((t) => t.id === newThemeId) || CLASSROOM_THEMES[0];

  useEffect(() => {
    sound.playLevelUp();
    // Confetti celebration
    try {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 }
      });
    } catch {}
  }, []);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/75 backdrop-blur-sm select-none animate-fade-in">
      <div className="relative w-full max-w-sm bg-white rounded-3xl border-4 border-amber-400 shadow-2xl p-5 text-center overflow-hidden">
        {/* Glow Header */}
        <div className="bg-gradient-to-r from-amber-400 to-yellow-500 text-amber-950 font-black text-lg py-1.5 px-4 rounded-2xl border-2 border-yellow-600 shadow-md inline-flex items-center gap-1.5 mb-2">
          <Sparkles size={18} />
          <span>LEVEL {level} COMPLETE!</span>
          <Sparkles size={18} />
        </div>

        {/* Characters celebrating */}
        <div className="flex items-center justify-center -space-x-2 my-2">
          <div className="w-24 h-24">
            <TeacherCharacter expression="celebrating" outfitId={teacherOutfitId} />
          </div>
          <div className="w-20 h-20">
            <StudentCharacter expression="happy" outfitId={studentOutfitId} />
          </div>
        </div>

        {/* Rewards Box */}
        <div className="bg-amber-50 border-2 border-amber-200 rounded-2xl p-3 my-3">
          <div className="text-xs font-bold text-amber-800 uppercase tracking-wider">Level Rewards</div>
          <div className="flex items-center justify-center gap-2 mt-1">
            <Coins size={22} className="text-yellow-500" />
            <span className="text-2xl font-black text-amber-950 font-mono">+{bonusCoins}</span>
            <span className="text-xs font-bold text-amber-700">Bonus Coins!</span>
          </div>

          {/* Theme Unlock Notification */}
          <div className="mt-2 pt-2 border-t border-amber-200/80 flex items-center justify-center gap-2">
            <span className="text-xl">{unlockedTheme.icon}</span>
            <div className="text-left">
              <div className="text-[10px] font-bold text-amber-700 uppercase">Classroom Theme Active</div>
              <div className="text-xs font-black text-slate-800">{unlockedTheme.name}</div>
            </div>
          </div>
        </div>

        {/* Continue Button */}
        <button
          id="level-continue-btn"
          onClick={() => {
            sound.playClick();
            onNextLevel();
          }}
          className="w-full py-3 px-4 rounded-2xl bg-emerald-500 hover:bg-emerald-600 active:bg-emerald-700 border-b-4 border-emerald-700 text-white font-black text-base flex items-center justify-center gap-2 shadow-lg transition active:translate-y-1 active:border-b-0"
        >
          <span>NEXT LEVEL</span>
          <ArrowRight size={20} />
        </button>
      </div>
    </div>
  );
};
