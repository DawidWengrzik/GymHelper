const myState = new Date().getMonth()+1

const monthReducer = (state = myState, action) => {
    switch(action.type){
        case "MONTH_INCREMENT":
            if (state > 12) {
                return state + 1
            }
            else{
                state = 1
                return state
            }
            
        default:
            return state
    }        
}
export default monthReducer;