// importing fontawesome icons

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBackward, faForward, faPause, faPlay } from "@fortawesome/free-solid-svg-icons";

// defining and exporting the Menu function

const Menu=(props)=>{   

    // getting the needed functions from props

    const {menuMove, centerClicked, menuClicked, centerDown, centerUp}=props;

    return(

        <div id="menu" onMouseMove={(event)=>menuMove(event)}>
            <div id="menu-center-button" onClick={(event)=>centerClicked(event)} onMouseDown={(event)=>centerDown(event)} onMouseUp={(event)=>centerUp(event)}>

                <div id="menu-content" className="menu-icon" onClick={menuClicked}>menu</div>
                <FontAwesomeIcon icon={faBackward} className="menu-icon" id="backward"/>
                <FontAwesomeIcon icon={faForward} className="menu-icon" id="forward"/>
                <FontAwesomeIcon icon={faPlay} className="menu-icon" id="play"/>
                <FontAwesomeIcon icon={faPause} className="menu-icon" id="pause"/>

            </div>
        </div>

    );

}

export default Menu;