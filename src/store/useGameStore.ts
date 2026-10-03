import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { ClassroomThemeId, PlayerStats } from '../types/game';
import { sound } from '../utils/audio';

interface GameState extends PlayerStats {
  // Ephemeral in-game state
  score: number;
  combo: number;
  hearts: number; // 0..3
  currentLevel: number; // 1, 2, 3...
  levelProgress: number; // 0..5 (questions answered in current level)
  coinsEarnedThisRun: number;
  powerUps: {
    hint: number; // 2 per run
    extraTime: number; // 2 per run
    skip: number; // 2 per run
  };

  // Actions
  addScore: (points: number) => void;
  incrementCombo: () => number;
  resetCombo: () => void;
  loseHeart: () => number;
  restoreHearts: () => void;
  addCoins: (amount: number) => void;
  spendCoins: (amount: number) => boolean;
  unlockOutfit: (id: string) => void;
  equipOutfit: (category: 'student' | 'teacher', id: string) => void;
  equipTheme: (themeId: ClassroomThemeId) => void;
  advanceLevelProgress: () => boolean; // returns true if leveled up
  usePowerUp: (type: 'hint' | 'extraTime' | 'skip') => boolean;
  resetRunState: () => void;
  toggleSound: () => void;
  completeDailyChallenge: (todayKey: string, bonusCoins: number) => void;
  resetAllProgress: () => void;
  recordRunStats: (runScore: number, runCombo: number, questionsCount: number) => void;
}

const DEFAULT_STATS: PlayerStats = {
  highScore: 0,
  bestCombo: 0,
  totalAnswered: 0,
  correctAnswered: 0,
  gamesPlayed: 0,
  coins: 100, // starting bonus
  unlockedOutfits: ['student_uniform', 'teacher_blazer'],
  equippedStudentOutfit: 'student_uniform',
  equippedTeacherOutfit: 'teacher_blazer',
  equippedTheme: 'normal',
  soundEnabled: true,
  musicEnabled: true,
  dailyChallengeLastDate: null
};

export const useGameStore = create<GameState>()(
  persist(
    (set, get) => ({
      ...DEFAULT_STATS,

      // Ephemeral run state
      score: 0,
      combo: 0,
      hearts: 3,
      currentLevel: 1,
      levelProgress: 0,
      coinsEarnedThisRun: 0,
      powerUps: {
        hint: 2,
        extraTime: 2,
        skip: 2
      },

      addScore: (points) => {
        set((state) => {
          const newScore = state.score + points;
          const newCoins = state.coinsEarnedThisRun + Math.max(1, Math.floor(points / 20));
          return {
            score: newScore,
            coinsEarnedThisRun: newCoins,
            highScore: Math.max(state.highScore, newScore)
          };
        });
      },

      incrementCombo: () => {
        const nextCombo = get().combo + 1;
        set((state) => ({
          combo: nextCombo,
          bestCombo: Math.max(state.bestCombo, nextCombo),
          correctAnswered: state.correctAnswered + 1,
          totalAnswered: state.totalAnswered + 1
        }));
        return nextCombo;
      },

      resetCombo: () => {
        set((state) => ({
          combo: 0,
          totalAnswered: state.totalAnswered + 1
        }));
      },

      loseHeart: () => {
        const remaining = Math.max(0, get().hearts - 1);
        set({ hearts: remaining });
        return remaining;
      },

      restoreHearts: () => {
        set({ hearts: 3 });
      },

      addCoins: (amount) => {
        set((state) => ({ coins: state.coins + amount }));
      },

      spendCoins: (amount) => {
        const state = get();
        if (state.coins >= amount) {
          set({ coins: state.coins - amount });
          return true;
        }
        return false;
      },

      unlockOutfit: (id) => {
        set((state) => {
          if (state.unlockedOutfits.includes(id)) return state;
          return { unlockedOutfits: [...state.unlockedOutfits, id] };
        });
      },

      equipOutfit: (category, id) => {
        if (category === 'student') {
          set({ equippedStudentOutfit: id });
        } else {
          set({ equippedTeacherOutfit: id });
        }
      },

      equipTheme: (themeId) => {
        set({ equippedTheme: themeId });
      },

      advanceLevelProgress: () => {
        const state = get();
        const nextProgress = state.levelProgress + 1;
        if (nextProgress >= 5) {
          // Level Up!
          const nextLevel = state.currentLevel + 1;
          // Every 5 levels, auto switch theme if desired or unlock
          let newTheme = state.equippedTheme;
          if (nextLevel >= 15) newTheme = 'office';
          else if (nextLevel >= 11) newTheme = 'exam';
          else if (nextLevel >= 6) newTheme = 'science';
          else if (nextLevel >= 3) newTheme = 'colorful';

          set({
            currentLevel: nextLevel,
            levelProgress: 0,
            equippedTheme: newTheme,
            coins: state.coins + 150 // Level completion bonus
          });
          return true;
        } else {
          set({ levelProgress: nextProgress });
          return false;
        }
      },

      usePowerUp: (type) => {
        const state = get();
        if (state.powerUps[type] > 0) {
          set({
            powerUps: {
              ...state.powerUps,
              [type]: state.powerUps[type] - 1
            }
          });
          return true;
        }
        return false;
      },

      resetRunState: () => {
        set((state) => ({
          score: 0,
          combo: 0,
          hearts: 3,
          currentLevel: 1,
          levelProgress: 0,
          coinsEarnedThisRun: 0,
          powerUps: {
            hint: 2,
            extraTime: 2,
            skip: 2
          }
        }));
      },

      toggleSound: () => {
        set((state) => {
          const next = !state.soundEnabled;
          sound.isMuted = !next;
          return { soundEnabled: next, musicEnabled: next };
        });
      },

      completeDailyChallenge: (todayKey, bonusCoins) => {
        set((state) => ({
          dailyChallengeLastDate: todayKey,
          coins: state.coins + bonusCoins
        }));
      },

      recordRunStats: (runScore, runCombo, questionsCount) => {
        set((state) => ({
          highScore: Math.max(state.highScore, runScore),
          bestCombo: Math.max(state.bestCombo, runCombo),
          gamesPlayed: state.gamesPlayed + 1,
          coins: state.coins + state.coinsEarnedThisRun
        }));
      },

      resetAllProgress: () => {
        set({
          ...DEFAULT_STATS,
          score: 0,
          combo: 0,
          hearts: 3,
          currentLevel: 1,
          levelProgress: 0,
          coinsEarnedThisRun: 0,
          powerUps: { hint: 2, extraTime: 2, skip: 2 }
        });
      }
    }),
    {
      name: 'teacher_trap_save_v1',
      // only persist long-term player stats, not in-progress run values
      partialize: (state) => ({
        highScore: state.highScore,
        bestCombo: state.bestCombo,
        totalAnswered: state.totalAnswered,
        correctAnswered: state.correctAnswered,
        gamesPlayed: state.gamesPlayed,
        coins: state.coins,
        unlockedOutfits: state.unlockedOutfits,
        equippedStudentOutfit: state.equippedStudentOutfit,
        equippedTeacherOutfit: state.equippedTeacherOutfit,
        equippedTheme: state.equippedTheme,
        soundEnabled: state.soundEnabled,
        musicEnabled: state.musicEnabled,
        dailyChallengeLastDate: state.dailyChallengeLastDate
      })
    }
  )
);
