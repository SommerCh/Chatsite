import React, { Component } from 'react';
import './brugerProfil.style.css';
import Face from './face.jpg'


export default class BrugerProfil extends Component {

render() {
return (
<div id="side">


    <div className="brugerprofil">
        <h1>Profil</h1>
        <img className="img" src={Face} alt="" />

        <div className="upload">
   
                <input type='file' className="imageUpload" accept=".png, .jpg, .jpeg" />
                <label className="label" for="imageUpload"></label>

       
        </div>



        <div className="raekke">
        <input className="redigerknap" type="button"/>
            <label>Bruger navn: </label>
            <span>Sommer</span>
  
        </div>

        <div className="raekke">
        <input className="redigerknap" type="button"/>
            <label>Email: </label>
            <span>Sommer@hol.dk</span>
           
        </div>
        <div className="raekke">
        <input className="redigerknap" type="button"/>
            <label>Kodeord: </label>
            <span>*****</span>
          
        </div>

      
<input className="gem" type="button" value="Gem"/>
<input className="logud" type="button" value="Log ud"/>
    </div>
</div>
)
}
}