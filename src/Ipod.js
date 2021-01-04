// importing react, Screen, Menu, CoverFlow, Games, Music and Settings components

import React from "react";
import Screen from "./Screen";
import Menu from "./Menu";
import CoverFlow from "./CoverFlow";
import Games from "./Games";
import Music from "./Music";
import Settings from "./Settings";

// defining and exporting the Ipod class

class Ipod extends React.Component{ 

    // defining the state object inside the constructor(consisting of highlightedValue, showList, showOption and selectedOption as the properties)

    constructor(){

        super();                  

        this.state={

            highlightedValue: "option1",
            showList: true,
            showOption: false,
            selectedOption: <CoverFlow/>

        }        

    }
    
    // menu move function to handle the movement inside the menu element

    menuMove=(event)=>{     
        
        // if the list is hidden(an option is being show), then we simply return 
        
        if(!this.state.showList){
            return ;        
        }

        // getting the menu element and the menu center button

        let element=event.target;
        let centerElement=document.getElementById("menu-center-button");        

        // returning if the movement is inside the menu center button

        if(element===centerElement){
            return ;
        }

        // removing the styling of the previously highlighted value

        let prevValue=document.getElementById(this.state.highlightedValue);
        prevValue.style.backgroundColor="whitesmoke";                
        prevValue.style.boxShadow="none";
        
        let prevArrow=document.querySelector(`#${this.state.highlightedValue} .arrow-icon`);
        prevArrow.style.display="none";

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

        angleDeg/=30;
        angleDeg%=4;
        angleDeg=parseInt(angleDeg);
        angleDeg++;                           

        // setting the selected option(component) wrt the angleDeg value(varies from 1-4)

        let selectedOption=null;

        if(angleDeg===1){
            selectedOption=<CoverFlow/>;
        }
        else if(angleDeg===2){
            selectedOption=<Music/>;
        }
        else if(angleDeg===3){
            selectedOption=<Games/>;
        }
        else{
            selectedOption=<Settings/>;
        }

        // setting the state to the new highlighted value and selected option

        this.setState({

            highlightedValue: `option${angleDeg}`,
            selectedOption: selectedOption

        }, ()=>{

            // setting the styling of the newly highlighted value

            let newValue=document.getElementById(this.state.highlightedValue);
            newValue.style.backgroundColor="lightskyblue";
            newValue.style.boxShadow="0 0 2px 2px inset rgb(93, 196, 236)";

            let newArrow=document.querySelector(`#${this.state.highlightedValue} .arrow-icon`);
            newArrow.style.display="inline-block";

        });        

    }

    // center clicked function to handle the event when the menu center button is clicked

    centerClicked=(event)=>{

        // if the menu content is clicked, then we return, as we're not present inside the menu center button's circle

        let menuButton=document.getElementById("menu-content");        
        
        if(event.target===menuButton){
            return ;
        }        

        // setting the state, to hide the list and show the option

        this.setState({

            showList: false,
            showOption: true

        });

    }

    // center down function to handle the event when the menu center button is pressed down

    centerDown=(event)=>{

        // if the menu content is clicked, then we return, as we're not present inside the menu center button's circle

        let menuButton=document.getElementById("menu-content");        
        
        if(event.target===menuButton){
            return ;
        }    

        // adding shadow style

        event.target.style.boxShadow="0 0 4px 4px inset grey";

    }

    // center up function to handle the event when the menu center button is released

    centerUp=(event)=>{

        // if the menu content is clicked, then we return, as we're not present inside the menu center button's circle

        let menuButton=document.getElementById("menu-content");        
        
        if(event.target===menuButton){
            return ;
        }    

        // removing shadow style

        event.target.setAttribute("style", "none");

    }

    // menu clicked function to handle the event when the menu content is clicked

    menuClicked=()=>{

        // setting the state, to reset the highlighted value, selected option, show the list and hide the option

        this.setState({

            highlightedValue: "option1",
            showList: true,
            showOption: false,
            selectedOption: <CoverFlow/>            

        });        

    }

    render(){
        return (

            <div id="ipod">

                <Screen

                    highlightedValue={this.state.highlightedValue}    
                    showList={this.state.showList}
                    showOption={this.state.showOption}
                    selectedOption={this.state.selectedOption}

                />

                <Menu
                
                    menuMove={this.menuMove}
                    centerClicked={this.centerClicked}
                    menuClicked={this.menuClicked}
                    centerDown={this.centerDown}
                    centerUp={this.centerUp}

                />

            </div>

        );
    }

}

export default Ipod;