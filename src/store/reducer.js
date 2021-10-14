const Reducer = (state, action) => {
  switch (action.type) {
    case 'ADD_GAME_HISTORY':
      return {
        ...state,
        gameHistory: [...state.gameHistory, action.payload],
      };
    default:
      return state;
  }
};

export default Reducer;
