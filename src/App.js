import React from "react";
//import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Components/CSS/ContributedS.css";
import "./Components/CSS/style.css";
import {
  BrowserRouter as Router, Switch, Route, Link, Image, Redirect} from "react-router-dom";


//import Button from "react";
//import {Inject, ScheduleComponent, Day, Week, WorkWeek, Month, Agenda} from "@syncfusion/ej2-react-schedule"; //needed only for Schedule class, not for ScheduleNew
import Home from "./Components/Klassen/Home";
import Participants from "./Components/Klassen/Participants";
import Poster from "./Components/Klassen/Poster";
import Parallel from "./Components/Klassen/Parallel";
import Invited from "./Components/Klassen/Invited";
import Contributed from "./Components/Klassen/Contributed";
import Presentation from "./Components/Klassen/Presentation";
//import Schedule from "./Components/Klassen/Schedule";
import ScheduleNew from "./Components/Klassen/ScheduleNew";

export default function App() {


  return (



<Router>
    <div>
    <Route path="/" exact component={Home} />
    <Route path="/Home" component={Home} />
    <Route path="/Participants" component={Participants} />
    <Route path="/Poster" component={Poster} />
    <Route path="/Parallel" component={Parallel} />
    <Route path="/Invited" component={Invited} />
    <Route path="/Contributed" component={Contributed} />
    <Route path="/Presentation" component={Presentation} />
    <Route path="/ScheduleNew" component={ScheduleNew} />
    </div>
</Router>


  );
}

//project created by Anton Chaly, HTWK Leipzig :)