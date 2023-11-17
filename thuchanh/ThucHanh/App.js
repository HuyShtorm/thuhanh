import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { StyleSheet, Text, View,Image } from 'react-native';
var uri= "https://655616db84b36e3a431eff1b.mockapi.io/products"

export default function App() {
  var [data, setData]= useState([]);
  useEffect(()=>{
    fetch(uri)
          .then((response) => response.json())
          .then((json) => {
            console.log(json);
//lọc ra theo tên
            // var newarr =json.filter((item)=>{
            //   return item.Name =='Name 1';
            // })
          setData(json);
          });},[]);
  return (
    <View style={styles.container}>
{
  data.map((item)=>{
    return (
      <View key={item.id}>
        <Text>
          {item.Name}
        </Text>
        <Image source={{uri:item.image}}
      
      style={{width:100,height:100}}
      />
        {
          console.log(item.image)
      
        }
        </View>
    )
  })
}
    </View>
  );}


      



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
