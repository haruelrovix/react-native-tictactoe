import { CONDITIONS } from '../constants/game';

export const isWinner = inputs =>
  CONDITIONS.some(condition =>
    condition.every(item => inputs.indexOf(item) !== -1),
  );
