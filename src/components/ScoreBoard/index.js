import React, { useContext } from 'react';
import { StyleSheet, View } from 'react-native';
import { ListItem, Avatar } from 'react-native-elements';

import { Context } from '../../store';
import { getResultText } from '../../utils/getResultText';

const iconMapping = {
  0: 'user',
  1: 'sc-odnoklassniki',
  2: 'link',
};

const ScoreBoard = () => {
  const { state } = useContext(Context);

  return (
    <View>
      {state.gameHistory.map((game, i) => {
        return (
          <ListItem key={i} bottomDivider>
            <Avatar
              rounded
              icon={{
                name: iconMapping[game.winner],
                type: 'evilicon',
                color: 'rgb(0, 122, 255)',
                size: 40,
              }}
            />
            <ListItem.Content>
              <ListItem.Title>{getResultText(game.winner)}</ListItem.Title>
              <ListItem.Subtitle style={styles.subtitle}>
                {game.savedAt}
              </ListItem.Subtitle>
            </ListItem.Content>
          </ListItem>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  subtitle: {
    fontSize: 10,
  },
});

export default ScoreBoard;
