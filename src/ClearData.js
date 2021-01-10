import React from "react";
import StartDice from "./StartDice.png"

const ClearData = props => {
    return(
        <div>
            <img 
                 alt="Clear"
                onClick={props.clearState} 
                 style={{ cursor: "pointer" }}
                width="20%"
                src={StartDice}            
            />
        </div>
    );
};

export default  ClearData;