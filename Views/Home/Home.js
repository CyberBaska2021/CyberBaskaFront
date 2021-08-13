import React, { Fragment } from "react";

import { StatusBar } from 'expo-status-bar';
import AppLoading from 'expo-app-loading';
import { SafeAreaView,StyleSheet, Text, View, Image} from 'react-native';
import { Button, Input } from 'react-native-elements';
import {
  useFonts,
  RopaSans_400Regular,
  RopaSans_400Regular_Italic,
} from '@expo-google-fonts/ropa-sans'

const styles = StyleSheet.create({
  container: {
    
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
  tinyLogo: {
    width: 300,
    height: 300,
  }
})



const Home = ({navigation}) => {
  let [fontsLoaded] = useFonts({
    RopaSans_400Regular,
    RopaSans_400Regular_Italic,
  });

  if (!fontsLoaded){

  return <AppLoading />;
}
else{
  
  return (
  <View style={styles.container}>
    <Text style={{fontSize:30, color:'#D75413', fontFamily: 'RopaSans_400Regular'}}>{'CyberBaska'}</Text>
    <Image 
     style={styles.tinyLogo}
     source={require('./images/bola.png')}/>
     
     
     <Button
title="Novo Jogo"  buttonStyle={{backgroundColor:'orange'}}  onPress={() => navigation.navigate("Escolher Times")}
/>
     

    <StatusBar style="auto" />
  </View>

)


}


};

export default Home;