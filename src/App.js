import './App.css';
import {Route, Switch} from "react-router-dom"
import AddFood from "./screens/AddFood";
import Food from "./screens/Food";
import Header from "./components/Header";
import Home from "./screens/Home";
import LoginScreen from "./screens/LoginScreen";
import RegisterUserScreen from "./screens/RegisterUserScreen";
import { Container } from 'react-bootstrap';

function App() {
  return (
    <main>
      <Header/>
      <Container>
      <Switch>
      <Route path ="/" component={Home} exact/>
      <Route path ="/food" component={Food}/>
      <Route path ="/addfood" component={AddFood}/>
      <Route path ="/login" component={LoginScreen}/>
      <Route path ="/register" component={RegisterUserScreen}/>
      </Switch>
      </Container>
    </main>
   
  );
}

export default App;
