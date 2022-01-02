const myState = new Date().getFullYear()

const yearReducer = (state = myState, action) => {
    switch(action.type){
        case "YEAR_INCREMENT":
            return state + 1
        default:
            return state
    }
}
export default yearReducer;