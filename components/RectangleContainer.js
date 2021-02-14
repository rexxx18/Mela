import { StatusBar } from 'expo-status-bar';
import React from 'react';
import CustomImage from './InsideImages/CustomImage'
import { StyleSheet, Text, View ,Image} from 'react-native';
import Rectangle from './InsideImages/Rectangle';

export default function RectangleContainer() {
  return (
    <View>
     <View style={styles.head}>
       <Rectangle line={"7-Seasons"} />
       <Rectangle line={"Ajmera Fashion"} />
       <Rectangle line={"Kinjovilla Fashion"}/>
     </View>
     <View style={styles.head}>
       <Rectangle line={"Meet-Fashion"}/>
       <Rectangle line={"radhika-Fashion"}/>
       <Rectangle line={"Mannat-Fashion"}/>
     </View>
     <View style={styles.head}>
       <Rectangle line={"D to D LifeStyle"} />
       <Rectangle line={"Ad Collection"}/>
       <Rectangle line={"Mela"}/>
     </View>
    </View>
  );
}

const styles = StyleSheet.create({

  head:{
    marginTop:20,
    flex:1,
    flexDirection:"row",
    justifyContent:"space-evenly",
    alignItems:"center"
  },
 

});
