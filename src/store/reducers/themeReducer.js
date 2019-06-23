import { CHANGE_THEME } from '../types';
import repass from '../../repass';

const defaultState = {
    theme: 'light'
}

const themeReducer  = (state=defaultState, action) => {
    if (action.type === CHANGE_THEME) {
        if (state.theme === 'light') {
            repass.post(`changetheme/dark`);
            return {...state, theme: 'dark'};
        } else {
            repass.post(`changetheme/light`);
            return {...state, theme: 'light'}
        }
    }
    return state;
}

export default themeReducer;