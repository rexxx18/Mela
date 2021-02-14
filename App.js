import { StatusBar } from 'expo-status-bar';
import React from 'react';
import Header from './components/Header'
import Banner from './components/Banner'
import Banner2 from './components/Banner2'
import TextHeader from "./components/TextHeader"
import ContentContainer from './components/ContentContainer'
import { StyleSheet, Text, View ,ScrollView,Image} from 'react-native';
import RectangleContainer from './components/RectangleContainer';
import Deals from './components/Deals';
import Bestdeals from './components/Bestdeals';


export default function App() {
  return (
    <ScrollView  contentContainerStyle={styles.container}>
      <View style={styles.top}>
     <Header />
     <Banner />
     </View>
     <TextHeader header={"Shop By Pattern"} imagesource={require("./essentials/fill_363.png")}/>
    
     <ContentContainer />
     <Banner2 />
     <TextHeader header={"Top Brands"} imagesource={require("./essentials/fill_363.png")} />
    <RectangleContainer />
    <TextHeader header={"KnockOut Deals"} imagesource={require("./essentials/fill_363.png")}/>
    <Deals />
    <TextHeader header={"Beauty Bonaza"} imagesource={require("./essentials/fill_363.png")} />
    <Bestdeals />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  top:{
    backgroundColor:"#4c102b"
  },
  container: {
    
    boxSizing:"borderbox",
    backgroundColor: '#fff',
    
  },
  line:{
    height:"4px",
    width:"128px",
   
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
  }
});
