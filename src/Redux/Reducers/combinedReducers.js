import monthReducer from './monthReducer';
import yearReducer from './yearReducer';
import eventsReducer from './eventsReducer';
import { combineReducers  } from 'redux';

const allReducers = combineReducers({
    events: eventsReducer,
    month: monthReducer,
    year: yearReducer
});

export default allReducers;