import React from "react";
import '../../Styles/bodyPartition.css'

const BodyPartition = ({ partition }) => {    
    return(
        <div className="partition__container">
            <span>{partition}</span>
            <button className="radio__btn"></button>
        </div>
    )
}

export default BodyPartition;