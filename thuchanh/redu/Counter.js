import { View, Text ,Pressable} from 'react-native'
import React from 'react'
import { connect } from 'react-redux';

const Counter = ({count,increment,decrement}) => {
  return (
    <View>
      <Text>Counter :{count}</Text>
      <Pressable style={{width:100,height:100,backgroundColor:'pink'}} onPress={increment}>
    <Text>Click</Text>


</Pressable> 
<Pressable style={{width:100,height:100,backgroundColor:'pink'}} onPress={decrement}>
    <Text>Click</Text>
    </Pressable>
   </View>
  )
}

var mapStateToProps=(state)=>({
    count : state.count
})
var mapDispatchToProps =(dispatch)=>({
    increment:()=>dispatch({type:'increment'}),
    decrement:()=>dispatch({type:'decrement'})
})
export default connect(mapStateToProps, mapDispatchToProps)(Counter);
