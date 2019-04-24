import React , {Component} from 'react' ;
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  Button
  
} from 'react-native' ;

export default class App extends Component{

  state ={
    value:"username",
    value2: "password"
  }

  handleChangeText(newvalue , passvalue){
    this.setState({
      value :newvalue,
      value:passvalue
      
    });
  }
  render(){
    return(
      <View styles={styles.main}>
      <View >
      <Text>Username </Text>
      <TextInput onChange={this.handleChangeText.bind(this)} defaultValue={this.state.value}></TextInput>
      </View>
      <View >
      <Text>Password </Text>
      <TextInput onChange={this.handleChangeText.bind(this)} defaultValue={this.state.value2}></TextInput>
      
      </View>
      <Button title={"hello"}></Button>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  main:{
    flex:1,
    backgroundColor: 'yellow',
    justifyContent:'center'
  },
  text:{
    fontSize: 20
  },
  inner11:{
    flex:1,
    flexDirection:'row',
    backgroundColor: 'green'
  },
  inner12:{
    flex:2,
    flexDirection:'row',
    backgroundColor: 'yellow'
  },inner121:{
    flex:2,
    flexDirection:'column',
    backgroundColor: 'orange'
  },inner122:{
    flex:3,
    flexDirection:'column',
    backgroundColor: 'black'
  }
})