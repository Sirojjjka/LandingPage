import {combineReducers, createStore} from "redux";
import {reducer as formReducer} from 'redux-form';
import tableReducer from "../reducers/tableReducer";

let reducer=combineReducers({
    form:formReducer,

});

const store = createStore(reducer);

export default store;
