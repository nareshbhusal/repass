import { LOGIN, LOGOUT } from '../actions/types';

const defaultState = {
    loggedIn: false,
    user: null
};

const authReducer = (state=defaultState, action) => {
    switch(action.type) {
        case LOGIN:
            return { ...state, loggedIn: true, user: action.payload }
            
        case LOGOUT:
            return { ...state, loggedIn: false, user: null };
    }
    return state;
}

export default authReducer;