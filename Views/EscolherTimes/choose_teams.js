import React, { Component,useState  }  from "react";
import {
  useFonts,
  RopaSans_400Regular,
  RopaSans_400Regular_Italic,
} from '@expo-google-fonts/ropa-sans'
import { StatusBar } from 'expo-status-bar';
import AppLoading from 'expo-app-loading';
import { SafeAreaView,StyleSheet, Text, View, Image} from 'react-native';
import { ThemeProvider, Button, Input, Card,Icon, ListItem, Avatar  } from 'react-native-elements';
import * as Font from 'expo-font';



const styles = StyleSheet.create({
  container: {
    
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    
  },
  


  card_team_a:{
    display: "flex",
        flexDirection: "column", 
        backgroundColor: "orange",
        position: 'absolute',
top:'10%',

padding:20
},
card_team_b:{

  display: "flex",
      flexDirection: "column", 
      backgroundColor: "orange",
      position: 'absolute',
top:'40%',

padding:20

},

card_start:{

  display: "flex",
      flexDirection: "column", 
      backgroundColor: "orange",
      position: 'absolute',
top:'80%',

padding:20

}
})

let customFonts = { 
  
  'Sans': require('C:\Users\rfs\Downloads\CyberBaska\CyberBaskaFront\assets\fonts\RopaSans-Regular.ttf')
  }


const teams = [
  {
    name: 'JV Rockets',
    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
    
  },
  {
    name: 'Cougars',
    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
  
  }
  
]



class EscolherTimes extends Component {

  
    
    state = {
      ativos: ['AG', 'CCB', 'CCI', 'CDA/WA', 'CDCA', 'CPR', 'CRA', 'CRI', 'DEB', 'LF', 'NP'],
      TEAM_A: 'Aguardando Escolha do Time... ',
      TEAM_B: 'Aguardando Escolha do Time... ',
      fontsLoaded: false,
      isChooseTeamA: false,
      isChooseTeamB: false,
      isNotChooseTeamA:true,
      isNotChooseTeamB:true,
      isNotStartGameButton:true
  }

  async _loadFontsAsync() {
    await Font.loadAsync(customFonts);
    this.setState({ fontsLoaded: true });
  }

  componentDidMount() {
    this._loadFontsAsync();
  }
  
  escolherTimeA = () => {
    this.setState({isChooseTeamA:true})
  }

  escolherTimeB = () => {
    this.setState({isChooseTeamB:true})
  }

  TimeAEscolhido = (time) => {
    this.setState({isChooseTeamA:false,isNotChooseTeamB:false,TEAM_A:time })
  }

  TimeBEscolhido = (time) => {
    this.setState({isChooseTeamB:false,isNotStartGameButton:false,TEAM_B:time })
  }

  obterLista = () => {
    axios.get('https://apivxsiv.vortx.com.br/api/devxdadostabela')
      .then(response => {
        this.setState({
          data: response.data,
        })

      })
      .catch(console.log)
  }

  

  cadastrar = () => {
    axios.post('https://apivxsiv.vortx.com.br/api/devxcadastrar', this.state)
      .then(response => {

        toast.success("Operação cadastrada com sucesso! 🔥🚀", {
          position: "bottom-center",
          autoClose: 4000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,

        })
      }
      )

      .catch(console.log); this.setState({
        verdadeirooufalso: false
      })
  }

  tela=()=>{


    
  }
  
  render() {

    if (this.state.fontsLoaded) {
    

    if (this.state.isChooseTeamA){

      return (<View >
        {
          teams.map((l, i) => (
            
            <ListItem button key={i} bottomDivider onPress={() => this.TimeAEscolhido(l.name)}>
              <Avatar source={{uri: l.avatar_url}} />
              <ListItem.Content>
                <ListItem.Title>{l.name}</ListItem.Title>
                <ListItem.Subtitle>{l.subtitle}</ListItem.Subtitle>
              </ListItem.Content>
            </ListItem>
          ))
        }
      </View>)
    }

    if (this.state.isChooseTeamB){

      return (<View >
        {
          teams.map((l, i) => (
            
            <ListItem button key={i} bottomDivider onPress={() => this.TimeBEscolhido(l.name)}>
              <Avatar source={{uri: l.avatar_url}} />
              <ListItem.Content>
                <ListItem.Title>{l.name}</ListItem.Title>
                <ListItem.Subtitle>{l.subtitle}</ListItem.Subtitle>
              </ListItem.Content>
            </ListItem>
          ))
        }
      </View>)
    }

    return (

        <View style={styles.container}>
    
    <Card containerStyle= {styles.card_team_a}>
  <Card.Title style={{fontFamily: 'RopaSans_400Regular'}}>Local</Card.Title>
  <Card.Divider/>
  
    <Text style={{marginBottom: 10}}>
      {this.state.TEAM_A}
    </Text>
    <Button
     
      buttonStyle={{width:250,borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0, backgroundColor:'black'}}
      title='ESCOLHER TIME LOCAL'
      onPress={this.escolherTimeA} />
  
</Card>

<Card containerStyle= {styles.card_team_b}>
  <Card.Title>Visitante</Card.Title>
  <Card.Divider/>
  
    <Text style={{marginBottom: 10}}>
      {this.state.TEAM_B}
    </Text>
    <Button
     disabled={this.state.isNotChooseTeamB}
      buttonStyle={{width:250,borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0, backgroundColor:"black"}}
      title='ESCOLHER TIME VISITANTE'
      onPress={this.escolherTimeB} />
  
</Card>

<Card containerStyle= {styles.card_start}>
    <Button
     disabled={this.state.isNotStartGameButton}
      buttonStyle={{width:250,borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0, backgroundColor:"black"}}
      title='INICIAR JOGO'
       />
  
</Card>




    </View>
    
     
    );

  }else {
    return <AppLoading />

  }}

}



export default EscolherTimes;