import React , {Component} from 'react' ;
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  Button
  
} from 'react-native' ;

export default class App extends Component{

  render(){
    return(
      <View style={styles.container}>
            <View style={styles.result}></View>
            <View style={styles.calculation}></View>
            <View style={styles.buttons}>
               <View style={styles.numbers}></View>
               <View style={styles.operations}></View>
            </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
container:{
  flex:1,
  backgroundColor:'red'
},
result:{
  flex:2,
  backgroundColor:'yellow'
},calculation:{
  flex:1,
  backgroundColor:'green'
},
buttons:{
  flexGrow:7,
  flexDirection:'row'
},
numbers:{
  flex:3,
  backgroundColor:'blue'
},
operations:{
  flex:1,
  backgroundColor:'white'
}
})