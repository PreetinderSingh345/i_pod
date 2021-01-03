// importing react and font awesome icons

import React from "react";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBackward, faForward, faPause, faPlay } from "@fortawesome/free-solid-svg-icons";

// defining and exporting the Menu class

class Menu extends React.Component{

    constructor(){
        super();
    }

    // menu move function to handle the movement inside the menu element

    menuMove=(event)=>{
                
        // getting the menu element and the menu center button

        let element=event.target;
        let centerElement=document.getElementById("menu-center-button");

        // returning if the movement is inside the menu center button

        if(element==centerElement){
            return ;
        }

        // getting the center coordinates of menu center button and rounding them

        let centerProperties=centerElement.getBoundingClientRect();

        let centerX=centerProperties.x+45;
        let centerY=centerProperties.y+45;

        centerX=parseInt(centerX);
        centerY=parseInt(centerY);        

        // getting the mouse coordinates
        
        let currX=event.clientX;
        let currY=event.clientY;        

        // finding the angle made by a vertical line passing through the center(of the menu center button) and the line passing through the center and the cursor

        let angleDeg=(Math.atan2(currY-centerY, currX-centerX)*180)/Math.PI;
        
        angleDeg+=90;

        if(angleDeg<0){
            angleDeg+=360;
        }      

        // printing the angle
        
        console.log(angleDeg);

    }

    // center clicked function to handle the event when the menu center button is clicked

    centerClicked=()=>{
        console.log("clicked");
    }

    render(){
        return(

            <div id="menu" onMouseMove={(event)=>this.menuMove(event)}>
                <div id="menu-center-button" onClick={this.centerClicked}>

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