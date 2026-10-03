import React, { useEffect } from 'react';
import { RotateCcw, Home, Trophy, Flame, Coins, Award } from 'lucide-react';
import { TeacherCharacter } from './TeacherCharacter';
import { StudentCharacter } from './StudentCharacter';
import { sound } from '../utils/audio';

interface Props {
  score: number;
  highScore: number;
  combo: number;
  questionsAnswered: number;
  coinsEarned: number;
  teacherOutfitId: string;
  studentOutfitId: string;
  onRestart: () => void;
  onHome: () => void;
}

export const GameOverModal: React.FC<Props> = ({
  score,
  highScore,
  combo,
  questionsAnswered,
  coinsEarned,
  teacherOutfitId,
  studentOutfitId,
  onRestart,
  onHome
}) => {
  const isNewHighScore = score > 0 && score >= highScore;

  useEffect(() => {
    sound.playGameOver();
  }, []);

  // Funny teacher report card comment
  const getTeacherRemarks = () => {
    if (score >= 2000) {
      return {
        grade: 'A+ TOPPER!',
        quote: '"Are you cheating or are you actually Einstein\'s grandchild?!"',
        color: 'text-emerald-600',
        bg: 'bg-emerald-50 border-emerald-300'
      };
    }
    if (score >= 1000) {
      return {
        grade: 'B+ CLEVER COOKIE',
        quote: '"Not bad! You only fell into half of my trick questions!"',
        color: 'text-blue-600',
        bg: 'bg-blue-50 border-blue-300'
      };
    }
    if (score >= 400) {
      return {
        grade: 'C AVERAGE BACKBENCHER',
        quote: '"Focus on your books instead of eating snacks in the back row!"',
        color: 'text-amber-600',
        bg: 'bg-amber-50 border-amber-300'
      };
    }
    return {
      grade: 'D DETENTION WARNING!',
      quote: '"Zero marks in attendance and 100 marks in daydreaming! Try again!"',
      color: 'text-rose-600',
      bg: 'bg-rose-50 border-rose-300'
    };
  };

  const remarks = getTeacherRemarks();

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/80 backdrop-blur-sm select-none animate-fade-in">
      <div className="relative w-full max-w-sm bg-white rounded-3xl border-4 border-slate-900 shadow-2xl overflow-hidden p-5 text-center">
        {/* Banner */}
        <div className="bg-red-500 text-white font-black text-xl tracking-wider py-1.5 px-4 rounded-2xl border-2 border-red-700 shadow-md inline-block -rotate-2 mb-2">
          GAME OVER! 🔔
        </div>

        {/* Characters humorous reaction */}
        <div className="flex items-center justify-center -space-x-4 my-1">
          <div className="w-24 h-24">
            <TeacherCharacter expression="facepalm" outfitId={teacherOutfitId} />
          </div>
          <div className="w-20 h-20">
            <StudentCharacter expression="sweating" outfitId={studentOutfitId} />
          </div>
        </div>

        {/* Teacher Report Card Remark */}
        <div className={`p-2.5 rounded-2xl border-2 my-2.5 ${remarks.bg}`}>
          <div className={`text-xs font-black tracking-widest uppercase ${remarks.color}`}>
            {remarks.grade}
          </div>
          <p className="text-xs text-slate-700 italic font-medium mt-0.5">
            {remarks.quote}
          </p>
        </div>

        {/* Score Breakdown Cards */}
        <div className="grid grid-cols-2 gap-2 my-3 text-left">
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-2 flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-amber-200 text-amber-800 flex items-center justify-center shrink-0">
              <Trophy size={18} />
            </div>
            <div>
              <div className="text-[10px] font-bold text-amber-700 uppercase">Final Score</div>
              <div className="text-base font-black text-amber-950 font-mono leading-none">
                {score}
              </div>
            </div>
          </div>

          <div className="bg-orange-50 border border-orange-200 rounded-xl p-2 flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-orange-200 text-orange-800 flex items-center justify-center shrink-0">
              <Flame size={18} />
            </div>
            <div>
              <div className="text-[10px] font-bold text-orange-700 uppercase">Max Combo</div>
              <div className="text-base font-black text-orange-950 font-mono leading-none">
                {combo}x
              </div>
            </div>
          </div>

          <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-2 flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-yellow-200 text-yellow-800 flex items-center justify-center shrink-0">
              <Coins size={18} />
            </div>
            <div>
              <div className="text-[10px] font-bold text-yellow-700 uppercase">Coins Earned</div>
              <div className="text-base font-black text-yellow-950 font-mono leading-none">
                +{coinsEarned}
              </div>
            </div>
          </div>

          <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-2 flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-emerald-200 text-emerald-800 flex items-center justify-center shrink-0">
              <Award size={18} />
            </div>
            <div>
              <div className="text-[10px] font-bold text-emerald-700 uppercase">Questions</div>
              <div className="text-base font-black text-emerald-950 font-mono leading-none">
                {questionsAnswered}
              </div>
            </div>
          </div>
        </div>

        {isNewHighScore && (
          <div className="bg-gradient-to-r from-yellow-400 to-amber-500 text-amber-950 font-black text-xs py-1 px-3 rounded-full shadow mb-3 animate-bounce">
            🎉 NEW HIGH SCORE RECORD! 🎉
          </div>
        )}

        {/* Action Buttons: Play Again & Main Menu */}
        <div className="flex gap-2.5 mt-2">
          <button
            id="gameover-restart-btn"
            onClick={() => {
              sound.playClick();
              onRestart();
            }}
            className="flex-1 py-3 px-4 rounded-2xl bg-emerald-500 hover:bg-emerald-600 active:bg-emerald-700 border-b-4 border-emerald-700 text-white font-black text-sm flex items-center justify-center gap-2 shadow-lg transition active:translate-y-1 active:border-b-0"
          >
            <RotateCcw size={18} />
            <span>PLAY AGAIN</span>
          </button>

          <button
            id="gameover-home-btn"
            onClick={() => {
              sound.playClick();
              onHome();
            }}
            className="py-3 px-4 rounded-2xl bg-slate-200 hover:bg-slate-300 active:bg-slate-400 border-b-4 border-slate-400 text-slate-800 font-bold text-sm flex items-center justify-center gap-1.5 shadow transition active:translate-y-1 active:border-b-0"
          >
            <Home size={18} />
            <span>MENU</span>
          </button>
        </div>
      </div>
    </div>
  );
};
