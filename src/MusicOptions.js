// importing fontawesome icons

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";

// defining and exporting the MusicOptions function

const MusicOptions=(props)=>{

    return(

        <div className="options-container"
            value={props.highlightedValue}
        >

            <div className="option" id="option5">

                <span>All songs</span> 
                <FontAwesomeIcon icon={faAngleRight} className="arrow-icon"/>

            </div>

            <div className="option" id="option6">

                <span>Artists</span> 
                <FontAwesomeIcon icon={faAngleRight} className="arrow-icon"/>

            </div>

            <div className="option" id="option7">

                <span>Albums</span> 
                <FontAwesomeIcon icon={faAngleRight} className="arrow-icon"/>  

            </div>

        </div>

    ); 

}

export default MusicOptions;