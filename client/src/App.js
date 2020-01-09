import React from "react";

import "./App.css";
import { Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import Login from "./components/Login";

import Signup from "./components/Signup";
import Workout from "./components/Workout/Workout";
import UpdateWorkout from "./components/Workout/UpdateWorkout";
import WorkoutList from "./components/Workout/WorkoutList";
import AddWorkout from "./components/Workout/AddWorkout";
import PrivateRoute from "./utils/privateRoute";


function App() {
  return (
    <div className="App">
      <NavBar />

      <Route exact path="/" component={Home}/>
      <Route path="/login" component={Login}/>
      <Route path="/signup" component={Signup}/>
      <PrivateRoute path="/workout/:id" component={Workout}/>
      <PrivateRoute exact path="/workout" component={WorkoutList}/>
      <Route path="/updateworkout/:id" render={props => {
        return <UpdateWorkout {...props} />
      }} />
      <PrivateRoute path="/addworkout" component={AddWorkout}/>
    </div>
  );
}

export default App;