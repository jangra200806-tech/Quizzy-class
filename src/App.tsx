import React, { useState } from 'react';
import { MainMenu } from './components/MainMenu';
import { GameScreen } from './components/GameScreen';
import { DailyChallengeModal } from './components/DailyChallengeModal';
import { HowToPlayModal } from './components/HowToPlayModal';
import { SettingsModal } from './components/SettingsModal';
import { ShopModal } from './components/ShopModal';
import { LeaderboardModal } from './components/LeaderboardModal';

export type ActiveScreen = 'menu' | 'play_classic' | 'play_daily';

export default function App() {
  const [screen, setScreen] = useState<ActiveScreen>('menu');

  // Modals state
  const [showDailyModal, setShowDailyModal] = useState(false);
  const [showHowToPlay, setShowHowToPlay] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [showShop, setShowShop] = useState(false);
  const [showLeaderboard, setShowLeaderboard] = useState(false);

  return (
    <main className="min-h-screen w-full bg-slate-900 text-slate-800 flex justify-center items-center font-sans antialiased overflow-x-hidden selection:bg-amber-300">
      {/* Mobile-First Centered Game Cabinet Frame */}
      <div className="w-full max-w-md min-h-screen bg-amber-50 relative flex flex-col shadow-2xl overflow-hidden">
        {screen === 'menu' && (
          <MainMenu
            onPlay={() => setScreen('play_classic')}
            onOpenDaily={() => setShowDailyModal(true)}
            onOpenHowToPlay={() => setShowHowToPlay(true)}
            onOpenSettings={() => setShowSettings(true)}
            onOpenShop={() => setShowShop(true)}
            onOpenLeaderboard={() => setShowLeaderboard(true)}
          />
        )}

        {screen === 'play_classic' && (
          <GameScreen
            isDailyMode={false}
            onExitToMenu={() => setScreen('menu')}
          />
        )}

        {screen === 'play_daily' && (
          <GameScreen
            isDailyMode={true}
            onExitToMenu={() => setScreen('menu')}
          />
        )}

        {/* Global Modals from Main Menu */}
        {showDailyModal && (
          <DailyChallengeModal
            onClose={() => setShowDailyModal(false)}
            onStartDaily={() => {
              setShowDailyModal(false);
              setScreen('play_daily');
            }}
          />
        )}

        {showHowToPlay && (
          <HowToPlayModal onClose={() => setShowHowToPlay(false)} />
        )}

        {showSettings && (
          <SettingsModal onClose={() => setShowSettings(false)} />
        )}

        {showShop && (
          <ShopModal onClose={() => setShowShop(false)} />
        )}

        {showLeaderboard && (
          <LeaderboardModal onClose={() => setShowLeaderboard(false)} />
        )}
      </div>
    </main>
  );
}
