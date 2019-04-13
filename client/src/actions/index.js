import { CHANGE_THEME, LOGIN } from './types';
import axios from 'axios';

export const changeTheme = () => {
    return {
        type: 'CHANGE_THEME'
    }
}

export const userLogin = (user) => {
    return {
        type: LOGIN,
        payload: user
    };
}