import logo from './logo.svg';
import './App.css';
import Listar from "./componentes/Listar";
import { Route, BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <Router>
    <div className="container">
      Hola JoLuBaQui
      <Route exact path="/" Component={Listar}></Route>


    </div>
    </Router>
  );
}

export default App;
