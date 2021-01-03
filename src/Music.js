// importing fontawesome icons

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeadphones } from "@fortawesome/free-solid-svg-icons";

// defining and exporting the Music function

const Music=()=>{

    return (

        <div id="music" className="selected-option">

            <FontAwesomeIcon icon={faHeadphones} className="option-icon"/>
            <span>Music</span>

        </div>

    );    

}

export default Music;