import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Board from '../components/Board';

const MainStack = createStackNavigator();

export const Main = () => (
  <MainStack.Navigator>
    <MainStack.Screen name="Tic Tac Toe" component={Board} />
  </MainStack.Navigator>
);
