import React from 'react';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import HomeScreen from '../screens/HomeScreen';
import Detail from '../screens/Detail';

const HomeStack = createStackNavigator({
  Home: HomeScreen,
  Detail: Detail
});

export default HomeStack;

