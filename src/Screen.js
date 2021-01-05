// importing Options and MusicOptions component

import MusicOptions from "./Music_Options/MusicOptions";
import Options from "./Options";

// defining and exporting the Screen function

const Screen=(props)=>{
    
    return (
        <div id="screen">

            {props.showList && 
                <Options
                    highlightedValue={props.highlightedValue}
                />
            }   

            {props.showMusicList &&
                <MusicOptions
                    highlightedValue={props.highlightedValue}
                />
            }            

            {props.showOption &&
                props.selectedOption
            }

        </div>
    );    

}

export default Screen;