import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View ,Image} from 'react-native';

export default function Header() {
  return (
   <View style={styles.header}>
       <Text style={styles.text}>KURTI STORE</Text>
   </View>
  );
}

const styles = StyleSheet.create({
  text:{
    fontStyle:"rubik-medium",
    fontSize:20,
    alignItems:"flex-start",
    color:"#ffff"

  },
  header:{
        height:90,
        marginTop:0,
        backgroundColor:'#4c102b',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',
        padding:0,
        borderBottomWidth:4,
        borderBottomColor:"#ccc",
    }
  ,
  
  logo:{
      fontSize:20,
      marginLeft:10,
      fontStyle:'italic',
      color:"#292929"
  }
});
