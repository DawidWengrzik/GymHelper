import React, { useState } from "react";
import '../../Styles/bodyPartition.css'

const BodyPartition = ({ partition }) => {    

    const [active, setActive] = useState(false);

    const handleChecked = (e) =>{
        e.preventDefault();
        setActive(!active);
    }

    return(
        <div className="partition__container" onClick={handleChecked}>
            <span>{partition}</span>
            {active ?
                <div className="radio__btn-active"></div>:
                <div className="radio__btn"></div>
            }            
        </div>
    )
}

export default BodyPartition;