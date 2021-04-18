import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import { SafeAreaView,StyleSheet, Text, View, Image} from 'react-native';
import { Button, Input } from 'react-native-elements';
import Home from "./Views/Home/Home";
import { StatusBar } from 'expo-status-bar';
import CadastrarJogador from "./Views/CadastrarJogador/CadastrarJogador";



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

const Stack = createStackNavigator();

function App({ navigation }) {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Cadastrar Jogador" component={CadastrarJogador} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
