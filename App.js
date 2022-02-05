/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import AppNavigatior from './src/navigation/AppNavigation';
import {Provider} from 'react-redux';
import {configStore} from './src/store/configStore';
import {LogBox, StatusBar} from 'react-native';
import FlashMessage from 'react-native-flash-message';
import {StyleSheet} from 'react-native';
import Theme from './src/theme/colors';

LogBox.ignoreLogs(['Warning: ...']); //Hide warnings

LogBox.ignoreAllLogs();
const store = configStore();

const App: () => Node = () => {
  return (
    <Provider store={store}>
    <StatusBar backgroundColor={Theme.primary} />
      <AppNavigatior />
      <FlashMessage
        titleStyle={styles.textStyle}
        style={styles.container}
        position="bottom"
      />
    </Provider>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textStyle: {
    fontSize: 16,
    fontWeight: '700',
    fontStyle: 'normal',
    letterSpacing: 0.7,
  },
});

export default App;
