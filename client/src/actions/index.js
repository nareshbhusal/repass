import { CHANGE_THEME, LOGIN } from './types';

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