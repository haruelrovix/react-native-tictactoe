import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Board from '../components/Board';
import { Icon } from 'react-native-elements';
import ScoreBoard from '../components/ScoreBoard';
import { Platform } from 'react-native';

const BoardIcon = () => {
  return <Icon name="play" type="evilicon" />;
};

const ScoreIcon = () => {
  return <Icon name="chart" type="evilicon" />;
};

const Tab = createBottomTabNavigator();

const MyTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarItemStyle: { paddingVertical: Platform.select({ android: 4 }) },
      }}
    >
      <Tab.Screen
        name="Board"
        component={Board}
        options={{ title: 'Tic Tac Toe', tabBarIcon: BoardIcon }}
      />
      <Tab.Screen
        name="Score"
        component={ScoreBoard}
        options={{ title: 'Score Board', tabBarIcon: ScoreIcon }}
      />
    </Tab.Navigator>
  );
};

export default MyTabs;
