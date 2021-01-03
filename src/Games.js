// importing fontawesome icons

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGamepad } from "@fortawesome/free-solid-svg-icons";

// defining and exporting the Games function

const Games=()=>{

    return (

        <div id="games" className="selected-option">

            <FontAwesomeIcon icon={faGamepad} className="option-icon"/>
            <span>Games</span>

        </div>

    );

}

export default Games;