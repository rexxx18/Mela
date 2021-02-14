import { StatusBar } from 'expo-status-bar';
import TextImages from './InsideImages/TextImages'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import Dealimages from "./InsideImages/Dealimages"
import React from 'react';

import { StyleSheet, Text, View ,ScrollView,Image, ImageBackground} from 'react-native';

export default function Deals() {
  return (
    <View style={styles.main}>
      <Dealimages start="Under" middle="Rs 299" end="off" />
      <Dealimages  start="Under" middle="Rs 399" end="off" />
      <Dealimages   start="Under" middle="Rs 499" end="off"/>
    </View>
  );
}

const styles = StyleSheet.create({
    main:{
        marginTop:30,
        flex:1,
        flexDirection:"row",
        justifyContent:"space-evenly"
    },
  banner: {
     
   
  },
});
