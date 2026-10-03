export type QuestionCategory = 
  | 'trick' 
  | 'school' 
  | 'science' 
  | 'gk' 
  | 'math' 
  | 'animals' 
  | 'everyday' 
  | 'logic';

export interface Question {
  id: string;
  question: string;
  category: QuestionCategory;
  options: [string, string, string, string];
  correctIndex: number; // 0..3
  explanation: string;
  teacherHumorCorrect: string;
  teacherHumorWrong: string;
}

export type TeacherExpression = 'idle' | 'celebrating' | 'shocked' | 'thinking' | 'facepalm';
export type StudentExpression = 'normal' | 'happy' | 'confused' | 'sweating' | 'cool';

export type ClassroomThemeId = 'normal' | 'colorful' | 'science' | 'exam' | 'office';

export interface ClassroomTheme {
  id: ClassroomThemeId;
  name: string;
  description: string;
  levelRequired: number;
  bgGradient: string;
  wallColor: string;
  boardColor: string;
  floorColor: string;
  accentColor: string;
  icon: string;
}

export interface OutfitItem {
  id: string;
  name: string;
  category: 'student' | 'teacher';
  price: number;
  color: string;
  accent: string;
  description: string;
}

export interface PlayerStats {
  highScore: number;
  bestCombo: number;
  totalAnswered: number;
  correctAnswered: number;
  gamesPlayed: number;
  coins: number;
  unlockedOutfits: string[];
  equippedStudentOutfit: string;
  equippedTeacherOutfit: string;
  equippedTheme: ClassroomThemeId;
  soundEnabled: boolean;
  musicEnabled: boolean;
  dailyChallengeLastDate: string | null;
}

export type GameScreen = 
  | 'menu' 
  | 'playing' 
  | 'gameover' 
  | 'levelcomplete' 
  | 'daily' 
  | 'shop' 
  | 'leaderboard' 
  | 'howtoplay' 
  | 'settings';
