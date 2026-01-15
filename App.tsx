import React, { useState } from 'react';
import { THEMES } from './data/gameData';
import { GameState, GameStep, Player } from './types';
import { StepSetup } from './components/StepSetup';
import { StepTheme } from './components/StepTheme';
import { StepReveal } from './components/StepReveal';
import { StepGame } from './components/StepGame';

const App: React.FC = () => {
  const [gameState, setGameState] = useState<GameState>({
    step: GameStep.SETUP,
    players: [],
    impostorCount: 1,
    currentThemeId: null,
    currentPlayerIndex: 0,
    selectedWord: null,
  });

  const handleSetupComplete = (names: string[], impostorCount: number) => {
    // Create initial player objects (roles assigned later)
    const players: Player[] = names.map((name, i) => ({
      id: `p-${i}`,
      name,
      role: 'citizen',
      secretWord: '',
    }));

    setGameState(prev => ({
      ...prev,
      players,
      impostorCount,
      step: GameStep.THEME_SELECT
    }));
  };

  const handleThemeSelect = (themeId: string) => {
    const theme = THEMES[themeId];
    if (!theme) return;

    // 1. Select random word
    const randomWordObj = theme.words[Math.floor(Math.random() * theme.words.length)];
    const secretWord = randomWordObj.word;

    // 2. Assign Roles
    const players = [...gameState.players];
    // Shuffle array indices to pick random impostors
    const indices = players.map((_, i) => i).sort(() => Math.random() - 0.5);
    const impostorIndices = indices.slice(0, gameState.impostorCount);

    const newPlayers = players.map((p, index) => {
      const isImpostor = impostorIndices.includes(index);
      
      let hint = '';
      if (isImpostor) {
        // Pick a random hint from the list. 
        // Logic: Ensures diversity.
        hint = randomWordObj.hints[Math.floor(Math.random() * randomWordObj.hints.length)];
      }

      return {
        ...p,
        role: isImpostor ? 'impostor' : 'citizen',
        secretWord: isImpostor ? 'IMPOSTOR' : secretWord,
        hint: isImpostor ? hint : undefined
      } as Player;
    });

    setGameState(prev => ({
      ...prev,
      currentThemeId: themeId,
      players: newPlayers,
      selectedWord: secretWord,
      currentPlayerIndex: 0,
      step: GameStep.REVEAL
    }));
  };

  const handleNextReveal = () => {
    if (gameState.currentPlayerIndex < gameState.players.length - 1) {
      setGameState(prev => ({
        ...prev,
        currentPlayerIndex: prev.currentPlayerIndex + 1
      }));
    } else {
      setGameState(prev => ({
        ...prev,
        step: GameStep.PLAYING
      }));
    }
  };

  const handleNewGame = () => {
    setGameState(prev => ({
      ...prev,
      step: GameStep.SETUP,
      currentPlayerIndex: 0,
      selectedWord: null,
      currentThemeId: null
    }));
  };

  return (
    <div className="min-h-screen bg-darker text-slate-200 flex flex-col font-sans selection:bg-secondary selection:text-white">
      {/* Header */}
      <header className="p-4 border-b border-slate-800 bg-surface/50 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-md mx-auto flex items-center justify-between">
          <div className="font-black text-xl tracking-tighter text-white flex items-center gap-2">
             <span className="bg-primary w-2 h-2 rounded-full"></span>
             IMPOSTOR
          </div>
          {gameState.step !== GameStep.SETUP && (
            <button 
              onClick={handleNewGame}
              className="text-xs font-bold text-slate-500 hover:text-white transition-colors"
            >
              SALIR
            </button>
          )}
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 flex flex-col p-6 max-w-md mx-auto w-full">
        {gameState.step === GameStep.SETUP && (
          <StepSetup onComplete={handleSetupComplete} />
        )}
        
        {gameState.step === GameStep.THEME_SELECT && (
          <StepTheme 
            onSelect={handleThemeSelect} 
            onBack={() => setGameState(prev => ({ ...prev, step: GameStep.SETUP }))} 
          />
        )}

        {gameState.step === GameStep.REVEAL && (
          <StepReveal 
            // CRITICAL FIX: The key prop forces React to destroy and recreate the component
            // when the player changes, ensuring the state resets to "hidden" automatically.
            key={gameState.players[gameState.currentPlayerIndex].id}
            player={gameState.players[gameState.currentPlayerIndex]} 
            onNext={handleNextReveal}
            isLastPlayer={gameState.currentPlayerIndex === gameState.players.length - 1}
          />
        )}

        {gameState.step === GameStep.PLAYING && (
          <StepGame 
            onNewGame={handleNewGame}
            themeTitle={gameState.currentThemeId ? THEMES[gameState.currentThemeId].title : 'Desconocido'}
          />
        )}
      </main>

      {/* Footer */}
      <footer className="p-4 text-center text-xs text-slate-600">
        <p>Juega con precaución • No confíes en nadie</p>
      </footer>
    </div>
  );
};

export default App;