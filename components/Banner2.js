import { StatusBar } from 'expo-status-bar';
import TextImages from './InsideImages/TextImages'
import React from 'react';

import { StyleSheet, Text, View ,ScrollView,Image, ImageBackground,Button} from 'react-native';

export default function Banner2() {
  return (
    <View>
        <ImageBackground source={require('../essentials/group_3974.png') } style={styles.banner} >
            <Text style={styles.text}>Trending Products</Text>
            <View style={styles.button}>
                <Text style={styles.text1}>Shop Now</Text>
            </View>
            <Text style={styles.text3}>Upto 60% off</Text>
        </ImageBackground>

        
    </View>
  );
}

const styles = StyleSheet.create({
    button:{
        marginTop:5,
        marginLeft:20,
        display:"flex",
        alignItems:"center",
        height:24,
        width:108,
        backgroundColor:"#ff902b"
    },
    text:{
        color:"#fff",
        fontSize:12,
        lineHeight:14,
        marginLeft:20
    },
    text3:{
        fontStyle:"italic",
        fontWeight:10,
        color:"#fff",
        fontSize:32
    },
    text1:{
        color:"#fff",
        fontSize:12,
        lineHeight:14,
        marginTop:3,
    },
  banner: {
      height:"180px",
      width:"100%",
      marginTop:15,
      marginBottom:10,
      padding:5,
    alignItems:"center",
    justifyContent:"center"
   
  },
});
