import React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feed from '../screens/Feed';
import CreatePost from '../screens/CreatePost';
import { StyleSheet } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
const Tab = createMaterialBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      labled={false}
      barStyle={styles.bottomTabStyle}
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === 'Feed') {
            iconName = focused ? 'globe' : 'globe-outline';
          } else if (route.name === 'CreatePost') {
            iconName = focused ? 'create' : 'create-outline';
          }
          return (
            <Ionicons
              style={styles.icon}
              name={iconName}
              size={RFValue(25)}
              color={color}
            />
          );
        },
      })}
      activeColor={'#eb3948'}
      inactiveColor={'gray'}>
      <Tab.Screen name="Feed" component={Feed} />
      <Tab.Screen name="CreatePost" component={CreatePost} />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  bottomTabStyle: {
    backgroundColor: '#2a2a2a',
    height: '8%',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    overFlow: 'hidden',
    position: 'absolute',
  },
  icon: {
    width: RFValue(30),
    height: RFValue(30),
  },
});

export default BottomTabNavigator;
