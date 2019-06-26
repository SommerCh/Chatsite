import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Navbar from './components/navbar/navbar';
import Forside from './components/landingModul/forside'
import ForsideTo from './components/landingModul/forsideTo'
import Chatsite from './components/chatModul/chatsite';
import Statistik from './components/adminModul/statistikAdmin/statistikAdmin'
import UserAdmin from './components/adminModul/userAdmin/userAdmin'
import CreatUserFromAdmin from './components/adminModul/creatUserAdmin/creatUserAdmin'
import BrugerProfil from './components/brugerModul/brugerProfil/brugerProfil'
// import Chatsite from './components/chatModul/chatsite'

import './App.css';
import Logud from './components/brugerModul/brugerProfil/logud';

export default class App extends Component {
render() {
return (
<Router>
  
  <Navbar />
  
  <Switch>
    <Route exact path="/" component={Forside} />
    <Route exact path="/userdemo" component={ForsideTo} />
    <Route exact path="/chat" component={Chatsite} />
    <Route path="/founder/useradmin/:id" component={UserAdmin}/>
    <Route exact path="/founder/statistik" component={Statistik} />
    <Route exact path="/founder/creatuser" component={CreatUserFromAdmin} />
    <Route exact path="/founder/brugerprofil" component={BrugerProfil} />
    <Route exact path="/statistik" component={Statistik} />
    <Route exact path="/profil/" component={BrugerProfil} />
    <Route exact path="/logout/" component={Logud} />
  </Switch>
  
</Router>
)
}
}