import counterReducer from "./counterReducer.js";
import loggedReducer from "./loggedReducer";
import {combineReducers} from "redux";

const allReducers = combineReducers({
    counter: counterReducer, 
    logged: loggedReducer
});

export default allReducers;