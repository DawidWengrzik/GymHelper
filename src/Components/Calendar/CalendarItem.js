import '../../Styles/calendarItem.css'
import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { useState } from "react";
import EventModal from "./EventModal";


const CalendraItem = ({date,weekDay}) =>{

    const [active, setActive] = useState(false);
    const [events, setEvents] = useState([])

    const stateHandler = (e) => {
        e.preventDefault();
        setActive(!active);       
    }
    return(
        <div className="day">
            {active ? <EventModal stateHandler={stateHandler} events={events} setEvents={setEvents}/> : null}
            <span className="date__container">{ date }</span>
            <span className="week-day__name">{ weekDay }</span>
            <button onClick={stateHandler} className="add__event">
                <FontAwesomeIcon icon={faPlus} />
            </button>
        </div>
    )
}

export default CalendraItem;