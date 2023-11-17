import { Pressable, StyleSheet, Text, View,Image } from "react-native";
import React, { useEffect, useState } from "react";

var data = [];

var url = "https://655616db84b36e3a431eff1b.mockapi.io/products";

const App = () => {
  var [data, setData] = useState([]);

  var fc = () => {
    fetch(url)
      .then((response) => response.json())
      .then((json) => {
        data = json;
        setData(data);
      });
  };

  useEffect(fc, []);

  return (
    <View style={{ flex: 1 }}>
      <Pressable
        style={{ backgroundColor: "cyan", padding: 10, borderRadius: 10 }}
        onPress={() => {
          fetch(url, {
            method: "POST",
        
                body: JSON.stringify({
                  Name: "ABC",
           
            }),
            headers: {
              'Accept': 'application/json',
               'Content-type': "application/json; charset:UTF-8",
            },
          })
            .then((res) => {
              console.log(res.bodyUsed);
            })
            
        }}
      >
        <Text style={{ color: "black" }}>PUT</Text>
      </Pressable>
      {data.map((item) => {
        return (
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              borderRadius: 10,
              margin: 10,
              padding: 10,
              backgroundColor: "pink",
            }}
            key={item.id}
          >
            <Text>{item.Name}</Text>
            <Image source={{uri:item.image}}
      
      style={{width:100,height:100}}
      />
        {
          console.log(item.image)
      
        }
            <Pressable
              style={{ backgroundColor: "red", padding: 10, borderRadius: 10 }}
              onPress={() => {
                var link = url + "/" + item.id;
                fetch(link, {
                  method: "DELETE",
                }).then((result) => {
                  console.log(result);
                  if (result.ok) fc();
                });
              }}
            >
              <Text style={{ color: "white" }}>Delete</Text>
            </Pressable>
          </View>
        );
      })}
    </View>
  );
};

export default App;

const styles = StyleSheet.create({});
