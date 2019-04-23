import React from 'react';
import { createStackNavigator } from 'react-navigation';

import HomeScreen from './index';
import Settings from './setting';


const HomeStack = createStackNavigator({
  Home: HomeScreen,
  Settings: Settings
}, {initialRouteName: "Home"});

export default HomeStack;