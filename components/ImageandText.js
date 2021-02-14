import { StatusBar } from 'expo-status-bar';
import TextImages from './InsideImages/TextImages'
import React from 'react';

import { StyleSheet, Text, View ,ScrollView,Image, ImageBackground} from 'react-native';

export default function ImageandText(props) {
    let previousprice=props.prev?<Text style={styles.small}>{"\u20A8"}{props.prev}</Text>:null
    let discountedprice=props.now?<Text style={styles.big}>{"\u20A8"}{props.now}{" "}{previousprice}</Text>:null
    let total=props.name?<Text style={styles.big}>{props.name}</Text>:null
    let image=props.imagesource?<Image source={props.imagesource} style={styles.image} />:null

  return (
    <View>
        
     {image}
     {discountedprice}
     {total}
    </View>
  );
}

const styles = StyleSheet.create({
 
  image:{
    height:208,
    width:168,
},
big:{
    fontStyle:"rubik_medium",
    fontSize:18,
    fontColor:"#040e35",
    lineHeight:22
},
small:{
    fontStyle:"rubik_regular",
    fontSize:12,
    fontColor:"#b5c086",
    lineHeight:14
}
});
