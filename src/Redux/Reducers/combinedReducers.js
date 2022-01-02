import monthReducer from './monthReducer';
import yearReducer from './yearReducer';
import { combineReducers  } from 'redux';

const allReducers = combineReducers({
    month: monthReducer,
    year: yearReducer
});

export default allReducers;