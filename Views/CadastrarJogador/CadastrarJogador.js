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

const CadastrarJogador = () => {
  return (<View style={styles.container}>
    
      <StatusBar barStyle="dark-content" />
      
      <Text style={{fontSize:30, color:'#D75413'}}>{'Cadastrar Jogadores'}</Text>
       <Input
       label='Nome do Jogador'
  placeholder='Nome do Jogador'
  leftIcon={{ type: 'font-awesome', name: 'chevron-left' }}
  
/>
<Input
       label='Altura'
  placeholder='Altura'
  leftIcon={{ type: 'font-awesome', name: 'chevron-left' }}
  
/>
<Input
       label='Peso'
  placeholder='Peso'
  leftIcon={{ type: 'font-awesome', name: 'chevron-left' }}
  
/>

       <Button
  title="Cadastrar"
/>
      </View>
  );
};

export default CadastrarJogador;