import React, { Component } from 'react'
import {Link} from "react-router-dom";

import './siteBar.style.css';


class Sitebar extends Component {

render() {
return (

<nav id="snav">



    <ul id="sul">
        <li id="sli">
            <Link to="/founder/useradmin/5cffb52d1fef910338caebef">Bruger Admin</Link>
        </li>
        <li id="sli1">
            <Link to="/founder/statistik">Statistik </Link>
        </li>
        <li id="sli2">
            <Link to="/founder/creatuser">Opret Bruger </Link>
        </li>
    </ul>
</nav>

)
}
}
export default Sitebar