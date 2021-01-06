// importing fontawesome icons, audio player and thunder audio

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGuitar } from "@fortawesome/free-solid-svg-icons";

import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
import thunder from "../audio/thunder.mp3";

// defining and exporting the AllSongs function

const AllSongs=()=>{

    return (

        <div id="all-songs" className="selected-option">            

            <div id="song-heading">
                <FontAwesomeIcon icon={faGuitar} className="option-icon"/>        
                <span>AllSongs</span>
            </div>            

            <div id="song-img-description-container">

                <div id="song-img">
                    <img src="https://images.unsplash.com/photo-1599507754874-7ed818c4c009?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Nnx8bGlnaHRuaW5nfGVufDB8MnwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60" alt="bolt"/>
                </div>

                <div id="song-description">

                    <div id="song-name">Thunder</div>
                    <div id="song-singer">Imagine Dragons</div>

                </div>

            </div>                

            <AudioPlayer                
                src={thunder}
            />

        </div>

    );

}

export default AllSongs;