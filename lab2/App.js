import React from 'react';
import { StyleSheet, TouchableOpacity, Text, View, TextInput, Button } from 'react-native';

var input;

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value:"",
                 name:"",
                 error:""};
      
    this.onChange=this.onChange.bind(this);
    this.onPress = this.onPress.bind(this);
  }
    
  onChange(event) {
      input = event;
  }
  
  onPress() {
    this.validate();
    console.log("Pressed");
      
  }
    validate(){
        let name = "";
        let error = "";
        
        if (!input.match(/^[a-zA-Z\s]*$/)){
            error = "Input Letters Only.";                     
                         }
        else{
            name = "Hey, " + input + "!";
        }
        if(error){
            this.setState({error});
            return false;
        }
        else if (name){
            this.setState({name});
            return false;
        }
        return true;
        
    }
  render() {
    if(this.state.name){
    return (
      <View style={styles.container} flexDirection="column" alignItems='stretch'>
          <Text style={styles.defaultText}>{this.state.name}</Text>
        </View>
        );
    }
      else{
          return(
         <View style={styles.container} flexDirection="column" alignItems='stretch'>
          <View><TextInput style={styles.textInput} onChangeText={this.onChange} placeholder="Enter your name"></TextInput></View>
          <TouchableOpacity style={styles.buttonStyle} onPress={this.onPress}><Text style={styles.buttonText}>Submit</Text></TouchableOpacity>
          <Text style={styles.errorText}>{this.state.error}</Text>
        </View>
    );
      }
  }
}
    

const styles = StyleSheet.create({
  buttonText:
  {
    color:"white",
    fontSize:40
  },
  buttonStyle:
  {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:'blue',
    height:75,
    margin:30,
  },
  textInput:
  {
    margin:30,
    height:75,
    fontSize:20
  },
  defaultText:
  {
    fontSize:20,
      textAlign:"center"
  },
    errorText:
    {
        fontSize:20,
        color:"red",
        textAlign:"center"
    },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});