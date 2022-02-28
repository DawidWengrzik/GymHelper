export const addEvent = (calendarItemKey, events) => {
    return {
        type: "ADD_EVENT",
        calendarItemKey: calendarItemKey,
        events: events,
    }
}

export const removeEvent = () => {
    return {
        type: "REMOVE_EVENT"
    }
}
