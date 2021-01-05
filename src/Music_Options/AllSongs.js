// importing fontawesome icons

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGuitar } from "@fortawesome/free-solid-svg-icons";

// defining and exporting the AllSongs function

const AllSongs=()=>{

    return (

        <div id="all-songs" className="selected-option">

            <FontAwesomeIcon icon={faGuitar} className="option-icon"/>
            <span>AllSongs</span>

        </div>

    );

}

export default AllSongs;