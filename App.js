import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image} from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={{fontSize:30, color:'#D75413'}}>{'CyberBaska'}{'\n'}{'\n'} {'O INÍCIO!!!!!'}</Text>
      <Image 
       style={styles.tinyLogo}
       source={require('./images/bola.png')}/>
      <StatusBar style="auto" />
    </View>
  );
}

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
});