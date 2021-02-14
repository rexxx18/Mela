import { StatusBar } from 'expo-status-bar';

import React from 'react';

import { StyleSheet, Text, View ,ScrollView,Image, ImageBackground} from 'react-native';

export default function Dealimages(props) {
    let start=props.start?<Text style={styles.start}>{props.start}</Text>:null;
    let middle=props.middle?<Text style={styles.middle}>{props.middle}</Text>:null;
    let end=props.end?<Text style={styles.end}>{props.end}</Text>:null;
  return (
    <View>
        <ImageBackground source={require("../../essentials/group_3977.png")} style={styles.image}>
            {start}
            {middle}
            {end}
        </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
    start:{

        fontStyle:"italic",
        fontWeight:10,
        fontSize:16,
        color:"#99ffffff"
    },
    middle:{
        fontStyle:"italic",
        fontWeight:"bold",
        fontSize:22,
        color:"#ffff"
    },
    end:{
        fontStyle:"italic",
        fontWeight:10,
        letterSpacing:0.72,
        fontSize:14,
        color:"#ffff"
    },
    image:{
        height:193,
        width:104,
        justifyContent:"center",
        alignItems:"center"

    }
});
