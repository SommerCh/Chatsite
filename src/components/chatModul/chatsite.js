import React, { Component } from 'react'
import './chat.style.css'
import Baggrundchat from './assets/baggrundchat.png'
import Face from './assets/face.jpg'
import Face2 from './assets/face2.jpg'
import Face4 from './assets/face4.jpg'


// Denne her skal deles op i flere moduler. og lave samme mappe stuktur som i admin Modulet
// Kim

export default class Chatsite extends Component {
render() {
return (
<div className="chatsite">
    <img className="bagchat" src={Baggrundchat} alt="" />

    <div id="frame">

        <div id="sidepanel">

            <div id="profile">
                <div className="wrap">
                    <img src={Face} className="status-online" alt="" />
                    <p className="name">Sommer</p>

                </div>
            </div>

            <div id="search">
                <input type="text" placeholder="Søg bruger..." />
            </div>
            <div className="brugerliste-site">
                <div className="bruger">
                    <ul>
                        <li>
                            <div className="wrap">
                                <img src={Face2} className="status-offline" alt="" />
                                <p className="name">Batman</p>
                            </div>
                        </li>
                    </ul>
                </div>
                <div className="bruger">
                    <ul>
                        <li>
                            <div className="wrap">
                                <img src={Face2} className="status-offline" alt="" />
                                <p className="name">Batman</p>
                            </div>
                        </li>
                    </ul>
                </div>
                <div className="bruger">
                    <ul>
                        <li>
                            <div className="wrap">
                                <img src={Face2} className="status-offline" alt="" />
                                <p className="name">Batman</p>
                            </div>
                        </li>
                    </ul>
                </div>
                <div className="bruger">
                    <ul>
                        <li>
                            <div className="wrap">
                                <img src={Face2} className="status-offline" alt="" />
                                <p className="name">Batman</p>
                            </div>
                        </li>
                    </ul>
                </div>
                <div className="bruger">
                    <ul>
                        <li>
                            <div className="wrap">
                                <img src={Face2} className="status-offline" alt="" />
                                <p className="name">Batman</p>
                            </div>
                        </li>
                    </ul>
                </div>
                <div className="bruger">
                    <ul>
                        <li>
                            <div className="wrap">
                                <img src={Face2} className="status-offline" alt="" />
                                <p className="name">Batman</p>
                            </div>
                        </li>
                    </ul>
                </div>
                <div className="bruger">
                    <ul>
                        <li>
                            <div className="wrap">
                                <img src={Face2} className="status-offline" alt="" />
                                <p className="name">Batman</p>
                            </div>
                        </li>
                    </ul>
                </div>
                <div className="bruger">
                    <ul>
                        <li>
                            <div className="wrap">
                                <img src={Face2} className="status-offline" alt="" />
                                <p className="name">Batman</p>
                            </div>
                        </li>
                    </ul>
                </div>
                <div className="bruger">
                    <ul>
                        <li>
                            <div className="wrap">
                                <img src={Face2} className="status-offline" alt="" />
                                <p className="name">Batman</p>
                            </div>
                        </li>
                    </ul>
                </div>

                <div className="bruger">
                    <ul>
                        <li>
                            <div className="wrap">
                                <img src={Face2} className="status-offline" alt="" />
                                <p className="name">Batman</p>
                            </div>
                        </li>
                    </ul>
                </div>


            </div>


            <div id="bottom-bar">
                <button>Se din profil</button>
                <button>Indstillinger</button>
            </div>

        </div>


        <div className="content">

            <div className="content-profile">
                <img src={Face4} className="status-online" alt="" />
                <p className="content-name">Two face</p>
            </div>

            <div className="messages">
                <ul>
                    <li className="sent">
                        <img src={Face4} alt="" />
                        <p>bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla
                        </p>
                    </li>

                    <li className="replies">
                        <img src={Face} alt="" />
                        <p>bla bla bla bla bla bla bla bla bla bla bla </p>
                    </li>

                    <li className="replies">
                        <img src={Face} alt="" />
                        <p>bla bla bla bla bla bla bla bla bla bla bla </p>
                    </li>

                    <li className="sent">
                        <img src={Face4} alt="" />
                        <p>bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla
                        </p>
                    </li>

                    <li className="replies">
                        <img src={Face} alt="" />
                        <p>bla bla bla bla bla bla bla bla bla bla bla </p>
                    </li>

                    <li className="sent">
                        <img src={Face4} alt="" />
                        <p>bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla
                        </p>
                    </li>

                    <li className="sent">
                        <img src={Face4} alt="" />
                        <p>bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla
                        </p>
                    </li>
                </ul>
            </div>
         
                <div className="wraptext">
                    <input className="inputtext" type="text" placeholder="Skriv din besked..." />
                    <input className="submit" type="button" value="Send"/>
                </div>
           
        </div>
    </div>

</div>
)
}
}
