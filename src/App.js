import React from "react"
import './App.css';
import Home from "./pages/Home";
import Error from "./pages/Error";
import Rooms from "./pages/Rooms";
import SingleRooms from "./pages/SingleRooms";
import {Route,Switch} from "react-router-dom";
import Navbar from "./components/Navbar"

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Switch>
        <Route exact path="/" component ={Home}></Route>
        <Route exact path="/rooms/" component ={Rooms}></Route>
        <Route exact path="/rooms/:rooms" component ={SingleRooms}></Route>
        <Route component ={Error}></Route>
      </Switch>
    </div>
  );
}

export default App;
