import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image} from 'react-native';
import { Button, Input } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={{fontSize:30, color:'#D75413'}}>{'CyberBaska'}</Text>
      <Image 
       style={styles.tinyLogo}
       source={require('./images/bola.png')}/>
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
       <Text style={{fontSize:30, color:'#D75413'}}>{'Cadastrar Jogo'}</Text>
       <Text style={{fontSize:30, color:'#D75413'}}>{'Visualizar Jogadores'}</Text>

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
