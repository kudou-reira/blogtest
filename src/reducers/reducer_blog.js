import {GET_POST, GET_SINGLEPOST} from '../actions/index';

const INIT_STATE = {all: [], post: null};

export default function(state = INIT_STATE, action) {
    
    switch(action.type){
            
        case GET_SINGLEPOST:
            return {...state, post: action.payload.data};
    
        case GET_POST:
            return {...state, all: action.payload.data};
            
        default:
            return state;
    }
    
}