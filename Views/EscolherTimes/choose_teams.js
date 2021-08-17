import React, { Component,useState  }  from "react";
import {
  useFonts,
  RopaSans_400Regular,
  RopaSans_400Regular_Italic,
} from '@expo-google-fonts/ropa-sans'
import { StatusBar } from 'expo-status-bar';
import AppLoading from 'expo-app-loading';
import { SafeAreaView,StyleSheet, Text, View, Image,Dimensions} from 'react-native';
import { ThemeProvider, Button, Input, Card,Icon, ListItem, Avatar  } from 'react-native-elements';
import * as Font from 'expo-font';
import axios from 'axios';


const styles = StyleSheet.create({
  container: {
    
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    
  },

  game_view: {
    display:'flex',
    flexDirection:'row',
    
   
    backgroundColor: 'white',
    flexWrap:'wrap',
    height:Dimensions.get('window').height

    
    
    
  }, game_view2: {
    display:'flex',
    flexDirection:'row',
    position:'relative',
   top:'80%',
    backgroundColor: 'white',
    flexWrap:'wrap'

    
    
    
  },

  game_view_a: {
   
    
    marginLeft:20,
    
    height:60,
    width:60,
    alignItems:'center',
    

    marginTop:10,
    justifyContent: "space-around",
    borderRadius: 30,
    
     backgroundColor:"red"
    
    
  },
  game_view_b: {
   position:'relative',
   zIndex:-1,
top:'50%',

    marginLeft:20,
    
    height:60,
    width:60,
    alignItems:'center',
    

    marginTop:10,
    justifyContent: "space-around",
    borderRadius: 30,
    
     backgroundColor:"blue"
    
    
  }
,

  card_team_a:{
    display: "flex",
        flexDirection: "column", 
        backgroundColor: "orange",
        position: 'absolute',
top:'10%',
width:300

},
card_team_b:{

  display: "flex",
      flexDirection: "column", 
      backgroundColor: "orange",
      position: 'absolute',
top:'40%',


},

card_start:{

  display: "flex",
      flexDirection: "column", 
      backgroundColor: "orange",
      position: 'absolute',
top:'80%',



}
})

let customFonts = { 
  
  'Sans': require('C:/Users/rfs/Downloads/CyberBaska/CyberBaskaFront/assets/fonts/RopaSans-Regular.ttf')
  }






class EscolherTimes extends Component {

  
    
    state = {
      TEAMS: [],
      TEAM_A: 'Aguardando Escolha do Time... ',
      TEAM_B: 'Aguardando Escolha do Time... ',
      TEAM_A_PLAYERS:[],
      TEAM_B_PLAYERS:[],
      fontsLoaded: false,
      isChooseTeamA: false,
      isChooseTeamB: false,
      isNotChooseTeamA:true,
      isNotChooseTeamB:true,
      isNotStartGameButton:true,
      isGameStart:false,
      isExpanded:'false'
  }

  async _loadFontsAsync() {
    await Font.loadAsync(customFonts);
    this.setState({ fontsLoaded: true });
  }

  componentDidMount() {
    this._loadFontsAsync();
    axios.get('http://10.2.200.71:80/api/get_teams_list')
      .then(response => {
        this.setState({
      
      TEAMS: response.data,
        })

      })
      .catch(console.log)


  }
  
  escolherTimeA = () => {
    this.setState({isChooseTeamA:true});
      
      
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

  

  obterListaTimes = () => {
    axios.get('http://10.2.200.71:80/api/get_teams?team='+this.state.TEAM_A)
      .then(response => {
        this.setState({
      
      TEAM_A_PLAYERS: response.data,
        });console.log(this.state.TEAM_A_PLAYERS)

      })
      .catch(console.log)
  }

  comecarJogo = () => {
    this.setState({isGameStart:true});console.log(this.state);
    
    axios.post('http://10.2.200.71:80/api/get_team_a',this.state)
    .then(response => {
      this.setState({
    
    TEAM_A_PLAYERS: response.data,
      });console.log(this.state.TEAM_A_PLAYERS)

    })
    .catch(console.log);
    
    axios.post('http://10.2.200.71:80/api/get_team_b',this.state)
    .then(response => {
      this.setState({
    
    TEAM_B_PLAYERS: response.data,
      });console.log(this.state.TEAM_B_PLAYERS)

    })
    .catch(console.log)
  }

  cadastrar = () => {
    axios.post('https://apivxsiv.vortx.com.br/api/devxcadastrar', this.state)
      .then(response => {

        toast.success("Operação cadastrada com Dsucesso! 🔥🚀", {
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

  
  
  render() {

    if (this.state.fontsLoaded) {

      if (this.state.isGameStart){

        return (<View style={styles.game_view}>
    
         

          
  {this.state.TEAM_A_PLAYERS.map((l, i) => (
    
    <Button key={i}
    disabled={this.state.isNotChooseTeamB}
     buttonStyle={styles.game_view_a}
     title={l.number}
      />


  ))}

{this.state.TEAM_B_PLAYERS.map((l, i) => (
   
    <Button key={i}
    disabled={this.state.isNotChooseTeamB}
     buttonStyle={styles.game_view_b}
     title={l.number}
      />


  ))}



          </View>
          
          
          
          
          
          )
      }


    

    if (this.state.isChooseTeamA){

      return (<View >
        {
          this.state.TEAMS.map((l, i) => (
            
            <ListItem button key={i} bottomDivider onPress={() => this.TimeAEscolhido(l)}>
              <Avatar source={{uri: l.avatar_url}} />
              <ListItem.Content>
                <ListItem.Title>{l}</ListItem.Title>
                
              </ListItem.Content>
            </ListItem>
          ))
        }
      </View>)
    }

    if (this.state.isChooseTeamB){

      return (<View >
        {
          this.state.TEAMS.map((l, i) => (
            
            <ListItem button key={i} bottomDivider onPress={() => this.TimeBEscolhido(l)}>
              <Avatar source={{uri: l.avatar_url}} />
              <ListItem.Content>
                <ListItem.Title>{l}</ListItem.Title>
              
              </ListItem.Content>
            </ListItem>
          ))
        }
      </View>)
    }

    return (

        <View style={styles.container}>
    
    <Card containerStyle= {styles.card_team_a}>
  <Card.Title style={{fontSize: 25,fontFamily: 'Sans'}}>Local</Card.Title>
  <Card.Divider/>
  
    <Text style={{marginBottom:20,fontSize: 20, fontFamily: 'Sans'}}>
      {this.state.TEAM_A}
    </Text>
    <Button
     
      buttonStyle={{width:250,borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0, backgroundColor:'black'}}
      title='ESCOLHER TIME LOCAL'
      onPress={this.escolherTimeA} />
  
</Card>

<Card containerStyle= {styles.card_team_b}>
  <Card.Title style={{fontSize: 25, fontFamily: 'Sans'}}>Visitante</Card.Title>
  <Card.Divider/>
  
    <Text style={{marginBottom:20,fontSize: 20, fontFamily: 'Sans'}}>
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
      onPress={this.comecarJogo}
       />
  
</Card>




    </View>
    
     
    );

  }else {
    return <AppLoading />

  }}

}



export default EscolherTimes;