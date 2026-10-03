import React, { useState } from 'react';
import { X, Check, Lock, Sparkles, Coins } from 'lucide-react';
import { useGameStore } from '../store/useGameStore';
import { OUTFIT_ITEMS, CLASSROOM_THEMES } from '../data/themes';
import { TeacherCharacter } from './TeacherCharacter';
import { StudentCharacter } from './StudentCharacter';
import { sound } from '../utils/audio';
import { ClassroomThemeId } from '../types/game';

interface Props {
  onClose: () => void;
}

export const ShopModal: React.FC<Props> = ({ onClose }) => {
  const {
    coins,
    unlockedOutfits,
    equippedStudentOutfit,
    equippedTeacherOutfit,
    equippedTheme,
    spendCoins,
    unlockOutfit,
    equipOutfit,
    equipTheme
  } = useGameStore();

  const [activeTab, setActiveTab] = useState<'student' | 'teacher' | 'themes'>('student');
  const [purchaseNotice, setPurchaseNotice] = useState<string | null>(null);

  const studentOutfits = OUTFIT_ITEMS.filter((item) => item.category === 'student');
  const teacherOutfits = OUTFIT_ITEMS.filter((item) => item.category === 'teacher');

  const handleBuyOrEquipOutfit = (item: typeof OUTFIT_ITEMS[0]) => {
    sound.playClick();
    const isUnlocked = unlockedOutfits.includes(item.id);

    if (isUnlocked) {
      equipOutfit(item.category, item.id);
      setPurchaseNotice(`Equipped ${item.name}!`);
      setTimeout(() => setPurchaseNotice(null), 1800);
    } else {
      if (coins >= item.price) {
        const success = spendCoins(item.price);
        if (success) {
          sound.playPowerUp();
          unlockOutfit(item.id);
          equipOutfit(item.category, item.id);
          setPurchaseNotice(`Unlocked & Equipped ${item.name}! 🎉`);
          setTimeout(() => setPurchaseNotice(null), 2000);
        }
      } else {
        setPurchaseNotice(`Need ${item.price - coins} more coins! 🪙`);
        setTimeout(() => setPurchaseNotice(null), 1800);
      }
    }
  };

  const handleEquipTheme = (themeId: ClassroomThemeId) => {
    sound.playClick();
    equipTheme(themeId);
    setPurchaseNotice(`Theme changed! 🎨`);
    setTimeout(() => setPurchaseNotice(null), 1500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-900/85 backdrop-blur-sm select-none animate-fade-in">
      <div className="relative w-full max-w-md bg-white rounded-3xl border-4 border-slate-900 shadow-2xl overflow-hidden flex flex-col max-h-[90vh]">
        {/* Header */}
        <div className="p-4 bg-gradient-to-r from-amber-400 to-yellow-500 border-b-2 border-slate-900 flex items-center justify-between">
          <div>
            <div className="text-[10px] font-black text-amber-900 uppercase tracking-widest">Classroom Closet</div>
            <h3 className="text-xl font-black text-slate-900 flex items-center gap-1.5">
              <span>Outfit & Theme Shop</span>
              <Sparkles size={18} className="text-amber-900" />
            </h3>
          </div>

          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1.5 bg-amber-950/80 text-yellow-300 font-mono font-black text-sm px-3 py-1 rounded-full shadow-inner border border-amber-800">
              <Coins size={16} className="text-yellow-400" />
              <span>{coins}</span>
            </div>

            <button
              id="close-shop-btn"
              onClick={() => {
                sound.playClick();
                onClose();
              }}
              className="w-8 h-8 rounded-full bg-white/80 hover:bg-white text-slate-800 flex items-center justify-center border border-slate-400 active:scale-90"
            >
              <X size={18} />
            </button>
          </div>
        </div>

        {/* Live Character Preview Box */}
        <div className="p-3 bg-amber-50/70 border-b border-slate-200 flex items-center justify-center gap-4">
          <div className="w-24 h-24 bg-white rounded-2xl border-2 border-amber-200 p-1 flex items-center justify-center shadow-sm">
            <StudentCharacter expression="cool" outfitId={equippedStudentOutfit} />
          </div>
          <div className="w-24 h-24 bg-white rounded-2xl border-2 border-amber-200 p-1 flex items-center justify-center shadow-sm">
            <TeacherCharacter expression="celebrating" outfitId={equippedTeacherOutfit} />
          </div>
        </div>

        {/* Purchase Notification Banner */}
        {purchaseNotice && (
          <div className="bg-emerald-600 text-white font-bold text-xs py-1.5 px-3 text-center animate-bounce">
            {purchaseNotice}
          </div>
        )}

        {/* Navigation Tabs */}
        <div className="flex border-b border-slate-200 bg-slate-100">
          <button
            id="shop-tab-student"
            onClick={() => setActiveTab('student')}
            className={`flex-1 py-2.5 text-xs font-black transition ${
              activeTab === 'student'
                ? 'bg-white text-amber-900 border-b-2 border-amber-500 shadow-sm'
                : 'text-slate-500 hover:text-slate-800'
            }`}
          >
            👦 Student Outfits
          </button>
          <button
            id="shop-tab-teacher"
            onClick={() => setActiveTab('teacher')}
            className={`flex-1 py-2.5 text-xs font-black transition ${
              activeTab === 'teacher'
                ? 'bg-white text-amber-900 border-b-2 border-amber-500 shadow-sm'
                : 'text-slate-500 hover:text-slate-800'
            }`}
          >
            👩‍🏫 Teacher Outfits
          </button>
          <button
            id="shop-tab-themes"
            onClick={() => setActiveTab('themes')}
            className={`flex-1 py-2.5 text-xs font-black transition ${
              activeTab === 'themes'
                ? 'bg-white text-amber-900 border-b-2 border-amber-500 shadow-sm'
                : 'text-slate-500 hover:text-slate-800'
            }`}
          >
            🎨 Class Themes
          </button>
        </div>

        {/* Scrollable Shop Content */}
        <div className="flex-1 overflow-y-auto p-3 space-y-2.5">
          {activeTab === 'student' && (
            <div className="space-y-2">
              {studentOutfits.map((outfit) => {
                const isUnlocked = unlockedOutfits.includes(outfit.id);
                const isEquipped = equippedStudentOutfit === outfit.id;
                const canAfford = coins >= outfit.price;

                return (
                  <div
                    key={outfit.id}
                    className={`p-3 rounded-2xl border-2 flex items-center justify-between gap-2 transition ${
                      isEquipped
                        ? 'bg-emerald-50 border-emerald-500 shadow-sm'
                        : 'bg-white border-slate-200 hover:border-slate-300'
                    }`}
                  >
                    <div>
                      <div className="font-bold text-sm text-slate-900 flex items-center gap-1.5">
                        <span>{outfit.name}</span>
                        {isEquipped && (
                          <span className="bg-emerald-100 text-emerald-800 text-[10px] font-black px-2 py-0.5 rounded-full border border-emerald-300">
                            EQUIPPED
                          </span>
                        )}
                      </div>
                      <div className="text-xs text-slate-500 mt-0.5">{outfit.description}</div>
                    </div>

                    <div className="shrink-0">
                      {isEquipped ? (
                        <button disabled className="px-3 py-1.5 rounded-xl bg-emerald-600 text-white font-bold text-xs flex items-center gap-1">
                          <Check size={14} />
                          <span>Active</span>
                        </button>
                      ) : isUnlocked ? (
                        <button
                          onClick={() => handleBuyOrEquipOutfit(outfit)}
                          className="px-3 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-900 text-white font-bold text-xs shadow active:scale-95 transition"
                        >
                          Equip
                        </button>
                      ) : (
                        <button
                          onClick={() => handleBuyOrEquipOutfit(outfit)}
                          className={`px-3 py-1.5 rounded-xl font-black text-xs flex items-center gap-1 shadow active:scale-95 transition ${
                            canAfford
                              ? 'bg-amber-500 hover:bg-amber-600 text-white'
                              : 'bg-slate-200 text-slate-500 cursor-not-allowed'
                          }`}
                        >
                          <Coins size={14} />
                          <span>{outfit.price}</span>
                        </button>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          )}

          {activeTab === 'teacher' && (
            <div className="space-y-2">
              {teacherOutfits.map((outfit) => {
                const isUnlocked = unlockedOutfits.includes(outfit.id);
                const isEquipped = equippedTeacherOutfit === outfit.id;
                const canAfford = coins >= outfit.price;

                return (
                  <div
                    key={outfit.id}
                    className={`p-3 rounded-2xl border-2 flex items-center justify-between gap-2 transition ${
                      isEquipped
                        ? 'bg-emerald-50 border-emerald-500 shadow-sm'
                        : 'bg-white border-slate-200 hover:border-slate-300'
                    }`}
                  >
                    <div>
                      <div className="font-bold text-sm text-slate-900 flex items-center gap-1.5">
                        <span>{outfit.name}</span>
                        {isEquipped && (
                          <span className="bg-emerald-100 text-emerald-800 text-[10px] font-black px-2 py-0.5 rounded-full border border-emerald-300">
                            EQUIPPED
                          </span>
                        )}
                      </div>
                      <div className="text-xs text-slate-500 mt-0.5">{outfit.description}</div>
                    </div>

                    <div className="shrink-0">
                      {isEquipped ? (
                        <button disabled className="px-3 py-1.5 rounded-xl bg-emerald-600 text-white font-bold text-xs flex items-center gap-1">
                          <Check size={14} />
                          <span>Active</span>
                        </button>
                      ) : isUnlocked ? (
                        <button
                          onClick={() => handleBuyOrEquipOutfit(outfit)}
                          className="px-3 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-900 text-white font-bold text-xs shadow active:scale-95 transition"
                        >
                          Equip
                        </button>
                      ) : (
                        <button
                          onClick={() => handleBuyOrEquipOutfit(outfit)}
                          className={`px-3 py-1.5 rounded-xl font-black text-xs flex items-center gap-1 shadow active:scale-95 transition ${
                            canAfford
                              ? 'bg-amber-500 hover:bg-amber-600 text-white'
                              : 'bg-slate-200 text-slate-500 cursor-not-allowed'
                          }`}
                        >
                          <Coins size={14} />
                          <span>{outfit.price}</span>
                        </button>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          )}

          {activeTab === 'themes' && (
            <div className="space-y-2">
              {CLASSROOM_THEMES.map((theme) => {
                const isEquipped = equippedTheme === theme.id;

                return (
                  <div
                    key={theme.id}
                    className={`p-3 rounded-2xl border-2 flex items-center justify-between gap-2 transition ${
                      isEquipped
                        ? 'bg-emerald-50 border-emerald-500 shadow-sm'
                        : 'bg-white border-slate-200 hover:border-slate-300'
                    }`}
                  >
                    <div className="flex items-center gap-2.5">
                      <span className="text-2xl">{theme.icon}</span>
                      <div>
                        <div className="font-bold text-sm text-slate-900 flex items-center gap-1.5">
                          <span>{theme.name}</span>
                          {isEquipped && (
                            <span className="bg-emerald-100 text-emerald-800 text-[10px] font-black px-2 py-0.5 rounded-full border border-emerald-300">
                              ACTIVE
                            </span>
                          )}
                        </div>
                        <div className="text-xs text-slate-500 mt-0.5">{theme.description}</div>
                      </div>
                    </div>

                    <div className="shrink-0">
                      {isEquipped ? (
                        <button disabled className="px-3 py-1.5 rounded-xl bg-emerald-600 text-white font-bold text-xs flex items-center gap-1">
                          <Check size={14} />
                          <span>Active</span>
                        </button>
                      ) : (
                        <button
                          onClick={() => handleEquipTheme(theme.id)}
                          className="px-3 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-900 text-white font-bold text-xs shadow active:scale-95 transition"
                        >
                          Select
                        </button>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="p-3 bg-slate-50 border-t border-slate-200 text-center">
          <button
            onClick={() => {
              sound.playClick();
              onClose();
            }}
            className="w-full py-2.5 rounded-xl bg-slate-900 hover:bg-black text-white font-bold text-xs shadow transition active:scale-95"
          >
            RETURN TO GAME 🎒
          </button>
        </div>
      </div>
    </div>
  );
};
