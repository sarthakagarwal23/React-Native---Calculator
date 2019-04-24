import React , {Component} from 'react' ;
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  Button,
  TouchableOpacity
  
} from 'react-native' ;


export default class App extends Component{


   constructor(props){
     super(props)
     this.state = {
       resultText :""
     }
   }


  calculateResult(){
  const text = this.state.resultText
  }

  buttonPressed(text){
   
    if(text == '='){
    return this.calculateResult()
  }

  this.setState({
  resultText : this.state.resultText + text
  });
  }

  operate(operations){
  switch(operations) {
     case 'D':
     const text = this.state.resultText.split('')
     text.pop()
     this.setState({
     resultText : text.join('')
     });

     case '+':
     case '-':
     case '*':
     case '/':
  }
  }


  render(){
    let rows = []
    for(let i = 0; i < 4; i++){
      let row = []
      let nums = [[1,2,3],[4,5,6],[7,8,9],['.',0,'=']]
      for(let j = 0 ; j < 3  ; j++){
        row.push(
          <TouchableOpacity style={styles.btn}  onPress={() => this.buttonPressed(nums[i][j])}>
              <Text style={styles.btnText}>{nums[i][j]}</Text>
          </TouchableOpacity>
        )
      }
      rows.push(
        <View style={styles.row}>{row}</View>
      )
    }
    
    let ops = []
    let operations = ['D','+','-','/','*']
    for(let i = 0; i < 5 ; i++){
      ops.push(
        <TouchableOpacity style={styles.btn} onPress={() => this.operate(operations[i])}>
        <Text style={styles.btnText}>{operations[i]}</Text>
        </TouchableOpacity>
      )
    }

    return(
      <View style={styles.container}>
            <View style={styles.result}>
            <Text style={styles.resultText}>{this.state.resultText}</Text>
            </View>
            <View style={styles.calculation}>
            <Text style={styles.calculationText}>232</Text>
            </View>
            <View style={styles.buttons}>
               <View style={styles.numbers}>
                 {rows}
                </View>
               <View style={styles.operations}>
                 {ops}
               </View>
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
btnText:{
 fontSize:36,
 fontWeight:'bold'
},
row:{
  flex:1,
  flexDirection:'row',
  alignItems:'center',
  justifyContent:'space-around'
},
btn:{
  flex:1,
  alignItems:'center',
  justifyContent:'center'
},
resultText:{
fontSize: 40,
color:'black'
},
calculationText:{
  fontSize: 28,
  color:'black'
},
result:{
  flex:2,
  backgroundColor:'yellow',
  alignItems: 'flex-end',
  justifyContent:'center',
  paddingRight: 20
},
calculation:{
  flex:1,
  backgroundColor:'green',
  alignItems: 'flex-end',
  justifyContent:'center',
  paddingRight: 20
},
buttons:{
  flexGrow:7,
  flexDirection:'row'
},
numbers:{
  flex:3,
  backgroundColor:'yellow'
},
operations:{
  flex:1,
  backgroundColor:'white',
  flexDirection:'column',
  alignItems:'center',
  justifyContent:'space-around'
}
})