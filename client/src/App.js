import React from 'react';

import "./App.css"
import {Route} from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import Login from "./components/Login";
import Signup from './components/Signup';
import WorkoutList from './components/WorkoutList'

function App() {
  return (
    <div className="App">
      <NavBar />
        <WorkoutList />
      
      <Route exact path="/" component={Home}/>
      <Route path="/login" component={Login}/>
      <Route path="/signup" component={Signup}/>
    </div>
  );
}

export default App;
