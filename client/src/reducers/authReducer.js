import { LOGIN, LOGOUT } from '../actions/types';

const defaultState = {
    user: null
};

const authReducer = (state=defaultState, action) => {
    switch(action.type) {
        case LOGIN:
            return { ...state, user: action.payload.user }
            
        case LOGOUT:
            return { ...state, user: null };
    }
    return state;
}

export default authReducer;