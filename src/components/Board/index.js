import React, { useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  TouchableWithoutFeedback,
  View,
} from 'react-native';

import { AREAS, CENTER_POINTS, GAME_RESULT_NO } from '../../constants/game';
import Circle from '../Circle';

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
    }
  };

  console.log({ userInputs });

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
            {userInputs.map((input, index) => (
              <Circle
                key={index}
                translateX={CENTER_POINTS[input].x}
                translateY={CENTER_POINTS[input].y}
                backgroundColor="#005eb8"
              />
            ))}
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
