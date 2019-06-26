import React, { Component } from 'react'
import {Link} from "react-router-dom";
import './navbar.style.css';

export default class Navbar extends Component {
 
render() {
return (

    <nav className="nav">
 
        <ul className="ul"> 
   
            <li className="li"> <Link className="link" to="/">Forside</Link></li>
            <li className="li"> <Link className="link" to="/chat">Chat</Link></li>
            <li className="li"> <Link className="link" to="/profil">Profil </Link>
            <Link className="link" to="/logout">/Log ud </Link>
            </li>
            <li className="li"> <Link className="link" to="/founder/useradmin/5cffb52d1fef910338caebef">Admin</Link></li>
            
        </ul>
    </nav>

)
}
}
