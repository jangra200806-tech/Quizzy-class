import React, { useState, useEffect, useRef, useCallback } from 'react';
import confetti from 'canvas-confetti';
import { GameHeader } from './GameHeader';
import { TimerBar } from './TimerBar';
import { QuestionBubble } from './QuestionBubble';
import { TeacherCharacter } from './TeacherCharacter';
import { StudentCharacter } from './StudentCharacter';
import { AnswerGrid } from './AnswerGrid';
import { PowerUpBar } from './PowerUpBar';
import { ClassroomBackground } from './ClassroomBackground';
import { GameOverModal } from './GameOverModal';
import { LevelCompleteModal } from './LevelCompleteModal';
import { SettingsModal } from './SettingsModal';
import { QUESTIONS } from '../data/questions';
import { Question, TeacherExpression, StudentExpression } from '../types/game';
import { useGameStore } from '../store/useGameStore';
import { sound } from '../utils/audio';

interface Props {
  isDailyMode?: boolean;
  onExitToMenu: () => void;
}

export const GameScreen: React.FC<Props> = ({ isDailyMode = false, onExitToMenu }) => {
  const {
    score,
    combo,
    hearts,
    currentLevel,
    equippedTheme,
    equippedStudentOutfit,
    equippedTeacherOutfit,
    highScore,
    powerUps,
    coinsEarnedThisRun,
    addScore,
    incrementCombo,
    resetCombo,
    loseHeart,
    restoreHearts,
    advanceLevelProgress,
    usePowerUp,
    recordRunStats,
    resetRunState,
    completeDailyChallenge
  } = useGameStore();

  // Question Queue (avoid duplicates in run)
  const [questionDeck, setQuestionDeck] = useState<Question[]>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState<Question | null>(null);

  // Active question randomized options mapping
  const [shuffledOptions, setShuffledOptions] = useState<[string, string, string, string]>(['', '', '', '']);
  const [shuffledCorrectIndex, setShuffledCorrectIndex] = useState<number>(0);

  // Answering & interaction state
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [eliminatedIndices, setEliminatedIndices] = useState<number[]>([]);

  // Character expressions
  const [teacherExp, setTeacherExp] = useState<TeacherExpression>('idle');
  const [studentExp, setStudentExp] = useState<StudentExpression>('normal');

  // Floating Popups (e.g. "+150! 🎯", "COMBO x2! 🔥", "Teacher: 'Is that so?!' 😂")
  const [popupMessage, setPopupMessage] = useState<{ text: string; color: string } | null>(null);

  // Timer: 20 seconds per question
  const [timeLeft, setTimeLeft] = useState(20.0);
  const [isPaused, setIsPaused] = useState(false);

  // Modals
  const [isGameOver, setIsGameOver] = useState(false);
  const [isLevelComplete, setIsLevelComplete] = useState(false);
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);

  // Daily mode completed tracking
  const [dailyQuestionsAnswered, setDailyQuestionsAnswered] = useState(0);

  // Shuffle a question's options so the correct answer isn't predictable
  const prepareQuestion = useCallback((q: Question) => {
    const rawOptions = [...q.options];
    const originalCorrectText = rawOptions[q.correctIndex];

    // Fisher-Yates shuffle
    for (let i = rawOptions.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [rawOptions[i], rawOptions[j]] = [rawOptions[j], rawOptions[i]];
    }

    const newCorrectIdx = rawOptions.indexOf(originalCorrectText);
    setShuffledOptions(rawOptions as [string, string, string, string]);
    setShuffledCorrectIndex(newCorrectIdx);
    setCurrentQuestion(q);
    setSelectedIndex(null);
    setIsAnswered(false);
    setEliminatedIndices([]);
    setTeacherExp('idle');
    setStudentExp('normal');
    setTimeLeft(20.0);
  }, []);

  // Initialize deck on mount or restart
  const initGame = useCallback(() => {
    resetRunState();
    setIsGameOver(false);
    setIsLevelComplete(false);
    setDailyQuestionsAnswered(0);

    let deck: Question[] = [];
    if (isDailyMode) {
      // Deterministic pseudo-random seed based on today's date
      const todayStr = new Date().toISOString().split('T')[0];
      let seed = 0;
      for (let i = 0; i < todayStr.length; i++) {
        seed = (seed << 5) - seed + todayStr.charCodeAt(i);
      }
      const sorted = [...QUESTIONS].sort((a, b) => {
        const hashA = Math.sin(seed + a.id.charCodeAt(0)) * 10000;
        const hashB = Math.sin(seed + b.id.charCodeAt(0)) * 10000;
        return (hashA - Math.floor(hashA)) - (hashB - Math.floor(hashB));
      });
      deck = sorted.slice(0, 5); // 5 daily challenge questions
    } else {
      // Full shuffled deck
      deck = [...QUESTIONS].sort(() => 0.5 - Math.random());
    }

    setQuestionDeck(deck);
    setCurrentQuestionIndex(0);
    if (deck.length > 0) {
      prepareQuestion(deck[0]);
    }
  }, [isDailyMode, prepareQuestion, resetRunState]);

  useEffect(() => {
    initGame();
  }, [initGame]);

  // Next question handler
  const loadNextQuestion = useCallback(() => {
    const nextIdx = currentQuestionIndex + 1;
    if (isDailyMode && nextIdx >= 5) {
      // Daily Challenge Won!
      sound.playLevelUp();
      try {
        confetti({ particleCount: 100, spread: 80, origin: { y: 0.5 } });
      } catch {}
      const todayKey = new Date().toISOString().split('T')[0];
      completeDailyChallenge(todayKey, 300);
      setIsLevelComplete(true);
      return;
    }

    if (nextIdx < questionDeck.length) {
      setCurrentQuestionIndex(nextIdx);
      prepareQuestion(questionDeck[nextIdx]);
    } else {
      // Reshuffle deck if end reached
      const reshuffled = [...QUESTIONS].sort(() => 0.5 - Math.random());
      setQuestionDeck(reshuffled);
      setCurrentQuestionIndex(0);
      prepareQuestion(reshuffled[0]);
    }
  }, [currentQuestionIndex, isDailyMode, questionDeck, prepareQuestion, completeDailyChallenge]);

  // Handle wrong answer / timeout logic
  const handleWrong = useCallback((isTimeout = false) => {
    setIsAnswered(true);
    sound.playWrong();
    resetCombo();
    const remainingHearts = loseHeart();

    setTeacherExp('shocked');
    setStudentExp(isTimeout ? 'sweating' : 'confused');

    const funnyQuote = currentQuestion 
      ? currentQuestion.teacherHumorWrong 
      : isTimeout 
        ? "Time's up! Fast as a snail!" 
        : "Wrong answer!";

    setPopupMessage({
      text: isTimeout ? '⏰ TIME UP! -1 ❤️' : `Teacher: "${funnyQuote}"`,
      color: 'bg-rose-500 text-white'
    });

    if (remainingHearts <= 0) {
      setTimeout(() => {
        setIsGameOver(true);
        recordRunStats(score, combo, currentQuestionIndex + 1);
      }, 1400);
    } else {
      setTimeout(() => {
        setPopupMessage(null);
        loadNextQuestion();
      }, 1600);
    }
  }, [combo, currentQuestion, currentQuestionIndex, loadNextQuestion, loseHeart, recordRunStats, resetCombo, score]);

  // 20-Second Countdown Timer Effect
  useEffect(() => {
    if (isAnswered || isPaused || isGameOver || isLevelComplete || !currentQuestion) return;

    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 0.1) {
          clearInterval(timer);
          handleWrong(true);
          return 0;
        }
        return Math.max(0, prev - 0.1);
      });
    }, 100);

    return () => clearInterval(timer);
  }, [isAnswered, isPaused, isGameOver, isLevelComplete, currentQuestion, handleWrong]);

  // Handle Option Selection
  const handleSelectOption = (index: number) => {
    if (isAnswered || isPaused || !currentQuestion) return;

    setSelectedIndex(index);
    setIsAnswered(true);

    const isCorrect = index === shuffledCorrectIndex;

    if (isCorrect) {
      sound.playCorrect();
      const newCombo = incrementCombo();

      // Multiplier: 3+ = x2, 5+ = x3, 10+ = x5
      const mult = newCombo >= 10 ? 5 : newCombo >= 5 ? 3 : newCombo >= 3 ? 2 : 1;
      const basePoints = 100;
      const fastBonus = Math.floor(timeLeft * 5); // Up to 100 points
      const totalEarned = (basePoints + fastBonus) * mult;

      addScore(totalEarned);

      if (mult > 1) {
        sound.playCombo();
      }

      setTeacherExp('celebrating');
      setStudentExp('happy');

      setPopupMessage({
        text: `+${totalEarned} Points! ${mult > 1 ? `(${mult}x COMBO! 🔥)` : '🎯'}`,
        color: 'bg-emerald-500 text-white'
      });

      // Advance level progress (5 questions per level)
      const didLevelUp = advanceLevelProgress();

      setTimeout(() => {
        setPopupMessage(null);
        if (didLevelUp && !isDailyMode) {
          setIsLevelComplete(true);
        } else {
          loadNextQuestion();
        }
      }, 1200);
    } else {
      handleWrong(false);
    }
  };

  // Power-up 1: Hint (50:50) - Removes 2 incorrect answers
  const handleUseHint = () => {
    if (isAnswered || powerUps.hint <= 0) return;
    const success = usePowerUp('hint');
    if (!success) return;

    const wrongIndices = [0, 1, 2, 3].filter((idx) => idx !== shuffledCorrectIndex);
    // Pick two random wrong indices
    const shuffledWrong = wrongIndices.sort(() => 0.5 - Math.random());
    setEliminatedIndices(shuffledWrong.slice(0, 2));

    setPopupMessage({
      text: '💡 2 Wrong Answers Removed!',
      color: 'bg-amber-500 text-white'
    });
    setTimeout(() => setPopupMessage(null), 1200);
  };

  // Power-up 2: Extra Time (+5s)
  const handleUseExtraTime = () => {
    if (isAnswered || powerUps.extraTime <= 0) return;
    const success = usePowerUp('extraTime');
    if (!success) return;

    setTimeLeft((prev) => Math.min(15.0, prev + 5.0));

    setPopupMessage({
      text: '⏱️ +5 Seconds Added!',
      color: 'bg-cyan-500 text-white'
    });
    setTimeout(() => setPopupMessage(null), 1200);
  };

  // Power-up 3: Skip Question
  const handleUseSkip = () => {
    if (isAnswered || powerUps.skip <= 0) return;
    const success = usePowerUp('skip');
    if (!success) return;

    setPopupMessage({
      text: '⏭️ Question Skipped Safely!',
      color: 'bg-purple-500 text-white'
    });

    setTimeout(() => {
      setPopupMessage(null);
      loadNextQuestion();
    }, 800);
  };

  return (
    <div className="relative min-h-screen w-full flex flex-col justify-between max-w-md mx-auto overflow-hidden bg-amber-50 shadow-2xl select-none">
      {/* Dynamic Classroom Background (5 unlockable themes) */}
      <ClassroomBackground themeId={equippedTheme} />

      {/* Top Header */}
      <GameHeader
        isPaused={isPaused}
        onTogglePause={() => setIsPaused((prev) => !prev)}
        onOpenSettings={() => setIsSettingsOpen(true)}
      />

      {/* 20-Second Timer Bar */}
      <TimerBar
        timeLeft={timeLeft}
        isPaused={isPaused}
      />

      {/* Center Stage: Teacher & Student Characters & Floating Feedback */}
      <div className="relative flex-1 flex flex-col justify-center items-center px-4 z-10 min-h-[220px]">
        {/* Floating Notification / Combo / Points Banner */}
        {popupMessage && (
          <div className="absolute top-2 left-1/2 -translate-x-1/2 z-30 font-black text-xs sm:text-sm px-4 py-1.5 rounded-full shadow-lg border-2 border-white animate-bounce text-center whitespace-nowrap">
            <span className={popupMessage.color + ' px-3 py-1 rounded-full'}>
              {popupMessage.text}
            </span>
          </div>
        )}

        {/* Speech Bubble with Question */}
        {currentQuestion && (
          <QuestionBubble
            question={currentQuestion}
            questionNumber={currentQuestionIndex + 1}
          />
        )}

        {/* Dual Cartoon Characters: Teacher on Left, Student on Right */}
        <div className="w-full max-w-sm flex items-end justify-between px-3 mt-1 pointer-events-none">
          <div className="w-32 sm:w-36 h-32 sm:h-36 shrink-0">
            <TeacherCharacter
              expression={teacherExp}
              outfitId={equippedTeacherOutfit}
            />
          </div>

          <div className="w-28 sm:w-32 h-28 sm:h-32 shrink-0">
            <StudentCharacter
              expression={studentExp}
              outfitId={equippedStudentOutfit}
            />
          </div>
        </div>
      </div>

      {/* Bottom Area: 2x2 Answer Grid & Power-Up Tray */}
      <div className="w-full bg-white/90 backdrop-blur-md border-t-2 border-amber-200 py-2 z-20 shadow-lg">
        {/* Power-up Bar */}
        <PowerUpBar
          hintsLeft={powerUps.hint}
          extraTimeLeft={powerUps.extraTime}
          skipsLeft={powerUps.skip}
          disabled={isAnswered || isPaused}
          onUseHint={handleUseHint}
          onUseExtraTime={handleUseExtraTime}
          onUseSkip={handleUseSkip}
        />

        {/* 2x2 Chunky Answer Buttons */}
        <AnswerGrid
          options={shuffledOptions}
          selectedIndex={selectedIndex}
          correctIndex={shuffledCorrectIndex}
          eliminatedIndices={eliminatedIndices}
          isAnswered={isAnswered}
          onSelectOption={handleSelectOption}
        />
      </div>

      {/* Pause Overlay */}
      {isPaused && (
        <div className="fixed inset-0 z-40 bg-slate-900/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl border-4 border-slate-900 p-6 text-center max-w-xs w-full shadow-2xl animate-fade-in">
            <h3 className="text-2xl font-black text-slate-900 mb-1">PAUSED ⏸️</h3>
            <p className="text-xs text-slate-500 mb-4">Timer is paused. Take a breath!</p>
            <div className="space-y-2">
              <button
                onClick={() => setIsPaused(false)}
                className="w-full py-3 rounded-2xl bg-emerald-500 hover:bg-emerald-600 text-white font-black text-sm shadow-md"
              >
                RESUME GAME
              </button>
              <button
                onClick={onExitToMenu}
                className="w-full py-2.5 rounded-2xl bg-slate-200 hover:bg-slate-300 text-slate-700 font-bold text-xs"
              >
                QUIT TO MENU
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Level Complete Celebration Modal */}
      {isLevelComplete && (
        <LevelCompleteModal
          level={currentLevel}
          newThemeId={equippedTheme}
          bonusCoins={150}
          teacherOutfitId={equippedTeacherOutfit}
          studentOutfitId={equippedStudentOutfit}
          onNextLevel={() => {
            setIsLevelComplete(false);
            if (isDailyMode) {
              onExitToMenu();
            } else {
              loadNextQuestion();
            }
          }}
        />
      )}

      {/* Game Over Modal */}
      {isGameOver && (
        <GameOverModal
          score={score}
          highScore={highScore}
          combo={combo}
          questionsAnswered={currentQuestionIndex + 1}
          coinsEarned={coinsEarnedThisRun}
          teacherOutfitId={equippedTeacherOutfit}
          studentOutfitId={equippedStudentOutfit}
          onRestart={initGame}
          onHome={onExitToMenu}
        />
      )}

      {/* In-Game Settings Modal */}
      {isSettingsOpen && (
        <SettingsModal onClose={() => setIsSettingsOpen(false)} />
      )}
    </div>
  );
};
