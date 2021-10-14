import React from 'react';
import { Text } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Board from '../components/Board';
import { Icon } from 'react-native-elements';

const Placeholder = () => {
  return <Text>Placeholder</Text>;
};

const BoardIcon = () => {
  return <Icon name="play" type="evilicon" />;
};

const ScoreIcon = () => {
  return <Icon name="chart" type="evilicon" />;
};

const Tab = createBottomTabNavigator();

const MyTabs = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Board"
        component={Board}
        options={{ title: 'Tic Tac Toe', tabBarIcon: BoardIcon }}
      />
      <Tab.Screen
        name="Score"
        component={Placeholder}
        options={{ title: 'Score Board', tabBarIcon: ScoreIcon }}
      />
    </Tab.Navigator>
  );
};

export default MyTabs;
