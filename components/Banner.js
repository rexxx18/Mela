import { StatusBar } from 'expo-status-bar';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import TextImages from './InsideImages/TextImages';

import React from 'react';

import { StyleSheet, Text, View ,ScrollView,Image, ImageBackground} from 'react-native';

export default function Banner () {
  return (
    <View>
        <ImageBackground source={require('../essentials/group_3978.jpg') } style={styles.banner} >
            <Text style={styles.text1}>Upto</Text>
            <Text style={styles.text2}>25% OFF</Text>
        </ImageBackground>

        
    </View>
  );
}

const styles = StyleSheet.create({
  text1:{
    fontStyle:"italic",
    fontWeight:10,
    fontSize:32,
    color:"#fff",
    marginLeft:198,
    },
  text2:{
    fontStyle:"italic",
    fontSize:40,
    color:"#fff",
    marginLeft:198,
  },
  banner: {
      height:280,
      width:"100%",
      padding:0,
    alignItems:"center",
    justifyContent:"center"
   
  },
});
