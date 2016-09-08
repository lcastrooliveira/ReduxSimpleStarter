import {FETCH_WEATHER} from '../actions/index';

export default function(state = [], action) {
    switch(action.type) {
        case FETCH_WEATHER:
            //this is a can of worms dont ever manipulate state directly
            //return state.push(action.payload.data);
            //use this instead(create an entirely new array)
            //return state.concat([action.payload.data]);
            //below is the same thing but with ES6 syntax sugar
            return [action.payload.data,...state];
    }
    return state;
}