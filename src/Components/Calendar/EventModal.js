import React from "react";
import '../../Styles/eventModal.css';
import BodyPartition from "./BodyPartition";
import { useState } from 'react';
import { useDispatch } from "react-redux";
import { addEvent } from "../../Redux/Actions/modifyEvents";

const EventModal = ({ stateHandler, events, setEvents, calendarItemKey }) => {

    const [partition] = useState(["Nogi", "Klatka", "Plecy", "Barki", "Biceps", "Triceps"]);

    
    /* 
        Syntatcic sugar 
        Unpack the state
    */
    const dispatch = useDispatch();

    const addEventHandler = (e) => {
        stateHandler(e);        
        dispatch(addEvent( calendarItemKey, events ));
    }

    return(
        <div className="event__container">
            <form className="event__form">   
                <span className="train__head">Trening</span>              
                <div>                                                       
                    <ul className="partitions__list">
                        {partition.map(el =>                            
                            <BodyPartition partition={el} events={events} setEvents={setEvents} key={el}/>                            
                            )
                        }
                    </ul>
                </div>
                <button onClick={e => { stateHandler(e); }} className="close__btn">X</button>
                
                {/* Confirm chosen parts and add to global state */}
                <button onClick={addEventHandler} 
                    className="submitPartitions" 
                    type="submit">Submit
                </button>
            </form>
        </div>
    )
}
export default EventModal;