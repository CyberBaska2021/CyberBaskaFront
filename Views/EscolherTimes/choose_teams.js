import React, { Component,useState  }  from "react";

import { StatusBar } from 'expo-status-bar';

import { SafeAreaView,StyleSheet, Text, View, Image} from 'react-native';
import { ThemeProvider, Button, Input, Card,Icon, ListItem, Avatar  } from 'react-native-elements';



const styles = StyleSheet.create({
  container: {
    
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
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

}
})

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

      isChooseTeam: false,
      isNotChooseTeamA:true,
      isNotChooseTeamB:true,
  }
  
  escolherTime = () => {
    this.setState({isChooseTeam:true})
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

  
  render() {
    

    if (this.state.isChooseTeam){

      return (<View >
        {
          teams.map((l, i) => (
            <ListItem key={i} bottomDivider>
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
  <Card.Title>Local</Card.Title>
  <Card.Divider/>
  
    <Text style={{marginBottom: 10}}>
      {this.state.TEAM_A}
    </Text>
    <Button
     
      buttonStyle={{width:250,borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0, backgroundColor:'black'}}
      title='ESCOLHER TIME LOCAL'
      onPress={this.escolherTime} />
  
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
      title='ESCOLHER TIME VISITANTE' />
  
</Card>


    </View>
     
    );

  }
}



export default EscolherTimes;