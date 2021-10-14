import {
  GAME_RESULT_USER,
  GAME_RESULT_AI,
  GAME_RESULT_TIE,
} from '../constants/game';

export const getResultText = (result, turn) => {
  switch (result) {
    case GAME_RESULT_USER:
      return 'You won!';
    case GAME_RESULT_AI:
      return 'AI won!';
    case GAME_RESULT_TIE:
      return 'Tie!';
    default:
      return turn;
  }
};
