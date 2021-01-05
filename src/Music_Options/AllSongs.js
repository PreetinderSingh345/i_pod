// importing fontawesome icons

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGuitar, faPlay } from "@fortawesome/free-solid-svg-icons";

// defining and exporting the AllSongs function

const AllSongs=()=>{

    return (

        <div id="all-songs" className="selected-option">

            {/* <FontAwesomeIcon icon={faGuitar} className="option-icon"/>        
            <span>AllSongs</span> */}

            <div className="song-img-description-container">

                <div className="song-img">
                    <img src="https://images.unsplash.com/photo-1599507754874-7ed818c4c009?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Nnx8bGlnaHRuaW5nfGVufDB8MnwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60" alt="bolt"/>
                </div>

                <div className="song-description">

                    <div className="song-name">Thunder</div>
                    <div className="song-singer">Imagine Dragons</div>

                </div>

            </div>                 

            <div className="song-img-description-container">

                <div className="song-img">
                    <img src="https://images.unsplash.com/photo-1524715773325-510295857892?ixid=MXwxMjA3fDB8MHxzZWFyY2h8M3x8c2hhcGV8ZW58MHwyfDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60" alt="bolt"/>
                </div>

                <div className="song-description">

                    <div className="song-name">Shape of you</div>
                    <div className="song-singer">Ed Sheeran</div>

                </div>

            </div>    

            <div className="song-img-description-container">

                <div className="song-img">
                    <img src="https://images.unsplash.com/photo-1579215176023-00341ea5ea67?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8ZmFpdGh8ZW58MHwyfDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60" alt="bolt"/>
                </div>

                <div className="song-description">

                    <div className="song-name">Believer</div>
                    <div className="song-singer">Imagine Dragons</div>

                </div>

            </div>    

        </div>

    );

}

export default AllSongs;