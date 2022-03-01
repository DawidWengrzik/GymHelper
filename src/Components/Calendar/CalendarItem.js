import '../../Styles/calendarItem.css'
import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { useState } from "react";
import EventModal from "./EventModal";
import { useSelector } from 'react-redux';
import ActiveEvents from './ActiveEvents';

const CalendraItem = ({ date,weekDay, calendarItemKey }) =>{

    const globalEvents = useSelector(state => state.events);

    const [active, setActive] = useState(false);
    const [events, setEvents] = useState(calendarItemKey in globalEvents ? globalEvents[calendarItemKey]:[]);

    const stateHandler = (e) => {
        e.preventDefault();
        setActive(!active);      
    }
    return(
        <div className="day"> {/* ??? should i use portal? ??? */}
            {active ? <EventModal stateHandler={stateHandler} events={events} setEvents={setEvents} calendarItemKey={calendarItemKey}/> : null}
            <span className="date__container">{ date }</span>
            <span className="week-day__name">{ weekDay }</span>

            {/* !!! Add current events Component !!! */}
            <ActiveEvents calendarItemKey={calendarItemKey}/>

            {/* State handler and clear the component state*/}
            <button onClick={ e => {stateHandler(e); setEvents([])} } className="add__event">
                <FontAwesomeIcon icon={faPlus} />
            </button>
        </div>
    )
}

export default CalendraItem;