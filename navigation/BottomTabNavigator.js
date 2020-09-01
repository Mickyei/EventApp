import React from 'react';
import {View,Text} from 'react-native';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import HomeScreen from '../screens/HomeScreen';
import MyEvents from '../screens/MyEvents';

const BottomTabNavigator = createBottomTabNavigator({
  One: HomeScreen,
  Two: MyEvents
}, {
    tabBarOptions: {
        showIcon: true,
        activeTintColor: '#e91e63'

    }
});

export default BottomTabNavigator;