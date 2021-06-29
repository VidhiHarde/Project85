import * as React from 'react';
import LoginScreen from './screens/LoginScreen';
import LoadingScreen from './screens/LoadingScreen';
import DashboardScreen from './screens/Dashboard';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { View } from 'react-native';
import * as firebase from 'firebase';
import { firebaseConfig } from './Config';
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
} else {
  firebase.app();
}
export default class App extends React.Component {
  render() {
    return (
      <View>
        <AppContainer />
      </View>
    );
  }
}

var AppNavigator = createSwitchNavigator({
  LoadingScreen: LoadingScreen,
  LoginScreen: LoginScreen,
  DashboardScreen: DashboardScreen,
});

const AppContainer = createAppContainer(AppNavigator);
