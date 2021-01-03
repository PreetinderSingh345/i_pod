// importing fontawesome icons

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCogs } from "@fortawesome/free-solid-svg-icons";

// defining and exporting the Settings function

const Settings=()=>{

    return (

        <div id="settings" className="selected-option">

            <FontAwesomeIcon icon={faCogs} className="option-icon"/>
            <span>Settings</span>

        </div>

    );

}

export default Settings;