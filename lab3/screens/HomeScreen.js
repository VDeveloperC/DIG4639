import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  FlatList,
  TouchableOpacity,
  View,
  ImageBackground,
} from 'react-native';
import { WebBrowser } from 'expo';

import { MonoText } from '../components/StyledText';

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };
  _gotoScreen = (key) => {
    console.log("Going to " + key);
  }
  render() {
    const {navigate} = this.props.navigation;
    return (
      <View style={styles.container}>
        <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
        <ImageBackground source={require('../assets/images/background.jpg')} style={{width:'100%',height:'100%'}}>
          <View style={styles.getStartedContainer}>
            <Text style={styles.getStartedText}>Pet Palooza</Text>
            <FlatList
             data={[{key: 'cat1',image: require('../assets/images/kitty.jpg'),
                    title:'Kitty in a Wig!',
                    author:"Mrs.Whiskers"}, 
                   {key: 'cat2',image: require('../assets/images/funny.jpg'),
                   title:'Cool Cat',
                   author:'Mr.Meow'},
                   {key: 'cat3',image: require('../assets/images/leia.png'),
                   title:'Kitty Leia',
                   author:'Space Meow'},
                   {key:'cat4',image: require('../assets/images/dog.jpg'),
                   title:'Roar Dog',
                   author:'Lion Doggy'}]}
             keyExtractor={this._keyExtractor}
               renderItem={({item}) => <TouchableOpacity onPress={() => navigate("Detail",{ CatName:item.key, CatImg:item.image, CatTitle:item.title, CatAuthor:item.author })}>
                <Image source={item.image} style={{width:200,height:200}} />
                <Text style={styles.imageTitle}>{item.title}</Text>
                 <Text style={styles.imageAuthor}>{item.author}</Text>
              </TouchableOpacity>}
            />
          </View>
         </ImageBackground>
        </ScrollView>
      </View>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  developmentModeText: {
    marginBottom: 20,
    color: 'rgba(0,0,0,0.4)',
    fontSize: 14,
    lineHeight: 19,
    textAlign: 'center',
  },
  contentContainer: {
    paddingTop: 30,
  },
  welcomeContainer: {
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,
  },
  welcomeImage: {
    width: 100,
    height: 80,
    resizeMode: 'contain',
    marginTop: 3,
    marginLeft: -10,
  },
  getStartedContainer: {
    alignItems: 'center',
    marginHorizontal: 50,
  },
  homeScreenFilename: {
    marginVertical: 7,
  },
  codeHighlightText: {
    color: 'rgba(96,100,109, 0.8)',
  },
  codeHighlightContainer: {
    backgroundColor: 'rgba(0,0,0,0.05)',
    borderRadius: 3,
    paddingHorizontal: 4,
  },
  getStartedText: {
    fontSize: 17,
    color: 'white',
    lineHeight: 24,
    textAlign: 'center',
      fontWeight:'bold',
  },
    imageTitle:{
    fontSize: 17,
    color: 'white',
    lineHeight: 24,
    textAlign: 'center',
      fontWeight:'bold',
  },
  imageAuthor:{
    fontSize: 17,
    color: 'white',
    lineHeight: 24,
    textAlign: 'center',
      fontWeight:'bold',
  },
  tabBarInfoContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: { height: -3 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
      },
      android: {
        elevation: 20,
      },
    }),
    alignItems: 'center',
    backgroundColor: '#fbfbfb',
    paddingVertical: 20,
  },
  tabBarInfoText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    textAlign: 'center',
  },
  navigationFilename: {
    marginTop: 5,
  },
  helpContainer: {
    marginTop: 15,
    alignItems: 'center',
  },
  helpLink: {
    paddingVertical: 15,
  },
  helpLinkText: {
    fontSize: 14,
    color: '#2e78b7',
  },
});
