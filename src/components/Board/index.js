import React, { useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  TouchableWithoutFeedback,
  View,
} from 'react-native';

import {
  AREAS,
  CENTER_POINTS,
  CONDITIONS,
  GAME_RESULT_AI,
  GAME_RESULT_NO,
  GAME_RESULT_TIE,
  GAME_RESULT_USER,
} from '../../constants/game';
import Circle from '../Circle';
import Cross from '../Cross';

const isWinner = inputs =>
  CONDITIONS.some(condition =>
    condition.every(item => inputs.indexOf(item) !== -1),
  );

const Board = () => {
  const [userInputs, setUserInputs] = useState([]);
  const [AIInputs, setAIInputs] = useState([]);
  const [result, setResult] = useState(GAME_RESULT_NO);

  const handleBoardClick = e => {
    const { locationX, locationY } = e.nativeEvent;

    if (result !== GAME_RESULT_NO) {
      return;
    }

    const inputs = [...userInputs, ...AIInputs];

    const area = AREAS.find(
      location =>
        locationX >= location.startX &&
        locationX <= location.endX &&
        locationY >= location.startY &&
        locationY <= location.endY,
    );

    console.log({ area });

    if (area && inputs.every(location => location !== area.id)) {
      setUserInputs([...userInputs, area.id]);
      setTimeout(() => {
        findTheWinner();
        runEnemyMove();
      }, 3);
    }
  };

  console.log({ userInputs });
  console.log({ AIInputs });

  const findTheWinner = () => {
    const inputs = [...userInputs, ...AIInputs];

    if (inputs.length >= 5) {
      let res = isWinner(userInputs);
      if (res && result !== GAME_RESULT_USER) {
        setResult(GAME_RESULT_USER);
        return;
      }

      res = isWinner(AIInputs);
      if (res && result !== GAME_RESULT_AI) {
        setResult(GAME_RESULT_AI);
      }
    }

    if (
      inputs.length === 9 &&
      result === GAME_RESULT_NO &&
      result !== GAME_RESULT_TIE
    ) {
      setResult(GAME_RESULT_TIE);
    }
  };

  const runEnemyMove = () => {
    if (result !== -1) {
      return;
    }

    while (true) {
      const inputs = [...userInputs, ...AIInputs];

      const randomNumber = Math.round(Math.random() * 8.3)
      console.log({ randomNumber });

      if (inputs.every(input => input !== randomNumber)) {
        setAIInputs([...AIInputs, randomNumber]);
        findTheWinner();
        break;
      }
    }
  };

  const renderCircle = (inputs, Component) => {
    return inputs.map((input, index) => (
      <Component
        key={index}
        translateX={CENTER_POINTS[input].x}
        translateY={CENTER_POINTS[input].y}
        backgroundColor="#005eb8"
      />
    ));
  };

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <TouchableWithoutFeedback onPress={e => handleBoardClick(e)}>
          <View style={styles.boardContainer}>
            <View style={styles.line} />
            <View
              style={[
                styles.line,
                {
                  width: 3,
                  height: 306,
                  transform: [{ translateX: 200 }],
                },
              ]}
            />
            <View
              style={[
                styles.line,
                {
                  width: 306,
                  height: 3,
                  transform: [{ translateY: 100 }],
                },
              ]}
            />
            <View
              style={[
                styles.line,
                {
                  width: 306,
                  height: 3,
                  transform: [{ translateY: 200 }],
                },
              ]}
            />
            {renderCircle(userInputs, Circle)}
            {renderCircle(AIInputs, Cross)}
          </View>
        </TouchableWithoutFeedback>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  boardContainer: {
    borderWidth: 3,
    height: 312,
    width: 312,
  },
  line: {
    backgroundColor: '#000',
    height: 306,
    width: 3,
    position: 'absolute',
    transform: [{ translateX: 100 }],
  },
});

export default Board;
