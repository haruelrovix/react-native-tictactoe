import React, { useContext, useState } from 'react';
import { StyleSheet } from 'react-native';
import { Button } from 'react-native-elements';

import { Context } from '../../store';

const SaveButton = props => {
  const { dispatch } = useContext(Context);
  const [isDisabled, setButtonDisabled] = useState(false);

  const saveResult = () => {
    dispatch({
      type: 'ADD_GAME_HISTORY',
      payload: {
        winner: props.result,
        savedAt: new Date().toISOString(),
      },
    });

    setButtonDisabled(true);
  };

  return (
    <Button
      title="Save Result"
      buttonStyle={styles.button}
      type="outline"
      onPress={saveResult}
      disabled={isDisabled}
    />
  );
};

const styles = StyleSheet.create({
  button: {
    height: 50,
  },
});

export default SaveButton;
