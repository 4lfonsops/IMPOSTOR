import React, { useState } from 'react';
import { Eye, EyeOff, User, VenetianMask } from 'lucide-react';
import { Player } from '../types';
import { Button } from './Button';

interface Props {
  player: Player;
  onNext: () => void;
  isLastPlayer: boolean;
}

export const StepReveal: React.FC<Props> = ({ player, onNext, isLastPlayer }) => {
  const [isRevealed, setIsRevealed] = useState(false);

  if (!isRevealed) {
    return (
      <div className="flex flex-col items-center justify-center h-full space-y-8 animate-fade-in text-center">
        <div className="w-24 h-24 bg-surface rounded-full flex items-center justify-center border-4 border-slate-700 mb-4 animate-bounce-subtle">
          <User size={48} className="text-slate-400" />
        </div>
        
        <div className="space-y-2">
          <p className="text-slate-400 uppercase tracking-widest text-sm font-bold">Turno de</p>
          <h2 className="text-4xl font-black text-white">{player.name}</h2>
        </div>

        <div className="bg-yellow-500/10 border border-yellow-500/20 p-4 rounded-xl text-yellow-200 text-sm max-w-xs">
          ⚠️ Asegúrate de que nadie más esté mirando la pantalla.
        </div>

        <Button 
          onClick={() => setIsRevealed(true)}
          className="w-48 h-16 text-xl"
        >
          <Eye className="mr-2" />
          Ver mi Rol
        </Button>
      </div>
    );
  }

  const isImpostor = player.role === 'impostor';

  return (
    <div className="flex flex-col items-center justify-center h-full space-y-8 animate-fade-in text-center">
      <div className={`w-32 h-32 rounded-full flex items-center justify-center border-4 mb-4 ${isImpostor ? 'bg-secondary/10 border-secondary text-secondary' : 'bg-primary/10 border-primary text-primary'}`}>
        {isImpostor ? <VenetianMask size={64} /> : <User size={64} />}
      </div>

      <div className="space-y-1">
        <p className="text-slate-400 uppercase tracking-widest text-sm font-bold">Tu eres</p>
        <h2 className={`text-4xl font-black ${isImpostor ? 'text-secondary' : 'text-primary'}`}>
          {isImpostor ? 'EL IMPOSTOR' : 'CIUDADANO'}
        </h2>
      </div>

      <div className="w-full max-w-sm bg-surface border border-slate-700 p-8 rounded-2xl shadow-2xl">
        <p className="text-slate-400 text-sm mb-2 uppercase font-bold tracking-widest">
          {isImpostor ? 'Tu pista es:' : 'La palabra secreta es:'}
        </p>
        <p className="text-3xl font-bold text-white break-words">
          {isImpostor ? `"${player.hint}"` : player.secretWord}
        </p>
        {isImpostor && (
          <p className="mt-4 text-xs text-slate-500">
            Intenta mezclarte. No sabes la palabra real.
          </p>
        )}
      </div>

      <Button 
        variant="secondary"
        onClick={onNext}
        className="w-48"
      >
        <EyeOff className="mr-2" size={20} />
        {isLastPlayer ? 'Empezar Juego' : 'Ocultar y Pasar'}
      </Button>
    </div>
  );
};