import React from 'react';
import { Sword, Crosshair, Box, Shuffle, Zap, Cpu, Tv, Play } from 'lucide-react';
import { THEMES } from '../data/gameData';
import { Theme } from '../types';

interface Props {
  onSelect: (themeId: string) => void;
  onBack: () => void;
}

const icons: Record<string, any> = {
  Sword, Crosshair, Box, Shuffle, Zap, Cpu, Tv
};

export const StepTheme: React.FC<Props> = ({ onSelect, onBack }) => {
  return (
    <div className="space-y-6 h-full flex flex-col">
      <div className="text-center space-y-1">
        <h2 className="text-3xl font-black text-white">Elige un Tema</h2>
        <p className="text-slate-400 text-sm">¿Sobre qué vamos a mentir hoy?</p>
      </div>

      <div className="grid grid-cols-2 gap-3 flex-1 overflow-y-auto pb-4">
        {Object.values(THEMES).map((theme: Theme) => {
          const Icon = icons[theme.icon] || Shuffle;
          return (
            <button
              key={theme.id}
              onClick={() => onSelect(theme.id)}
              className="relative group overflow-hidden bg-surface border border-slate-700 p-4 rounded-2xl text-left hover:border-primary hover:shadow-primary/20 hover:shadow-lg transition-all active:scale-95"
            >
              <div className="absolute top-0 right-0 p-3 opacity-10 group-hover:opacity-20 transition-opacity">
                <Icon size={64} />
              </div>
              <div className="relative z-10 flex flex-col h-full justify-between">
                <Icon className="text-primary mb-3" size={32} />
                <div>
                  <h3 className="font-bold text-lg leading-tight mb-1">{theme.title}</h3>
                  <p className="text-xs text-slate-400 line-clamp-2">{theme.description}</p>
                </div>
              </div>
            </button>
          );
        })}
      </div>
      
      <button 
        onClick={onBack}
        className="w-full py-3 text-slate-500 hover:text-white transition-colors text-sm font-medium"
      >
        Volver a configuración
      </button>
    </div>
  );
};