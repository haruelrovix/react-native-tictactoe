/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import Main from './navigation/Main';
import Store from './store';

const App = () => {
  return (
    <React.Fragment>
      <NavigationContainer>
        <Store>
          <Main />
        </Store>
      </NavigationContainer>
    </React.Fragment>
  );
};

export default App;
