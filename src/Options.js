// defining and exporting the Options function

const Options=(props)=>{
    
    return (

        <div id="options-container"
            value={props.highlightedValue}
        >

            <div className="option" id="option1">Cover flow</div>
            <div className="option" id="option2">Music</div>
            <div className="option" id="option3">Games</div>
            <div className="option" id="option4">Settings</div>

        </div>

    );    

}

export default Options;