import React, { useState } from 'react';
import { Plus, X, Users, VenetianMask } from 'lucide-react';
import { Button } from './Button';

interface Props {
  onComplete: (players: string[], impostorCount: number) => void;
}

export const StepSetup: React.FC<Props> = ({ onComplete }) => {
  const [names, setNames] = useState<string[]>(['Jugador 1', 'Jugador 2', 'Jugador 3']);
  const [currentInput, setCurrentInput] = useState('');
  const [impostorCount, setImpostorCount] = useState(1);

  const addPlayer = () => {
    if (currentInput.trim()) {
      setNames([...names, currentInput.trim()]);
      setCurrentInput('');
    }
  };

  const removePlayer = (index: number) => {
    setNames(names.filter((_, i) => i !== index));
  };

  const handleStart = () => {
    if (names.length >= 3) {
      onComplete(names, impostorCount);
    }
  };

  const maxImpostors = Math.max(1, Math.floor(names.length / 2) - 1);

  return (
    <div className="space-y-8 animate-fade-in">
      <div className="text-center space-y-2">
        <h1 className="text-4xl font-black bg-gradient-to-br from-white to-slate-400 bg-clip-text text-transparent">
          Configuración
        </h1>
        <p className="text-slate-400">Añade a los jugadores para empezar</p>
      </div>

      <div className="space-y-4">
        <div className="flex gap-2">
          <input
            type="text"
            value={currentInput}
            onChange={(e) => setCurrentInput(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && addPlayer()}
            placeholder="Nombre del jugador..."
            className="flex-1 bg-surface border border-slate-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
          />
          <Button onClick={addPlayer} disabled={!currentInput.trim()}>
            <Plus size={24} />
          </Button>
        </div>

        <div className="bg-surface/50 rounded-xl p-4 border border-slate-800 max-h-60 overflow-y-auto space-y-2">
          {names.map((name, idx) => (
            <div key={idx} className="flex justify-between items-center bg-darker/50 p-3 rounded-lg border border-slate-700/50">
              <span className="font-medium text-slate-200">{name}</span>
              <button onClick={() => removePlayer(idx)} className="text-slate-500 hover:text-red-400 transition-colors">
                <X size={20} />
              </button>
            </div>
          ))}
          {names.length === 0 && (
            <p className="text-center text-slate-500 py-4 italic">Añade jugadores para comenzar</p>
          )}
        </div>
      </div>

      <div className="bg-surface rounded-xl p-6 border border-slate-700">
        <div className="flex justify-between items-center mb-4">
          <div className="flex items-center gap-2 text-secondary font-bold">
            <VenetianMask size={24} />
            <span>Impostores</span>
          </div>
          <span className="text-2xl font-bold">{impostorCount}</span>
        </div>
        <input
          type="range"
          min="1"
          max={Math.max(1, Math.floor(names.length / 2))}
          value={impostorCount}
          onChange={(e) => setImpostorCount(parseInt(e.target.value))}
          className="w-full h-2 bg-darker rounded-lg appearance-none cursor-pointer accent-secondary"
        />
        <p className="text-xs text-slate-500 mt-2 text-center">
          Recomendado: 1 impostor cada 4-5 jugadores.
        </p>
      </div>

      <Button 
        fullWidth 
        onClick={handleStart} 
        disabled={names.length < 3}
        className="text-lg"
      >
        <Users className="mr-2" size={20} />
        Siguiente
      </Button>
    </div>
  );
};