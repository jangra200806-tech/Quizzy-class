import React from 'react';
import { ClassroomThemeId } from '../types/game';
import { CLASSROOM_THEMES } from '../data/themes';

interface Props {
  themeId: ClassroomThemeId;
}

export const ClassroomBackground: React.FC<Props> = ({ themeId }) => {
  const currentTheme = CLASSROOM_THEMES.find((t) => t.id === themeId) || CLASSROOM_THEMES[0];

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden select-none z-0">
      {/* Wall Gradient */}
      <div 
        className="w-full h-[65%] transition-colors duration-700 relative"
        style={{ backgroundColor: currentTheme.wallColor }}
      >
        {/* Wooden / Trim Molding Divider */}
        <div className="absolute bottom-0 w-full h-3 bg-amber-800/60 shadow-inner" />

        {/* Theme-Specific Wall Elements */}
        {themeId === 'normal' && (
          <>
            {/* ABC Bunting / Flags */}
            <div className="absolute top-2 left-4 right-4 flex justify-around opacity-80">
              {['A', 'B', 'C', '1', '2', '3', '⭐'].map((char, i) => (
                <div 
                  key={i} 
                  className="w-6 h-7 rounded-b-md flex items-center justify-center text-xs font-bold text-white shadow-sm"
                  style={{
                    backgroundColor: ['#EF4444', '#3B82F6', '#10B981', '#F59E0B', '#8B5CF6', '#EC4899', '#F97316'][i % 7]
                  }}
                >
                  {char}
                </div>
              ))}
            </div>

            {/* Chalkboard in Center */}
            <div 
              className="absolute top-12 left-1/2 -translate-x-1/2 w-[90%] max-w-sm h-32 rounded-lg border-4 border-amber-800 shadow-md flex flex-col items-center justify-center p-2 text-center"
              style={{ backgroundColor: currentTheme.boardColor }}
            >
              <div className="text-white/40 font-mono text-xs tracking-wider">QUIZZY CLASS CHALKBOARD</div>
              <div className="text-white/70 font-mono text-sm mt-1">2 + 2 = 5 ? ✏️</div>
              <div className="text-amber-200/50 text-[11px] font-mono">E = mc² • H₂O • Think Fast!</div>
              {/* Wooden chalk tray with chalk pieces */}
              <div className="absolute bottom-1 right-4 flex gap-1.5">
                <div className="w-4 h-1.5 bg-white/90 rounded-sm" />
                <div className="w-4 h-1.5 bg-yellow-200/90 rounded-sm" />
                <div className="w-5 h-2 bg-amber-900 rounded-sm" />
              </div>
            </div>

            {/* Cute Classroom Wall Clock */}
            <div className="absolute top-3 right-4 w-9 h-9 rounded-full bg-white border-2 border-slate-700 shadow flex items-center justify-center">
              <div className="w-1 h-1 bg-black rounded-full relative">
                <div className="absolute w-2.5 h-0.5 bg-black -top-0.5 left-0 origin-left -rotate-45" />
                <div className="absolute w-3.5 h-0.5 bg-red-500 -top-0.5 left-0 origin-left rotate-90 animate-spin origin-left" style={{ animationDuration: '60s' }} />
              </div>
            </div>
          </>
        )}

        {themeId === 'colorful' && (
          <>
            {/* Rainbow bunting */}
            <div className="absolute top-2 left-2 right-2 flex justify-between">
              {['🎨', '🌈', '✂️', '🖍️', '✨', '🎈', '🎪'].map((emoji, idx) => (
                <span key={idx} className="text-lg opacity-80">{emoji}</span>
              ))}
            </div>

            {/* Art Room Purple Chalkboard */}
            <div 
              className="absolute top-12 left-1/2 -translate-x-1/2 w-[90%] max-w-sm h-32 rounded-lg border-4 border-pink-500 shadow-md flex flex-col items-center justify-center p-2 text-center"
              style={{ backgroundColor: currentTheme.boardColor }}
            >
              <div className="text-pink-300 font-bold text-xs">CREATIVITY WORKSHOP 🎨</div>
              <div className="text-yellow-300 font-mono text-xs mt-1">Draw outside the box!</div>
              <div className="flex gap-2 mt-2">
                <span className="inline-block w-4 h-4 rounded-full bg-red-400" />
                <span className="inline-block w-4 h-4 rounded-full bg-yellow-400" />
                <span className="inline-block w-4 h-4 rounded-full bg-green-400" />
                <span className="inline-block w-4 h-4 rounded-full bg-blue-400" />
                <span className="inline-block w-4 h-4 rounded-full bg-purple-400" />
              </div>
            </div>

            {/* Paint splatter decorations */}
            <div className="absolute top-16 left-3 w-7 h-7 rounded-full bg-pink-400/30 blur-[1px]" />
            <div className="absolute top-28 right-3 w-8 h-8 rounded-full bg-cyan-400/30 blur-[1px]" />
          </>
        )}

        {themeId === 'science' && (
          <>
            {/* Science elements */}
            <div className="absolute top-2 left-4 right-4 flex justify-between text-xs font-mono font-bold text-emerald-800/60">
              <span>ATOM-01 ⚛️</span>
              <span>DNA-77 🧬</span>
              <span>VOLT-99 ⚡</span>
            </div>

            {/* Science Chalkboard / Lab Screen */}
            <div 
              className="absolute top-12 left-1/2 -translate-x-1/2 w-[90%] max-w-sm h-32 rounded-lg border-4 border-teal-800 shadow-md flex flex-col items-center justify-center p-2 text-center"
              style={{ backgroundColor: currentTheme.boardColor }}
            >
              <div className="text-emerald-300 font-mono font-bold text-xs">LAB SAFETY LEVEL 4 🧪</div>
              <div className="text-cyan-200 font-mono text-xs mt-1">H₂ + O → Kaboom! 💥</div>
              <div className="text-yellow-200 font-mono text-[10px] mt-1">Do not drink the blue potion!</div>
            </div>

            {/* Bubbling science flasks on side */}
            <div className="absolute top-14 left-3 text-xl animate-pulse">🧪</div>
            <div className="absolute top-14 right-3 text-xl animate-bounce" style={{ animationDuration: '3s' }}>⚗️</div>
          </>
        )}

        {themeId === 'exam' && (
          <>
            {/* Big Exam Banner */}
            <div className="absolute top-2 left-1/2 -translate-x-1/2 bg-red-600 text-white font-black text-[11px] tracking-wider px-3 py-0.5 rounded-full shadow animate-pulse">
              🤫 PIN DROP SILENCE! 🤫
            </div>

            {/* Strict Exam Board */}
            <div 
              className="absolute top-12 left-1/2 -translate-x-1/2 w-[90%] max-w-sm h-32 rounded-lg border-4 border-slate-800 shadow-md flex flex-col items-center justify-center p-2 text-center"
              style={{ backgroundColor: currentTheme.boardColor }}
            >
              <div className="text-red-400 font-mono font-black text-xs">FINAL TERM SURPRISE EXAM 📝</div>
              <div className="text-slate-300 font-mono text-xs mt-1">No whispering • Eyes on paper!</div>
              <div className="text-yellow-300 font-mono text-[11px] mt-1">Time Remaining: Ticking Fast! ⏳</div>
            </div>

            {/* Big strict clock */}
            <div className="absolute top-3 right-4 w-10 h-10 rounded-full bg-slate-900 border-2 border-red-500 shadow flex items-center justify-center text-xs text-white font-mono">
              10s
            </div>
          </>
        )}

        {themeId === 'office' && (
          <>
            {/* Principal's Office Curtains & Crest */}
            <div className="absolute top-0 left-0 w-8 h-full bg-red-800/80 rounded-r-lg shadow" />
            <div className="absolute top-0 right-0 w-8 h-full bg-red-800/80 rounded-l-lg shadow" />

            {/* Regal Mahogany Board */}
            <div 
              className="absolute top-12 left-1/2 -translate-x-1/2 w-[85%] max-w-sm h-32 rounded-lg border-4 border-amber-600 shadow-lg flex flex-col items-center justify-center p-2 text-center"
              style={{ backgroundColor: currentTheme.boardColor }}
            >
              <div className="text-amber-300 font-serif font-black text-xs">OFFICE OF THE HEADMASTER 👑</div>
              <div className="text-yellow-200 font-serif italic text-xs mt-1">"Wisdom through Trick Questions"</div>
              <div className="flex items-center gap-2 mt-2">
                <span className="text-sm">🏆</span>
                <span className="text-amber-200 text-[10px] font-bold">TROPHY OF EXCELLENCE</span>
                <span className="text-sm">🏆</span>
              </div>
            </div>
          </>
        )}
      </div>

      {/* Classroom Floor with Wooden or Tiled Planks */}
      <div 
        className="w-full h-[35%] transition-colors duration-700 relative"
        style={{ backgroundColor: currentTheme.floorColor }}
      >
        {/* Floor Plank Lines */}
        <div className="absolute inset-0 opacity-15 flex flex-col justify-around">
          <div className="w-full h-0.5 bg-black" />
          <div className="w-full h-0.5 bg-black" />
          <div className="w-full h-0.5 bg-black" />
        </div>
      </div>
    </div>
  );
};
