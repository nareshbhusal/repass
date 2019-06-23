import { LOGIN, LOGOUT } from '../types';

const defaultState = {
    username: null
};

const authReducer = (state=defaultState, action) => {
    switch(action.type) {
        case LOGIN:
            return { ...state, username: action.payload }
            
        case LOGOUT:
            return { ...state, username: null };
    }
    return state;
}

export default authReducer;