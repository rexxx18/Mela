import { StatusBar } from 'expo-status-bar';
import React from 'react';

import { StyleSheet, Text, View ,ScrollView,Image} from 'react-native';

export default function TextImages(props) {

    let header=props.header?<Text style={styles.header}>{props.header}</Text>:null;
    let paragraph=props.paragraph?<Text style={styles.paragraph}>{props.paragraph}</Text>:null;
  return (
    
        <View>
            {header}
            {paragraph}
        </View>
    
  );
}

const styles = StyleSheet.create({
 header:{
    shadowColor:"#000",
    shadowOffset:{width:0,height:2},
    shadowOpacity:0.8,
    shadowRadius:3,
    elevation:1,

    alignSelf:"center",
    fontSize:28,
    color:"#292929",
    padding:10,
    backgroundColor:'rgba(255,255,255,0.6)',
    fontWeight:"bold"

 }
 ,
 paragraph:{
    shadowColor:"#000",
    shadowOffset:{width:0,height:2},
    shadowOpacity:0.8,
    shadowRadius:3,
    elevation:1,


    alignSelf:"center",
    fontSize:16,
    fontStyle:"italic",
    color:"#292929",
    padding:8,
    backgroundColor:'rgba(255,255,255,0.6)',
    marginTop:8
 }
});
