import React from "react";
import '../../Styles/calendarItem.css';
import BodyPartition from "./BodyPartition";

const CalendarItem = ({ stateHandler }) => {

    return(
        <div className="event__container">
            <form className="event__form">                
                <div>    
                    <span className="train__head">Trening</span>                                    
                    <ul className="partitions__list">
                        <li>
                            <BodyPartition partition={"Nogi"}/>
                        </li>
                        <li>
                            <BodyPartition partition={"Klatka"}/>
                        </li>
                        <li>
                            <BodyPartition partition={"Plecy"}/>
                        </li>
                        <li>
                            <BodyPartition partition={"Barki"}/>
                        </li>
                        <li>
                            <BodyPartition partition={"Biceps"}/>
                        </li>
                        <li>
                            <BodyPartition partition={"Triceps"}/>
                        </li>
                    </ul>
                </div>
                <button onClick={stateHandler} className="close__btn">X</button>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}
export default CalendarItem;