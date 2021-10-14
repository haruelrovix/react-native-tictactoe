import React, { useContext } from 'react';
import { StyleSheet } from 'react-native';
import { Button } from 'react-native-elements';

import { Context } from '../../store';

const SaveButton = props => {
  const { dispatch } = useContext(Context);

  const saveResult = () => {
    dispatch({
      type: 'ADD_GAME_HISTORY',
      payload: {
        winner: props.result,
        savedAt: new Date().toISOString(),
      },
    });
  };

  return (
    <Button
      title="Save Result"
      buttonStyle={styles.button}
      type="outline"
      onPress={saveResult}
    />
  );
};

const styles = StyleSheet.create({
  button: {
    height: 50,
  },
});

export default SaveButton;
