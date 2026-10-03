import { ClassroomTheme, OutfitItem } from '../types/game';

export const CLASSROOM_THEMES: ClassroomTheme[] = [
  {
    id: 'normal',
    name: 'Normal Classroom',
    description: 'Classic green chalkboard, chalk dust, and cozy wooden desks.',
    levelRequired: 1,
    bgGradient: 'from-amber-100 via-orange-50 to-amber-200',
    wallColor: '#FEF3C7',
    boardColor: '#1B4D3E', // Classic deep chalkboard green
    floorColor: '#B45309',
    accentColor: '#F59E0B',
    icon: '🏫'
  },
  {
    id: 'colorful',
    name: 'Colorful Art Room',
    description: 'Vibrant rainbow bunting, paint splatters, and origami birds.',
    levelRequired: 5,
    bgGradient: 'from-pink-100 via-purple-50 to-sky-100',
    wallColor: '#FCE7F3',
    boardColor: '#6B21A8', // Playful purple board
    floorColor: '#9333EA',
    accentColor: '#EC4899',
    icon: '🎨'
  },
  {
    id: 'science',
    name: 'Science Laboratory',
    description: 'Bubbling neon flasks, periodic table poster, and atoms.',
    levelRequired: 10,
    bgGradient: 'from-emerald-100 via-teal-50 to-cyan-100',
    wallColor: '#D1FAE5',
    boardColor: '#0F766E', // Lab teal board
    floorColor: '#047857',
    accentColor: '#10B981',
    icon: '🧪'
  },
  {
    id: 'exam',
    name: 'Strict Exam Hall',
    description: 'Ticking giant wall clock, column arches, and "PIN DROP SILENCE" banner.',
    levelRequired: 15,
    bgGradient: 'from-blue-100 via-slate-50 to-indigo-100',
    wallColor: '#E0E7FF',
    boardColor: '#1E293B', // Deep navy exam board
    floorColor: '#3730A3',
    accentColor: '#6366F1',
    icon: '📝'
  },
  {
    id: 'office',
    name: "Funny Principal's Office",
    description: 'Mahogany desk, golden trophies, red carpet, and "Boss in Progress" frame.',
    levelRequired: 20,
    bgGradient: 'from-rose-100 via-amber-50 to-yellow-100',
    wallColor: '#FFE4E6',
    boardColor: '#881337', // Regal wine board
    floorColor: '#9F1239',
    accentColor: '#E11D48',
    icon: '🏆'
  }
];

export const OUTFIT_ITEMS: OutfitItem[] = [
  // Student Outfits
  {
    id: 'student_uniform',
    name: 'School Uniform',
    category: 'student',
    price: 0,
    color: '#3B82F6', // Blue tie/collar
    accent: '#1D4ED8',
    description: 'Neat and tidy everyday school uniform.'
  },
  {
    id: 'student_hoodie',
    name: 'Cool Gamer Hoodie',
    category: 'student',
    price: 250,
    color: '#10B981', // Emerald hoodie
    accent: '#047857',
    description: 'Comfy oversized neon green hoodie.'
  },
  {
    id: 'student_nerd',
    name: 'Nerd Bowtie & Specs',
    category: 'student',
    price: 450,
    color: '#F59E0B', // Yellow sweater & red bowtie
    accent: '#DC2626',
    description: 'Thick black glasses and an intellectual red bowtie.'
  },
  {
    id: 'student_cape',
    name: 'Super Student Cape',
    category: 'student',
    price: 800,
    color: '#EF4444', // Red superhero cape
    accent: '#FBBF24',
    description: 'Swooshing heroic cape to conquer any test!'
  },
  {
    id: 'student_pajamas',
    name: 'Sleepy Bear Pajamas',
    category: 'student',
    price: 1200,
    color: '#8B5CF6', // Purple dotted pajamas
    accent: '#6D28D9',
    description: 'Forgot to change out of bed, maximum comfort!'
  },

  // Teacher Outfits
  {
    id: 'teacher_blazer',
    name: 'Smart Teacher Blazer',
    category: 'teacher',
    price: 0,
    color: '#0284C7', // Sky blazer
    accent: '#0369A1',
    description: 'Classic professional blazer with red reading glasses.'
  },
  {
    id: 'teacher_cool',
    name: 'Cool Denim & Shades',
    category: 'teacher',
    price: 300,
    color: '#2563EB', // Blue denim jacket
    accent: '#1E293B',
    description: 'Dark sunglasses and relaxed denim teacher vibes.'
  },
  {
    id: 'teacher_labcoat',
    name: 'Mad Scientist Lab Coat',
    category: 'teacher',
    price: 550,
    color: '#F8FAFC', // White lab coat with green badge
    accent: '#10B981',
    description: 'Pockets filled with test tubes and safety goggles.'
  },
  {
    id: 'teacher_saree',
    name: 'Festive Gown',
    category: 'teacher',
    price: 900,
    color: '#EC4899', // Pink & gold elegant gown
    accent: '#F59E0B',
    description: 'Gorgeous traditional festive teacher gown with gold border.'
  },
  {
    id: 'teacher_detective',
    name: 'Detective Trenchcoat',
    category: 'teacher',
    price: 1400,
    color: '#78350F', // Brown trenchcoat & fedora
    accent: '#D97706',
    description: 'Here to investigate missing homework with a magnifying glass!'
  }
];
