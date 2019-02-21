import React from 'react';
import {View, Text, Image, StyleSheet, ImageBackground } from 'react-native';
import { createStackNavigator } from 'react-navigation';


export default class Detail extends React.Component {
  static navigationOptions = {
    title: 'Cat Details',
  };

  render() {
      const {navigate} = this.props.navigation;
    const passedImage = this.props.navigation.getParam("CatImg", "defaultValue");
    const passedTitle = this.props.navigation.getParam("CatTitle", "defaultValue");
    const passedAuthor = this.props.navigation.getParam("CatAuthor", "defaultValue");
    return (
    <ImageBackground source={require('../assets/images/background.jpg')} style={{width: '100%', height: '100%'}}>
        <View style={styles.container}>
          <Image source={passedImage} style={styles.imgcat} resizeMode="contain"/>
          <Text style={styles.imageTitle}>{passedTitle}</Text>
          <Text style={styles.imageAuthor}>{passedAuthor}</Text>
          
        </View>
      </ImageBackground>

    );
   }
  }

const styles = StyleSheet.create({
    imgcat:{
        width:"100%",
        height:"80%",
    },
  imageTitle: {
    fontSize: 20,
    color: 'white',
    lineHeight: 50,
    textAlign: 'center',
      fontWeight:'bold',
  },
  imageAuthor: {
   fontSize: 25,
    color: 'white',
    lineHeight: 50,
    textAlign: 'center',
      fontWeight:'bold',
  },
  container: {
    flex: 1,
    alignItems:'center',
   
  },
});