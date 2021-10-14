import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { getResultText } from '../../utils/getResultText';

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
