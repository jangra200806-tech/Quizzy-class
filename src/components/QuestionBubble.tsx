import React from 'react';
import { Question } from '../types/game';

interface Props {
  question: Question;
  questionNumber: number;
}

export const QuestionBubble: React.FC<Props> = ({ question, questionNumber }) => {
  const getCategoryBadge = (cat: Question['category']) => {
    switch (cat) {
      case 'trick':
        return { label: 'Funny Trick Question', emoji: '🤪', bg: 'bg-purple-100 text-purple-800 border-purple-300' };
      case 'school':
        return { label: 'Classroom Life', emoji: '🎒', bg: 'bg-amber-100 text-amber-800 border-amber-300' };
      case 'science':
        return { label: 'Simple Science', emoji: '🔬', bg: 'bg-emerald-100 text-emerald-800 border-emerald-300' };
      case 'math':
        return { label: 'Math Mystery', emoji: '🧮', bg: 'bg-blue-100 text-blue-800 border-blue-300' };
      case 'animals':
        return { label: 'Animal World', emoji: '🦁', bg: 'bg-orange-100 text-orange-800 border-orange-300' };
      case 'gk':
        return { label: 'General Knowledge', emoji: '🌍', bg: 'bg-teal-100 text-teal-800 border-teal-300' };
      case 'logic':
        return { label: 'Brain Riddles', emoji: '💡', bg: 'bg-pink-100 text-pink-800 border-pink-300' };
      default:
        return { label: 'Everyday Logic', emoji: '⚡', bg: 'bg-sky-100 text-sky-800 border-sky-300' };
    }
  };

  const badge = getCategoryBadge(question.category);

  return (
    <div className="relative w-full max-w-md mx-auto px-4 select-none z-10">
      {/* Speech Bubble Box */}
      <div className="relative bg-white/95 backdrop-blur-md rounded-2xl border-4 border-slate-800 shadow-xl p-3.5 sm:p-4 text-center">
        {/* Category & Question Number Header */}
        <div className="flex items-center justify-between gap-2 mb-2">
          <span className="text-[11px] font-black uppercase tracking-wider bg-slate-100 text-slate-700 px-2 py-0.5 rounded-md border border-slate-300">
            Q{questionNumber}
          </span>
          <div className={`flex items-center gap-1 text-[11px] font-bold px-2.5 py-0.5 rounded-full border shadow-sm ${badge.bg}`}>
            <span>{badge.emoji}</span>
            <span>{badge.label}</span>
          </div>
        </div>

        {/* Question Content */}
        <h2 className="text-base sm:text-lg md:text-xl font-bold text-slate-900 leading-snug tracking-tight font-sans">
          {question.question}
        </h2>

        {/* Speech Bubble Arrow Tail pointing left towards Teacher */}
        <div 
          className="absolute -bottom-3.5 left-10 w-0 h-0 border-l-[12px] border-l-transparent border-r-[12px] border-r-transparent border-t-[14px] border-t-slate-800"
        />
        <div 
          className="absolute -bottom-2.5 left-10.5 w-0 h-0 border-l-[10px] border-l-transparent border-r-[10px] border-r-transparent border-t-[12px] border-t-white"
        />
      </div>
    </div>
  );
};
