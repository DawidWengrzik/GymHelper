import '../../Styles/calendar.css';
import getMonth from "../../Redux/getMonth";
import CalendarItem from "./CalendarItem";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { monthDec, monthInc, yearDec, yearInc } from "../../Redux/Actions/increments";

const Calendar = () => { 
    /* Redux State */
    const month = useSelector(state => state.month);
    const year = useSelector(state => state.year);

    /* Syntatcic sugar */
    const dispatch = useDispatch();

    const [active, setActive] = useState(false);

    const stateHandler = (e) => {
        e.preventDefault();
        setActive(!active);       
    }

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
            {active ? <CalendarItem stateHandler={stateHandler} /> : null}
            <div className="year">
                <input onClick={() => dispatch(yearDec())} 
                type="button" value="<"  className="decrement__btn"/>
                <span> { year } </span>
                <input onClick={() => dispatch(yearInc())} 
                    type="button" value=">" className="increment__btn" />                
            </div>
            <div className="month">
                <input onClick={() => dispatch(monthDec())} 
                type="button" value="<"  className="decrement__btn"/>
                <span className="">{ month + 1 }</span>
                <input onClick={() => dispatch(monthInc())} 
                type="button" value=">" className="increment__btn" />
            </div>            
            <div className="days__container">
                {/* Clear the code later => export */}
                {/* Mapping our redux state */}
                {getMonth(month, year).map( el => 
                    <div className="day" 
                    key={`${el.getFullYear()}, ${el.getMonth()}, ${el.getDate()}`}>
                        {/* Inside day box */}
                        <div className="date__container">{ el.getDate() }</div>
                        <span className="week-day__name">{ weekDays[el.getDay()] }</span>
                
                        <button onClick={stateHandler} className="add__event">
                            <FontAwesomeIcon icon={faPlus} />
                        </button>

                    </div>)}
            </div>
        </div>
    )
}

export default Calendar;