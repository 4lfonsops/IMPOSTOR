export enum GameStep {
  SETUP = 'SETUP',
  THEME_SELECT = 'THEME_SELECT',
  REVEAL = 'REVEAL',
  PLAYING = 'PLAYING',
}

export interface Player {
  id: string;
  name: string;
  role: 'citizen' | 'impostor';
  secretWord: string; // The real word for citizens, or "Impostor" label
  hint?: string; // Only for impostor
}

export interface WordDefinition {
  word: string;
  hints: string[];
}

export interface Theme {
  id: string;
  title: string;
  icon: string;
  description: string;
  words: WordDefinition[];
}

export interface GameState {
  step: GameStep;
  players: Player[];
  impostorCount: number;
  currentThemeId: string | null;
  currentPlayerIndex: number;
  selectedWord: string | null;
}