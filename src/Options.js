// importing fontawesome icons

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";

// defining and exporting the Options function

const Options=(props)=>{
    
    return (

        <div id="options-container"
            value={props.highlightedValue}
        >

            <div id="ipod-heading">
                <span>Ipod.js</span>                
            </div>

            <div className="option" id="option1">

                <span>Cover flow</span> 
                <FontAwesomeIcon icon={faAngleRight} className="arrow-icon"/>
                
            </div>

            <div className="option" id="option2">

                <span>Music</span> 
                <FontAwesomeIcon icon={faAngleRight} className="arrow-icon"/>

            </div>

            <div className="option" id="option3">

                <span>Games</span> 
                <FontAwesomeIcon icon={faAngleRight} className="arrow-icon"/>  

            </div>

            <div className="option" id="option4">

                <span>Settings</span> 
                <FontAwesomeIcon icon={faAngleRight} className="arrow-icon"/>  

            </div>

        </div>

    );    

}

export default Options;