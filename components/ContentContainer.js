import { StatusBar } from 'expo-status-bar';
import React from 'react';
import CustomImage from './InsideImages/CustomImage'
import { StyleSheet, Text, View ,Image} from 'react-native';

export default function Container() {
  return (
      <View style={{padding:10,marginTop:5}}>
            <View  style={styles.container}>
                <View style={styles.col2}>
                    <CustomImage imagesource={require("../essentials/Aline.PNG")} />
                    <Text style={styles.text}>A-Line</Text>
                    </View>


                <View style={styles.col2}>
                    <CustomImage imagesource={require("../essentials/rectangle_36.png")} />
                    <Text style={styles.text}>Anarkali</Text>
                    
                </View>
                
                
            </View>
   <View  style={styles.container}>
                <View style={styles.col2}>
                    <CustomImage imagesource={require("../essentials/Angarakha.PNG")} />
                    <Text style={styles.text}>Angarakha</Text>
                </View>


                <View style={styles.col2}>
                    <CustomImage imagesource={require("../essentials/LongStraight.PNG")} />
                    <Text style={styles.text}>Long Straight</Text>
                    
                </View>


    </View>
    <View  style={styles.container}>
                <View style={styles.col2}>
                    <CustomImage imagesource={require("../essentials/Overlay.PNG")} />
                    <Text style={styles.text}>Overlay</Text>
                </View>


                <View style={styles.col2}>
                    <CustomImage imagesource={require("../essentials/Flare.PNG")} />
                    <Text style={styles.text}>Flare</Text>
                    
                </View>


    </View>
</View>
  );
}

const styles = StyleSheet.create({
 container:{
    flex:1,
    flexDirection:"row",
    flexWrap:"wrap",
    padding:5,
    justifyContent:"space-evenly"

 },
 col1:{
     flex:1,
     padding:5
 },
 col2:{
     flex:1,
     padding:5,
     flexDirection:"column",
     justifyContent:"center",
     alignItems:"center"
    
    
 },

 
 contentBanner:{
     width:"100%",
     alignItems:"center",
     justifyContent:"center",
     padding:5
 },

 text:{
     fontStyle:"rubik-medium",
     fontSize:"12px",
     color:"#e53838",
     alignItems:"center"
 }

});
