const myState = new Date().getMonth()

// Month Reducer which is used when arrow in calendar is clicked.

const monthReducer = (state = myState, action) => {
    switch(action.type){
        case "MONTH_INCREMENT":
            if(state < 11){
                return state + 1
            }
            else{
                state = 0
                return state
            }
            
        case "MONTH_DECREMENT":
            if(state > 0){
                return state - 1
            }
            else{
                state = 11
                return state
            }
            
        default:
            return state
    }        
}
export default monthReducer;