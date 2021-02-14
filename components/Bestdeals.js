import { StatusBar } from 'expo-status-bar';
import TextImages from './InsideImages/TextImages'
import React from 'react';

import { StyleSheet, Text, View ,ScrollView,Image, ImageBackground} from 'react-native';
import ImageandText from './ImageandText';

export default function Bestdeals() {
  return (
      
    <View style={styles.main}>
            <View style={styles.container}>
                <View style={styles.image}>
                    <Image source={require("../essentials/Capture1.PNG")} style={styles.image} />
                    <Text style={styles.big}>{"\u20A8"}{399} <Text style={styles.small}>{"\u20A8"}{"299"}</Text> </Text>
                    <Text style={styles.big}>{"Warli Hand-Painted LivingRoom and Home..."}</Text>
                </View>
                <View style={styles.image}>
                    <Image source={require("../essentials/Capture4.PNG")} style={styles.image} />
                    <Text style={styles.big}>{"\u20A8"}{399} <Text style={styles.small}>{"\u20A8"}{"299"}</Text> </Text>
                    <Text style={styles.big}>{"Decorative Designer Table Lamp"}</Text>
            </View>
                
            </View>
            

            <View style={styles.container}>
                <View style={styles.image}>
                    <Image source={require("../essentials/Capture2.PNG")} style={styles.image} />
                    <Text style={styles.big}>{"\u20A8"}{399} <Text style={styles.small}>{"\u20A8"}{"299"}</Text> </Text>
                    <Text style={styles.big}>{"LuvLap Foldable Wooden Chair"}</Text>
            </View>
            <View style={styles.image}>
                    <Image source={require("../essentials/Capture3.PNG")} style={styles.image} />
                    <Text style={styles.big}>{"\u20A8"}{399} <Text style={styles.small}>{"\u20A8"}{"299"}</Text> </Text>
                    <Text style={styles.big}>{"Furniture Cafe U Wall Shelf/Racks and Shelves"}</Text>
            </View>
                
            </View>
            
    </View>
  );
}

const styles = StyleSheet.create({
    container:{
        marginBottom:70,
        display:"flex",
        flexDirection:"row",
        justifyContent:"space-evenly",
        flexWrap:"wrap"
    },
    image:{
        height:208,
        width:168,
    },
   
   
});
