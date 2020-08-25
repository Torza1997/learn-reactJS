import React, { Component } from "react";
import {BrowserRouter as Router ,Route,Switch} from 'react-router-dom';
import Axios from "axios";
import Navbar from "../navbar/nav";
import Gellery from '../page/gellery';
import Contact from '../page/contact';
import Profile from '../page/profile';
import "./style.css";

let mysql = require('mysql');
let con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "learn"
});

function App(){
    return (
      <Router >
        <div className ="app">
        <Navbar/>
        <Switch>
          <Route path="/" exact component ={Home} />
          <Route path="/profile"  component ={Profile}/>
          <Route path="/gellery"  component ={Gellery}/>
          <Route path="/contact"  component ={Contact}/>
        </Switch>
        </div>
    </Router>
    );
}
const Home =()=>(
  <div>
       <div className = "container_home">
          <h1>HOME</h1>
        </div>
      </div>
)
export default App;

