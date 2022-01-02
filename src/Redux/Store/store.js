import { createStore } from 'redux';
import allReducers from "../Reducers/combinedReducers";

export let store = createStore(
    allReducers,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__(),
);

