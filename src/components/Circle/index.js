import React from 'react';
import { StyleSheet, View } from 'react-native';

const Circle = props => {
  const { translateX = 10, translateY = 10, backgroundColor = '#000' } = props;

  return (
    <View
      style={[
        styles.container,
        {
          transform: [{ translateX }, { translateY }],
          backgroundColor,
        },
      ]}
    >
      <View style={styles.circle} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    width: 80,
    height: 80,
    borderRadius: 40,
  },
  circle: {
    backgroundColor: '#f5fcff',
    width: 70,
    height: 70,
    borderRadius: 35,
  },
});

export default Circle;
