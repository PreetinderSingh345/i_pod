// importing react and font awesome icons

import React from "react";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBackward, faForward, faPause, faPlay } from "@fortawesome/free-solid-svg-icons";

// defining and exporting the Menu class

class Menu extends React.Component{

    render(){
        return(

            <div id="menu">
                <div id="menu-center-button">

                    <div id="menu-content" className="menu-icon">menu</div>
                    <FontAwesomeIcon icon={faBackward} className="menu-icon" id="backward"/>
                    <FontAwesomeIcon icon={faForward} className="menu-icon" id="forward"/>
                    <FontAwesomeIcon icon={faPlay} className="menu-icon" id="play"/>
                    <FontAwesomeIcon icon={faPause} className="menu-icon" id="pause"/>

                </div>
            </div>

        );
    }

}

export default Menu;