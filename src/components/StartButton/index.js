import React from 'react';
import { StyleSheet } from 'react-native';
import { Button } from 'react-native-elements';

const StartButton = ({ onPress }) => {
  return (
    <Button
      onPress={onPress}
      buttonStyle={styles.button}
      containerStyle={styles.container}
      title="START NEW GAME"
    />
  );
};

const styles = StyleSheet.create({
  container: {
    fontSize: 19,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  button: {
    height: 50,
    width: 182,
  },
});

export default StartButton;
