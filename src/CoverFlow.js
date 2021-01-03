// importing fontawesome icons

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCubes } from "@fortawesome/free-solid-svg-icons";

// defining and exporting the CoverFlow function

const CoverFlow=()=>{

    return (

        <div id="cover-flow" className="selected-option">

            <FontAwesomeIcon icon={faCubes} className="option-icon"/>
            <span>Cover flow</span>                                

        </div>

    );

}

export default CoverFlow;