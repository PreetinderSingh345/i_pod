// importing react, Screen and Menu component

import React from "react";
import Screen from "./Screen";
import Menu from "./Menu";

// defining and exporting the Ipod class

class Ipod extends React.Component{    

    render(){
        return (

            <div id="ipod">

                <Screen/>
                <Menu/>

            </div>

        );
    }

}

export default Ipod;