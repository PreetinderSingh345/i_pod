// importing fontawesome icons

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPalette } from "@fortawesome/free-solid-svg-icons";

// defining and exporting the Artists function

const Artists=()=>{

    return (

        <div id="artists" className="selected-option">

            <FontAwesomeIcon icon={faPalette} className="option-icon"/>
            <span>Artists</span>

        </div>

    );

}

export default Artists;