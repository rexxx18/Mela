
import { StatusBar } from 'expo-status-bar';
import React from 'react';

import { StyleSheet, Text, View ,ScrollView,Image} from 'react-native';

export default function TextHeader(props) {

    let header=props.header?<Text style={styles.text}>{props.header}</Text>:null;
    let source=props.imagesource?<Image style={styles.image} source={props.imagesource}/>:null;
  return (
    
        <View style={styles.main}>
            {header}
            {source}
        </View>
    
  );
}

const styles = StyleSheet.create({
    main:{
        marginTop:10,
        marginBottom:10,
        marginLeft:20,
    },
    text:{
        fontStyle:"rubik_medium",
        fontSize:"18px",
        lineHeight:22,
        textAlign:"left",
        color:"#e53838",
        letterSpacing:0,
        top:"349px",
        right:"15px", 
    },
    image:{
        height:"4px",
        width:"128px",
       
      },
});
