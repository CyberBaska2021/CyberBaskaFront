import React, { Component,useState  }  from "react";
import {
  useFonts,
  RopaSans_400Regular,
  RopaSans_400Regular_Italic,
} from '@expo-google-fonts/ropa-sans'
import { StatusBar } from 'expo-status-bar';
import AppLoading from 'expo-app-loading';
import { SafeAreaView,StyleSheet, Text, View, Modal,Image,Dimensions} from 'react-native';
import { ThemeProvider, Button, Input, Card,Icon, ListItem, Avatar  } from 'react-native-elements';
import * as Font from 'expo-font';
import axios from 'axios';
import CountDown from 'react-native-countdown-component';

const styles = StyleSheet.create({
  container: {
    
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    
  }, centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },

  game_view: {
    display:'flex',
    flexDirection:'row',
    backgroundColor: 'orange',
    flexWrap:'wrap',
    height:Dimensions.get('window').height,
    alignItems:'flex-start'

    
    
    
  }, game_view2: {

    marginTop:'12%',
    display:'flex',
    flexDirection:'row',
    position:'relative',
   top:'80%',
    backgroundColor: 'orange',
    flexWrap:'wrap'

    
    
    
  },
  game_view3: {
marginLeft:'30%',
    display:'flex',
    flexDirection:'row',
    position:'relative',
   top:'40%',
    backgroundColor: 'orange',
    flexWrap:'wrap'

    
    
    
  },placar_a: {
    marginLeft:'38%',
        marginTop:'5%',
        display:'flex',
        flexDirection:'row',
        position:'relative',
       top:'40%',
        backgroundColor: 'orange',
        flexWrap:'wrap'
    
        
        
        
      },placar_b: {
        marginLeft:'38%',
            
            display:'flex',
            flexDirection:'row',
            position:'relative',
           top:'40%',
            backgroundColor: 'orange',
            flexWrap:'wrap'
        
            
            
            
          },
  game_view_a: {
   
    marginLeft:20,
    height:50,
    width:50,
    alignItems:'center',
    marginTop:10,
    
    borderRadius: 25,
     backgroundColor:"red"
    
    
  },
  game_view_b: {
    marginTop:10,
   position:'relative',
   
    marginLeft:20,
    height:50,
    width:50,
    alignItems:'center',
    
    
    borderRadius: 25,
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
      isExpanded:'false',
      placar_a:0,
      placar_b:0,
      isVisibleModal:false,
      nome_modal:'',
      time_escolhido:''
  }

  async _loadFontsAsync() {
    await Font.loadAsync(customFonts);
    this.setState({ fontsLoaded: true });
  }

  componentDidMount() {
    this._loadFontsAsync();
    axios.get('https://cyber-api-cf4r3nqdma-rj.a.run.app/api/get_teams_list')
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

  abrirModal = (nome,time_escolhido) => {
    this.setState({isVisibleModal:true});
    this.setState({nome_modal:nome});

    if(time_escolhido=='A'){
      this.setState({time_escolhido:'A'});

    }

    else{
      this.setState({time_escolhido:'B'});

    }
      
  }
  fecharModal = (time_escolhido) => {

    if (time_escolhido=='A'){
    this.setState({isVisibleModal:false});

    
    this.setState({placar_a:this.state.placar_a+2});}
    else

    {

      this.setState({isVisibleModal:false});

    
    this.setState({placar_b:this.state.placar_b+2})


    }

      
      
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
    axios.get('https://cyber-api-cf4r3nqdma-rj.a.run.app/api/get_teams?team='+this.state.TEAM_A)
      .then(response => {
        this.setState({
      
      TEAM_A_PLAYERS: response.data,
        });console.log(this.state.TEAM_A_PLAYERS)

      })
      .catch(console.log)
  }

  comecarJogo = () => {
    this.setState({isGameStart:true});console.log(this.state);
    
    axios.post('https://cyber-api-cf4r3nqdma-rj.a.run.app/api/get_team_a',this.state)
    .then(response => {
      this.setState({
    
    TEAM_A_PLAYERS: response.data,
      });console.log(this.state.TEAM_A_PLAYERS)

    })
    .catch(console.log);
    
    axios.post('https://cyber-api-cf4r3nqdma-rj.a.run.app/api/get_team_b',this.state)
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
    
    <Modal
        animationType="slide"
        transparent={true}
        visible={this.state.isVisibleModal}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          this.fecharModal;
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>{this.state.nome_modal}</Text>
            <Button
              style={[styles.button, styles.buttonClose]}
              onPress={()=>this.fecharModal(this.state.time_escolhido)}
              title='2 PT'
            >
              <Text style={styles.textStyle}>Hide Modal</Text>
            </Button>
          </View>
        </View>
      </Modal>
         

          
  {this.state.TEAM_A_PLAYERS.map((l, i) => (
    
    <Button key={i}
    onPress={() => this.abrirModal(l.name,'A')}
    disabled={this.state.isNotChooseTeamB}
     buttonStyle={styles.game_view_a}
     title={l.number}
      />


  ))}

<View style={styles.placar_a}>

<Text style={{fontSize:120,backgroundColor:'orange', color:'#D75413', fontFamily: 'RopaSans_400Regular'}}>{this.state.placar_a}</Text>
</View>

<View style={styles.game_view3}>
<CountDown
        until={60 * 10}
        size={30}
        onFinish={() => alert('Finished')}
        digitStyle={{backgroundColor: 'orange'}}
        digitTxtStyle={{color: 'black'}}
        timeToShow={['M', 'S']}
        timeLabels={{m: 'M', s: 'S'}}
        
      />

</View>
<View style={styles.placar_b}>
<Text style={{fontSize:120, color:'#D75413',backgroundColor:'orange', fontFamily: 'RopaSans_400Regular'}}>{this.state.placar_b}</Text>

</View>
<View style={styles.game_view2}>
{this.state.TEAM_B_PLAYERS.map((l, i) => (
   
    <Button key={i}
    onPress={() => this.abrirModal(l.name,'B')}
    disabled={this.state.isNotChooseTeamB}
     buttonStyle={styles.game_view_b}
     title={l.number}
      />


  ))}

</View>

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
  <Card.Title style={{fontSize: 25,fontFamily: 'RopaSans_400Regular'}}>Local</Card.Title>
  <Card.Divider/>
  
    <Text style={{marginBottom:20,fontSize: 20, fontFamily: 'RopaSans_400Regular'}}>
      {this.state.TEAM_A}
    </Text>
    <Button
     
      buttonStyle={{width:250,borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0, backgroundColor:'black'}}
      title='ESCOLHER TIME LOCAL'
      onPress={this.escolherTimeA} />
  
</Card>

<Card containerStyle= {styles.card_team_b}>
  <Card.Title style={{fontSize: 25, fontFamily: 'RopaSans_400Regular'}}>Visitante</Card.Title>
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