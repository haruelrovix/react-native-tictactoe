import React, { Component } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
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
import Billboard from '../Billboard';
import Circle from '../Circle';
import Cross from '../Cross';
import StartButton from '../StartButton';

const isWinner = inputs =>
  CONDITIONS.some(condition =>
    condition.every(item => inputs.indexOf(item) !== -1),
  );

export default class Board extends Component {
  constructor() {
    super();

    this.state = {
      AIInputs: [],
      userInputs: [],
      result: GAME_RESULT_NO,
      turn: 'Welcome!',
    };
  }

  handleBoardClick = e => {
    const { userInputs, AIInputs, result } = this.state;

    if (result !== -1) {
      return;
    }

    const inputs = [...userInputs, ...AIInputs];
    const { locationX, locationY } = e.nativeEvent;

    const area = AREAS.find(
      location =>
        locationX >= location.startX &&
        locationX <= location.endX &&
        locationY >= location.startY &&
        locationY <= location.endY,
    );

    if (area && inputs.every(location => location !== area.id)) {
      this.setState({
        userInputs: [...userInputs, area.id],
        turn: "It's CPU's turn",
      });

      setTimeout(() => {
        this.findTheWinner();
        this.runEnemyMove();
      }, 2000);
    }
  };

  findTheWinner = () => {
    const { userInputs, AIInputs, result } = this.state;
    const inputs = [...userInputs, ...AIInputs];

    if (inputs.length >= 5) {
      let res = isWinner(userInputs);
      if (res && result !== GAME_RESULT_USER) {
        return this.setState({ result: GAME_RESULT_USER });
      }

      res = isWinner(AIInputs);
      if (res && result !== GAME_RESULT_AI) {
        return this.setState({ result: GAME_RESULT_AI });
      }
    }

    if (
      inputs.length === 9 &&
      result === GAME_RESULT_NO &&
      result !== GAME_RESULT_TIE
    ) {
      this.setState({ result: GAME_RESULT_TIE });
    }
  };

  runEnemyMove = () => {
    const { userInputs, AIInputs, result } = this.state;
    if (result !== -1) {
      return;
    }

    while (true) {
      const inputs = [...userInputs, ...AIInputs];

      const randomNumber = Math.round(Math.random() * 8.3);

      if (inputs.every(input => input !== randomNumber)) {
        this.setState({
          AIInputs: [...AIInputs, randomNumber],
          turn: "It's your turn",
        });

        this.findTheWinner();
        break;
      }
    }
  };

  restartGame = () => {
    this.setState({
      AIInputs: [],
      userInputs: [],
      result: GAME_RESULT_NO,
      turn: "It's your turn",
    });
  };

  markInput = (inputs, Comp) => {
    return inputs.map((input, index) => (
      <Comp
        key={index}
        translateX={CENTER_POINTS[input].x}
        translateY={CENTER_POINTS[input].y}
        backgroundColor="#005eb8"
      />
    ));
  };

  render() {
    const { userInputs, AIInputs, result, turn } = this.state;

    return (
      <SafeAreaView>
        <View style={styles.container}>
          <View style={{ marginBottom: 20 }}>
            <Text style={{ fontSize: 24, fontWeight: 'bold' }}>
              Tic Tac Toe!
            </Text>
          </View>
          <TouchableWithoutFeedback onPress={this.handleBoardClick}>
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
              {this.markInput(userInputs, Circle)}
              {this.markInput(AIInputs, Cross)}
            </View>
          </TouchableWithoutFeedback>
          <Billboard result={result} turn={turn} />
          <StartButton onPress={this.restartGame} />
        </View>
      </SafeAreaView>
    );
  }
}

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
