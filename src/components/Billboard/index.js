import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import {
  GAME_RESULT_USER,
  GAME_RESULT_AI,
  GAME_RESULT_TIE,
} from '../../constants/game';

const getResultText = (result, turn) => {
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

const Billboard = ({ result, turn }) => {
  return (
    <View>
      <Text style={styles.text}>{getResultText(result, turn)}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    marginTop: 20,
    fontSize: 19,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  instructions: {
    marginTop: 20,
    color: '#222222',
    marginBottom: 5,
    textAlign: 'center',
  },
});

export default Billboard;
