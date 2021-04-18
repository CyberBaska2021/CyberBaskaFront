import React, { Fragment } from "react";

import { StatusBar } from 'expo-status-bar';

import { SafeAreaView,StyleSheet, Text, View, Image} from 'react-native';
import { Button, Input } from 'react-native-elements';


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
  return (
    <View style={styles.container}>
      <Text style={{fontSize:30, color:'#D75413'}}>{'CyberBaska'}</Text>
      <Image 
       style={styles.tinyLogo}
       source={require('./images/bola.png')}/>
       <Text style={{fontSize:30, color:'#D75413'}}>{'Cadastrar Jogadores'}</Text>
       
       <Button
  title="Cadastrar Jogador" onPress={() => navigation.navigate("Cadastrar Jogador")}
/>
       <Text style={{fontSize:30, color:'#D75413'}}>{'Cadastrar Jogo'}</Text>
       <Text style={{fontSize:30, color:'#D75413'}}>{'Visualizar Jogadores'}</Text>

      <StatusBar style="auto" />
    </View>

  );
};

export default Home;