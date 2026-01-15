import React, { useState, useEffect } from 'react';
import { Timer, RotateCcw } from 'lucide-react';
import { Button } from './Button';

interface Props {
  onNewGame: () => void;
  themeTitle: string;
}

export const StepGame: React.FC<Props> = ({ onNewGame, themeTitle }) => {
  const [seconds, setSeconds] = useState(0);
  const [isActive, setIsActive] = useState(true);

  useEffect(() => {
    let interval: any = null;
    if (isActive) {
      interval = setInterval(() => {
        setSeconds(s => s + 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isActive]);

  const formatTime = (secs: number) => {
    const mins = Math.floor(secs / 60);
    const s = secs % 60;
    return `${mins}:${s.toString().padStart(2, '0')}`;
  };

  return (
    <div className="flex flex-col items-center justify-center h-full space-y-10 text-center animate-fade-in">
      
      <div className="space-y-2">
        <h1 className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-secondary to-orange-500 animate-pulse">
          ¡A Jugar!
        </h1>
        <p className="text-slate-400">Tema: <span className="text-white font-bold">{themeTitle}</span></p>
      </div>

      <div className="bg-darker border-4 border-slate-700 rounded-full w-64 h-64 flex flex-col items-center justify-center shadow-[0_0_50px_rgba(99,102,241,0.15)]">
        <Timer size={32} className="text-primary mb-2" />
        <span className="text-6xl font-mono font-bold text-white tabular-nums">
          {formatTime(seconds)}
        </span>
        <button 
          onClick={() => setIsActive(!isActive)}
          className="mt-4 text-sm font-bold text-slate-500 hover:text-white uppercase tracking-wider"
        >
          {isActive ? 'Pausar' : 'Reanudar'}
        </button>
      </div>

      <div className="bg-surface p-6 rounded-xl border border-slate-700 max-w-sm w-full">
        <h3 className="font-bold text-white mb-2">Objetivos:</h3>
        <ul className="text-left text-sm text-slate-300 space-y-2 list-disc list-inside">
          <li><strong className="text-primary">Ciudadanos:</strong> Haced preguntas para encontrar al impostor sin revelar la palabra secreta.</li>
          <li><strong className="text-secondary">Impostor:</strong> Miente y deduce la palabra secreta basándote en la conversación.</li>
        </ul>
      </div>

      <Button onClick={onNewGame} variant="secondary">
        <RotateCcw className="mr-2" size={20} />
        Nueva Partida
      </Button>
    </div>
  );
};