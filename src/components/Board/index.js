import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, TouchableWithoutFeedback, View } from 'react-native';

const Board = () => {
  const [userInputs, setUserInputs] = useState([])

  const handleBoardClick = e => {
    const { locationX, locationY } = e.nativeEvent
    console.log({ locationX })
    console.log({ locationY })

    setUserInputs([...userInputs, { locationX, locationY }])
  }

  console.log({ userInputs })

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
