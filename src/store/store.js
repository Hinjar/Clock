import { createStore } from 'redux';
import {ON_CHANGE, ON_HOUR_CHANGE} from "../ts/const/store-const";

const store = createStore(reducer);



function reducer(state, action) {
    switch(action.type) {
        case ON_CHANGE: return { value: action.onChange };
        default: return state;
    }
}

export default store;


