import React from "react";
import '../../Styles/calendarItem.css';
import BodyPartition from "./BodyPartition";
import { useState } from 'react';

const CalendarItem = ({ stateHandler }) => {

    const [partition] = useState(["Nogi", "Klatka", "Plecy", "Barki", "Biceps", "Triceps"]);

    return(
        <div className="event__container">
            <form className="event__form">   
                <span className="train__head">Trening</span>              
                <div>                                                       
                    <ul className="partitions__list">
                        {partition.map(el => 
                            <li  key={el}>
                                <BodyPartition partition={el}/>
                            </li>
                            )
                        }
                    </ul>
                </div>
                <button onClick={stateHandler} className="close__btn">X</button>
                <button className="submitPartitions" type="submit">Submit</button>
            </form>
        </div>
    )
}
export default CalendarItem;