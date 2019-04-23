import React from 'react';
import {
	StyleSheet,
	View,
	StatusBar,
	ActivityIndicator,
	ScrollView,
	AsyncStorage
} from 'react-native';
import { createStackNavigator } from 'react-navigation';
import { LinearGradient } from 'expo';
import uuid from 'uuid/v1';

import { primaryGradientArray } from './Custom/Colors';
import {index} from './index';


export default class Settings extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
          text: '',
      };
  }
  static navigationOptions = {
    title: "Settings"
  };

  render() {

    return (
       
      );

   }
}