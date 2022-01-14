const myState = new Date().getFullYear()


// Year Reducer which is used when arrow in calendar is clicked.
const yearReducer = (state = myState, action) => {
    switch(action.type){
        case "YEAR_INCREMENT":
            return state + 1
        case "YEAR_DECREMENT":
            return state - 1
        default:
            return state
    }
}
export default yearReducer;