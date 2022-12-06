import React from "react";
import "./School.css";
import TUP from "../Images/TUP.png";
const School = () => {
    return(
        <div className="School">
            <div className="TUP">
                <h1>My Education</h1>
                <img alt="TUP_Front" src={TUP}/>
            </div>
        </div>
        
    )
}

export default School;