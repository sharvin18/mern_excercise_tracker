import React from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import Navbar from "./components/navbar.component";
import ExcerciseList from "./components/excercise-list.component";
import EditExcercise from "./components/edit-excercises.component";
import CreateExcercise from "./components/create-excercise.component";
import CreateUser from "./components/create-user.component";

function App() {

  return (
    <Router>
      <div className="container">
      <Navbar />
      <br/>
      <Route path="/" exact component={ExcerciseList}/>
      <Route path="/edit/:id" component={EditExcercise}/>
      <Route path="/create" component={CreateExcercise}/>
      <Route path="/user" component={CreateUser}/>
      </div>
    </Router>
  );
}

export default App;
