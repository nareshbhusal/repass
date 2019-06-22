import { CHANGE_THEME } from '../types';;

const defaultState = {
    theme: 'light'
}

const themeReducer  = (state=defaultState, action) => {
    
    if (action.type === CHANGE_THEME) {
        if (state.theme === 'light') {
            return {...state, theme: 'dark'};
        } else {
            return {...state, theme: 'light'}
        }
    }
    return state;
}

export default themeReducer;