import React from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';

const StartButton = ({ onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <Text style={styles.text}>START GAME</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    marginTop: 20,
    fontSize: 19,
    fontWeight: 'bold',
    textAlign: 'center',
    backgroundColor: '#2C528C',
  },
  text: { color: '#fff' },
});

export default StartButton;
