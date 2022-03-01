import React from "react";
import { useSelector } from "react-redux";
import "../../Styles/activeEvents.css"

const ActiveEvents = ({ calendarItemKey }) =>{

    const globalEvents = useSelector(state => state.events);


    return (
        globalEvents[calendarItemKey] !== undefined ? 

        <div className="active__events__circle">            
            <span className="events__counter">{globalEvents[calendarItemKey].length}</span>
        </div> 
        :null
    )
}

export default ActiveEvents;