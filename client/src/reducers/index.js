import { combineReducers} from 'redux';

import {MovieReducer,Filtered} from './movie.js';


const reducers = combineReducers({
    allSeller : MovieReducer,
    Filtered : Filtered,
});

export default reducers;