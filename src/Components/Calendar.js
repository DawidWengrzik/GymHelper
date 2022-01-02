import React,  { useEffect, useState }from "react";
import '../Styles/calendar.css'
import getMonth from "../Redux/getMonth";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { useSelector, useDispatch } from "react-redux";

const Calendar = () => {
 
    {/* Redux State */}

    const month = useSelector(state => state.month);
    const year = useSelector(state => state.year);

    const weekDays = {
        '0': 'Sunday',
        '1': 'Monday',
        '2': 'Tuesday',
        '3': 'Wednesday',
        '4': 'Thursday',
        '5': 'Friday',
        '6': 'Saturday',
    }
    return(
        <div className="calendar__container">
            <div className="year">
                <input type="button" value="<"  className="decrement__btn"/>
                <span> { year } </span>
                <input type="button" value=">" className="increment__btn" />
            </div>
            <div className="month">
                <input type="button" value="<"  className="decrement__btn"/>
                <span className="">{ month }</span>
                <input type="button" value=">" className="increment__btn" />
            </div>            
            <div className="days__container">
                {/* Clear the code export */}
                {/* Mapping our function */}
                {getMonth(month, year).map( el => 
                    <div className="day" 
                    key={`${el.getFullYear()}, ${el.getMonth()}, ${el.getDate()}`}>
                        {/* Inside day box */}
                        <div className="date__container">{ el.getDate() }</div>
                        <span className="week-day__name">{ weekDays[el.getDay()] }</span>
                        <button className="add__event">
                            <FontAwesomeIcon icon={faPlus} />
                        </button>
                    </div>)}
            </div>
        </div>
    )
}

export default Calendar;