import { createStackNavigator, createAppContainer } from "react-navigation";
import App from './App';
import CadastrarJogador from "./Views/CadastrarJogador/CadastrarJogador";

const Routes = createStackNavigator({
  App: {
    screen: App,
  },
  CadastrarJogador: {
    screen: CadastrarJogador,
  },
});

export default createAppContainer(Routes);