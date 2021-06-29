import * as React from 'react';
import TabNavigator from './TabNavigator';
import PostsScreen from '../screens/PostsScreen';
import { createStackNavigator } from '@react-navigation/stack';
const Stack = createStackNavigator();
const StackNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Home" component={TabNavigator} />
      <Stack.Navigator name="PostsScreen" component={PostsScreen} />
    </Stack.Navigator>
  );
};
export default StackNavigator;
