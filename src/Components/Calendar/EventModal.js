import React from "react";
import '../../Styles/eventModal.css';
import BodyPartition from "./BodyPartition";
import { useState } from 'react';

const EventModal = ({ stateHandler, events, setEvents }) => {

    const [partition] = useState(["Nogi", "Klatka", "Plecy", "Barki", "Biceps", "Triceps"]);
    
    const submitEventsHandle = (e) => {
        e.preventDefault();
    }

    return(
        <div className="event__container">
            <form className="event__form">   
                <span className="train__head">Trening</span>              
                <div>                                                       
                    <ul className="partitions__list">
                        {partition.map(el => 
                            <li  key={el}>
                                <BodyPartition partition={el} events={events} setEvents={setEvents}/>
                            </li>
                            )
                        }
                    </ul>
                </div>
                <button onClick={stateHandler} className="close__btn">X</button>
                <button onClick={stateHandler} className="submitPartitions" type="submit">Submit</button>
            </form>
        </div>
    )
}
export default EventModal;