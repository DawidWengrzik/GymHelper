import React, { useState } from "react";
import '../../Styles/bodyPartition.css'

const BodyPartition = ({ partition, events, setEvents  }) => {    

    const [active, setActive] = useState(false);

    const handleChecked = (e) =>{
        e.preventDefault();
        setActive(!active);
        
        // Default for active is false!
        active === false ? 
            // Add partition to event list
            setEvents(events => [...events, partition]):
            // Remove partition from event list
            setEvents(events.filter(item => item !== partition))
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