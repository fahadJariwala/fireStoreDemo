import React from 'react';
import { View, StatusBar, Dimensions } from 'react-native';
import { Provider } from 'react-redux';
import EStyleSheet from 'react-native-extended-stylesheet';
import { NavigationContainer } from '@react-navigation/native';
import store from './src/redux/store';
import AppNavigation from './src/navigation/AppNavigation';
import { navigationRef, isReadyRef } from './src/navigation/ReduxNavigation';


import Styles from './src/theme/AppStyles';

const { width } = Dimensions.get('window');

EStyleSheet.build({ $rem: width / 375 });

const Root = () => (
  <View style={Styles.rootContainer}>
    <StatusBar
      translucent
      barStyle="dark-content"
      backgroundColor="transparent"
    />
    <Provider store={store}>
      <NavigationContainer
        ref={navigationRef}
        onReady={() => {
          isReadyRef.current = true;
        }}>
        <AppNavigation />
      </NavigationContainer>
    </Provider>
  </View>
);

export default Root;
