const eventsReducer = (state={}, action) => {
    switch(action.type){
        case "ADD_EVENT":  
            state[action.calendarItemKey] = action.events                     
            return state       
                     
        default:
            return state
    }
}

export default eventsReducer;
