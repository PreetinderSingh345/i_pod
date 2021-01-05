// importing react, Screen, Menu, CoverFlow, Games, Music and Settings, AllSongs, Albums and Artists components

import React from "react";
import Screen from "./Screen";
import Menu from "./Menu";
import CoverFlow from "./CoverFlow";
import Games from "./Games";
import MusicOptions from "./MusicOptions";
import Settings from "./Settings";
import AllSongs from "./AllSongs";
import Albums from "./Albums";
import Artists from "./Artists";

// defining and exporting the Ipod class

class Ipod extends React.Component{ 

    // defining the state object inside the constructor(consisting of highlightedValue, showList, showOption and selectedOption as the properties)

    constructor(){

        super();                  

        this.state={

            highlightedValue: "option1",
            showList: true,
            showOption: false,
            selectedOption: <CoverFlow/>,
            showMusicList: false

        }        

    }
    
    // menu move function to handle the movement inside the menu element

    menuMove=(event)=>{     
    
        // disabling movement inside the menu element, when neither the list nor the music list components are to be shown

        if(!this.state.showList && !this.state.showMusicList){
            return ;
        }

        // defining the pre increment and the number of parts, according to the list to be shown

        let n=null;
        let parts=null;

        if(this.state.showList){

            n=0;
            parts=4;

        }
        else if(this.state.showMusicList){

            n=4;
            parts=3;

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

        // finding the angle made by a vertical line passing through the center(of the menu center button) and the line passing through the center and the cursor(inside the menu element)

        let angleDeg=(Math.atan2(currY-centerY, currX-centerX)*180)/Math.PI;
        
        angleDeg+=90;

        if(angleDeg<0){
            angleDeg+=360;
        }      

        // performing operations on the angleDeg value, to get the selected option

        angleDeg/=30;
        angleDeg%=parts;
        angleDeg=parseInt(angleDeg);
        angleDeg++;                           
        angleDeg+=n;

        // setting the selected option(component) wrt the angleDeg value(varies from 1-7)

        let selectedOption=null;

        if(angleDeg===1){
            selectedOption=<CoverFlow/>;
        }
        else if(angleDeg===2){
            selectedOption=<MusicOptions/>;
        }
        else if(angleDeg===3){
            selectedOption=<Games/>;
        }
        else if(angleDeg===4){
            selectedOption=<Settings/>;
        }
        else if(angleDeg===5){
            selectedOption=<AllSongs/>;
        }
        else if(angleDeg===6){
            selectedOption=<Artists/>;
        }
        else{
            selectedOption=<Albums/>;
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

        // getting the highlighted value

        let highlightedValue=this.state.highlightedValue;        

        if(highlightedValue==="option2"){

            // setting the state, if music is the highlighted value

            this.setState({

                showMusicList: true,
                highlightedValue: "option5",
                selectedOption: <AllSongs/>,
                showList: false,
                showOption: false

            }, ()=>{

                // setting the styling of the newly highlighted value

                let newValue=document.getElementById(this.state.highlightedValue);
                newValue.style.backgroundColor="lightskyblue";
                newValue.style.boxShadow="0 0 2px 2px inset rgb(93, 196, 236)";

                let newArrow=document.querySelector(`#${this.state.highlightedValue} .arrow-icon`);
                newArrow.style.display="inline-block";

            });

        }
        else if(highlightedValue==="option5" || highlightedValue==="option6" || highlightedValue==="option7"){

            // setting the state, if the highlighted value is all songs, artists or albums

            this.setState({

                showList: false,
                showMusicList: false,
                showOption: true

            });

        }
        else{

            // setting the state, for other highlighted values

            this.setState({

                showList: false,
                showOption: true

            });

        }

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
        
        // getting the highlighted value and show option value

        let highlightedValue=this.state.highlightedValue;
        let showOption=this.state.showOption;

        // setting the state, if the highlighted value is all songs, artists or albums

        if(highlightedValue==="option5" || highlightedValue==="option6" || highlightedValue==="option7"){        
            
            let highlightedValue=showOption? "option5": "option1";
            let showList=showOption? false: true;
            let showMusicList=showOption? true: false;

            this.setState({

                highlightedValue: highlightedValue,
                showList: showList,            
                showOption: false,
                selectedOption: <AllSongs/>,
                showMusicList: showMusicList          

            }, ()=>{

                // setting the styling of the newly highlighted value

                let newValue=document.getElementById(this.state.highlightedValue);
                newValue.style.backgroundColor="lightskyblue";
                newValue.style.boxShadow="0 0 2px 2px inset rgb(93, 196, 236)";

                let newArrow=document.querySelector(`#${this.state.highlightedValue} .arrow-icon`);
                newArrow.style.display="inline-block";                

            });
        }
        else{

            // setting the state, for other highlighted values            

            this.setState({

                highlightedValue: "option1",
                showList: true,
                showOption: false,
                selectedOption: <CoverFlow/>            

            }); 

        }

    }

    render(){
        return (

            <div id="ipod">

                <Screen

                    highlightedValue={this.state.highlightedValue}    
                    showList={this.state.showList}
                    showOption={this.state.showOption}
                    selectedOption={this.state.selectedOption}
                    showMusicList={this.state.showMusicList}

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