import { CHANGE_THEME, LOGIN, LOGOUT } from './types';

export const changeTheme = () => {
    return {
        type: CHANGE_THEME
    }
}

export const userLogin = (user) => {
    return {
        type: LOGIN,
        payload: user
    };
}

export const userLogout = () => {
    return {
        type: LOGOUT
    }
}