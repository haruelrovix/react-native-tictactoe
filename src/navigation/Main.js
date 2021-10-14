import React from 'react';
import { Text } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Board from '../components/Board';

const Placeholder = () => {
  return <Text>Placeholder</Text>
}

const Tab = createBottomTabNavigator();

const MyTabs = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Tic Tac Toe" component={Board} />
      <Tab.Screen name="Score" component={Placeholder} />
    </Tab.Navigator>
  );
}

export default MyTabs;
