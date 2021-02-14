import { StatusBar } from 'expo-status-bar';
import React from 'react';

import { StyleSheet, Text, View ,ScrollView,Image} from 'react-native';

export default function Rectangle(props) {
  return (
        <View style={styles.main}>
      <Image  source={require("../../essentials/Capture.PNG")} style={styles.rectangle} />
      <Text style={styles.line}>{props.line}</Text>
      </View>
    
  );
}

const styles = StyleSheet.create({
    main:{
        textAlign:"center"
    },
 rectangle:{
     marginTop:10,
     padding:10,
     height:98,
     width:98,
},line:{
    fontStyle:"rubik_medium",
    fontSize:"12px",
    lineHeight:"14px",
    fontColor:"#778299",

}
});
