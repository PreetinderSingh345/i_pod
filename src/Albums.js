// importing fontawesome icons

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCompactDisc } from "@fortawesome/free-solid-svg-icons";

// defining and exporting the Albums function

const Albums=()=>{

    return (

        <div id="albums" className="selected-option">

            <FontAwesomeIcon icon={faCompactDisc} className="option-icon"/>
            <span>Albums</span>

        </div>

    );

}

export default Albums;