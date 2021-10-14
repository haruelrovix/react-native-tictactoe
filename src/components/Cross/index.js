import React from 'react';
import { StyleSheet, View } from 'react-native';

const Cross = props => {
  const { translateX = 10, translateY = 10, backgroundColor = '#000' } = props;

  return (
    <View
      style={[
        styles.container,
        {
          transform: [
            { translateX: translateX + 35 },
            { translateY: translateY - 12 },
          ],
        },
      ]}
    >
      <View
        style={[
          styles.line,
          {
            transform: [{ rotate: '45deg' }],
            backgroundColor,
          },
        ]}
      />
      <View
        style={[
          styles.line,
          {
            transform: [{ rotate: '135deg' }],
            backgroundColor,
          },
        ]}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    width: 80,
    height: 80,
  },
  line: {
    position: 'absolute',
    width: 8,
    height: 105,
  },
});

export default Cross;
